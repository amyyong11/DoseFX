"use client";

import { useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { ClinicScene3D } from "@/components/ClinicScene3D";
import { getAllCases, getAllDrugs, gradeChoice } from "@/lib/engine";
import type { PatientReaction } from "@/lib/types";

type Mode = "browse" | "learning" | "testing";
type QuestionType = "mcq" | "short_answer" | "reasoning";
type ChatMessage = { role: "user" | "assistant"; text: string };
type DoctorErrorPayload = { error?: string; detail?: string };
const LEARNING_CONSOLIDATION_SECONDS = 30;

export function CasePlayer() {
  const cases = getAllCases();
  const drugs = getAllDrugs();

  const [mode, setMode] = useState<Mode>("browse");
  const [questionType, setQuestionType] = useState<QuestionType>("mcq");
  const [caseId, setCaseId] = useState(cases[0]?.id ?? "");
  const [testingIndex, setTestingIndex] = useState(0);
  const [choice, setChoice] = useState<string | null>(null);
  const [pendingChoice, setPendingChoice] = useState<string | null>(null);
  const [shortAnswerInput, setShortAnswerInput] = useState("");
  const [shortAnswerError, setShortAnswerError] = useState("");
  const [reasoningInput, setReasoningInput] = useState("");
  const [submittedReasoning, setSubmittedReasoning] = useState("");
  const [reasoningError, setReasoningError] = useState("");
  const [reasoningComposerOpen, setReasoningComposerOpen] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [breatherSecondsLeft, setBreatherSecondsLeft] = useState(0);
  const [learningPhase, setLearningPhase] = useState<"idle" | "timer">("idle");
  const [showEmojiKey, setShowEmojiKey] = useState(false);
  const [showDoctor, setShowDoctor] = useState(false);
  const [doctorQuestion, setDoctorQuestion] = useState("");
  const [doctorLoading, setDoctorLoading] = useState(false);
  const [doctorMessages, setDoctorMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      text: "I am your AI Doctor coach. Ask about best medication choice, risks, side effects, or why an option is unsafe.",
    },
  ]);

  const testingComplete = mode === "testing" && testingIndex >= cases.length;
  const testingPatient = testingComplete ? cases[0] : (cases[testingIndex] ?? cases[0]);
  const patient = useMemo(() => {
    if (mode === "testing") return testingPatient;
    return cases.find((c) => c.id === caseId) ?? cases[0];
  }, [mode, testingPatient, cases, caseId]);

  const feedback = useMemo(() => {
    if (choice) {
      return gradeChoice(patient, choice);
    }
    return null;
  }, [patient, choice]);

  const riskScore = choice ? feedback?.score ?? 60 : 60;
  const reaction = getPatientReaction(choice, feedback?.score ?? 0);
  const celebrateIdeal = !!choice && (feedback?.score ?? 0) >= 95;
  const feedbackEmoji = feedback ? getFeedbackEmoji(feedback.score) : "";
  const testingAnswered = mode === "testing" && !!choice;
  const learningConsolidationActive = mode === "learning" && learningPhase === "timer";
  const selectedDrugName = choice ? drugs.find((drug) => drug.id === choice)?.name ?? choice : null;
  const pendingDrugName = pendingChoice ? drugs.find((drug) => drug.id === pendingChoice)?.name ?? pendingChoice : null;
  const questionHint = buildQuestionHint(patient, questionType);

  useEffect(() => {
    if (!learningConsolidationActive || breatherSecondsLeft <= 0) return;

    const timer = window.setInterval(() => {
      setBreatherSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => window.clearInterval(timer);
  }, [learningConsolidationActive, breatherSecondsLeft]);

  useEffect(() => {
    if (!learningConsolidationActive || breatherSecondsLeft > 0) return;
    if (mode !== "learning") return;

    const currentIndex = cases.findIndex((c) => c.id === caseId);
    const nextIndex = currentIndex >= 0 ? (currentIndex + 1) % cases.length : 0;
    setCaseId(cases[nextIndex]?.id ?? cases[0]?.id ?? "");
    setChoice(null);
    setLearningPhase("idle");
    setShowDoctor(false);
  }, [learningConsolidationActive, breatherSecondsLeft, mode, cases, caseId]);

  function switchMode(nextMode: Mode) {
    setMode(nextMode);
    resetAttemptState();
    if (nextMode === "testing") {
      setTestingIndex(0);
    }
  }

  function handleChoice(drugId: string) {
    if (questionType === "reasoning") {
      if (pendingChoice === drugId) {
        setReasoningComposerOpen((open) => !open);
        return;
      }
      setPendingChoice(drugId);
      setChoice(null);
      setReasoningError("");
      setReasoningComposerOpen(true);
      return;
    }
    setShortAnswerError("");
    setChoice(drugId);
  }

  function nextAttempt() {
    resetAttemptState();
  }

  function resetAttemptState() {
    setChoice(null);
    setPendingChoice(null);
    setShortAnswerInput("");
    setShortAnswerError("");
    setReasoningInput("");
    setSubmittedReasoning("");
    setReasoningError("");
    setReasoningComposerOpen(false);
    setShowHint(false);
    setBreatherSecondsLeft(0);
    setLearningPhase("idle");
  }

  function submitShortAnswer() {
    const resolved = resolveDrugFromAnswer(shortAnswerInput, drugs);
    if (!resolved) {
      setShortAnswerError("Could not match that answer. Try a medication class name from the choices.");
      return;
    }
    setShortAnswerError("");
    setChoice(resolved.id);
  }

  function submitReasoning() {
    if (!pendingChoice) {
      setReasoningError("Select a medication class first.");
      return;
    }
    const rationale = reasoningInput.trim();
    if (rationale.length < 20) {
      setReasoningError("Write at least one clear sentence explaining your reasoning.");
      return;
    }
    setReasoningError("");
    setSubmittedReasoning(rationale);
    setChoice(pendingChoice);
  }

  function startLearningConsolidation() {
    setLearningPhase("timer");
    setBreatherSecondsLeft(LEARNING_CONSOLIDATION_SECONDS);
  }

  function openDoctorFromFeedback() {
    const draftQuestion = selectedDrugName
      ? `Can you explain why ${selectedDrugName} scored ${feedback?.score ?? "this score"} for this patient and what I should monitor next?`
      : "Can you explain this medication score and what I should monitor next?";

    if (!doctorQuestion.trim()) {
      setDoctorQuestion(draftQuestion);
    }
    setShowDoctor(true);
  }

  async function askDoctor() {
    const prompt = doctorQuestion.trim();
    if (!prompt) return;
    setDoctorMessages((prev) => [...prev, { role: "user", text: prompt }]);
    setDoctorLoading(true);
    setDoctorQuestion("");
    try {
      const selectedDrug = choice ? drugs.find((drug) => drug.id === choice) ?? null : null;
      const res = await fetch("/api/doctor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question: prompt,
          context: {
            mode,
            patient,
            selectedDrug,
            feedback,
          },
        }),
      });

      if (!res.ok) {
        const errBody = (await res.json().catch(() => ({}))) as DoctorErrorPayload;
        const detail = errBody.detail?.trim();
        const summary = errBody.error?.trim();
        const message = detail ?? summary ?? `Request failed with status ${res.status}`;
        throw new Error(message);
      }

      const data = (await res.json()) as { answer?: string };
      const answer =
        data.answer ??
        "I could not generate a response right now. Try rephrasing your question.";
      setDoctorMessages((prev) => [...prev, { role: "assistant", text: answer }]);
    } catch (error) {
      const message =
        error instanceof Error && error.message
          ? error.message
          : "AI Doctor is currently unavailable. Check your API key configuration and try again.";
      setDoctorMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: `AI Doctor is currently unavailable: ${message}`,
        },
      ]);
    } finally {
      setDoctorLoading(false);
    }
  }

  function renderInlineFeedback(): ReactNode {
    if (!feedback || testingComplete) return null;

    return (
      <div className="inline-feedback">
        <div className="score-wrap">
          <p className="score">{feedbackEmoji} Score: {feedback.score}/100</p>
          <p className="headline">{feedback.headline}</p>
        </div>
        <p className="rationale">{feedback.rationale}</p>
        <p className="feedback-label">Key points</p>
        <ul className="feedback-list">
          {feedback.bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        {feedback.evidence.length > 0 && <p className="feedback-label">Evidence</p>}
        {feedback.evidence.length > 0 && (
          <p className="evidence">
            Evidence: {feedback.evidence[0].source} - {feedback.evidence[0].quote}
          </p>
        )}
        {feedback.sideEffects.length > 0 && (
          <div className="side-effects">
            <p className="side-effects-title">Potential side effects to monitor</p>
            <ul>
              {feedback.sideEffects.map((effect) => (
                <li key={effect}>{explainSideEffect(effect)}</li>
              ))}
            </ul>
          </div>
        )}
        {questionType === "reasoning" && submittedReasoning && (
          <div className="side-effects">
            <p className="side-effects-title">Reasoning check</p>
            <p className="rationale">{submittedReasoning}</p>
          </div>
        )}
        {mode === "learning" && (
          <div className="quiz-actions">
            <p className="rationale">
              Checkpoint: {selectedDrugName} scored {feedback.score}/100 for this case.
            </p>
            <button type="button" onClick={startLearningConsolidation}>
              Next: Start Consolidation Timer
            </button>
          </div>
        )}
        {mode === "testing" && (
          <div className="quiz-actions">
            <button
              type="button"
              onClick={() => {
                nextAttempt();
                setTestingIndex((i) => i + 1);
              }}
            >
              View Next Patient
            </button>
          </div>
        )}
        {mode === "browse" && (
          <div className="quiz-actions">
            <button type="button" onClick={nextAttempt}>
              Try Another Choice
            </button>
          </div>
        )}
        <div className="quiz-actions">
          <button type="button" onClick={openDoctorFromFeedback}>
            Speak to AI Doctor
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="game-view">
      <div className="game-viewport">
        <ClinicScene3D
          riskScore={riskScore}
          reaction={reaction}
          celebrateIdeal={celebrateIdeal}
          feedbackEmoji={feedback ? feedbackEmoji : null}
        />
        <div className="hud hud-top">
          <div className="hud-header">
            <span className="hud-title">Simulose</span>
            <span className="hud-subtitle">Patient medication simulator</span>
          </div>
          <div className="mode-switch" role="tablist" aria-label="Simulation mode">
            <button
              type="button"
              className={mode === "browse" ? "active" : ""}
              onClick={() => switchMode("browse")}
            >
              Browse Mode
            </button>
            <button
              type="button"
              className={mode === "learning" ? "active" : ""}
              onClick={() => switchMode("learning")}
            >
              Learning Mode
            </button>
            <button
              type="button"
              className={mode === "testing" ? "active" : ""}
              onClick={() => switchMode("testing")}
            >
              Testing Mode
            </button>
          </div>
          <div className="hud-case-picker">
            {mode !== "testing" ? (
              <>
                <label className="case-label" htmlFor="case-picker">
                  Patient scenario
                </label>
                <select
                  id="case-picker"
                  value={patient.id}
                  onChange={(e) => {
                    setCaseId(e.target.value);
                    nextAttempt();
                  }}
                >
                  {cases.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.title}
                    </option>
                  ))}
                </select>
              </>
            ) : (
              <p className="quiz-progress">
                {testingComplete ? "Testing complete" : `Patient ${testingIndex + 1} of ${cases.length}`}
              </p>
            )}
          </div>
        </div>

        <div className="floating-tools">
          <div className="emoji-key-wrap">
            <button
              type="button"
              className="emoji-key-button"
              onClick={() => setShowEmojiKey((open) => !open)}
              aria-expanded={showEmojiKey}
              aria-controls="emoji-key-panel"
            >
              Emoji Key
            </button>
            {showEmojiKey && (
              <div id="emoji-key-panel" className="emoji-key-panel">
                <p className="emoji-key-title">Feedback scale</p>
                <p className="emoji-key-item">😁 95-100: excellent match</p>
                <p className="emoji-key-item">👍 80-94: strong choice</p>
                <p className="emoji-key-item">😐 60-79: acceptable</p>
                <p className="emoji-key-item">😓 40-59: weak fit</p>
                <p className="emoji-key-item">☹️ 20-39: poor choice</p>
                <p className="emoji-key-item">💀 0-19: dangerous choice</p>
              </div>
            )}
          </div>
        </div>

        <div className="hud hud-left">
          <div className="hud-panel info-panel">
            <h2>{patient.title}</h2>
            <p>{patient.summary}</p>
            <p className="condition-line">
              Conditions: {describeConditions(patient)}
            </p>
            <div className="quick-tags">
              {buildImportantTags(patient).map((tag) => (
                <span key={tag.label} className={`quick-tag ${tag.tone}`}>
                  {tag.label}
                </span>
              ))}
            </div>
            <h3 className="stats-title">Patient Stats</h3>
            <div className="vitals-grid">
              <span>
                <strong>A1c</strong>
                {patient.features.a1c}% ({a1cInterpretation(patient.features.a1c)})
              </span>
              <span>
                <strong>Kidney function</strong>
                eGFR {patient.features.egfr} ({egfrInterpretation(patient.features.egfr)})
              </span>
              <span>
                <strong>BMI</strong>
                {patient.features.bmi} ({bmiInterpretation(patient.features.bmi)})
              </span>
              <span>
                <strong>CV disease</strong>
                {patient.features.ascvd ? "Established ASCVD" : "No known ASCVD"}
              </span>
              <span>
                <strong>Hypoglycemia risk</strong>
                {patient.features.hypoglycemiaRisk ? "High - avoid low-triggering meds" : "Lower risk"}
              </span>
              <span>
                <strong>Cost consideration</strong>
                {patient.features.costSensitive ? "Important" : "Not primary"}
              </span>
            </div>
          </div>
        </div>

        <div className="hud hud-right">
          {showDoctor && (
            <div id="ai-doctor-panel" className="hud-panel doctor-inline-panel">
              <div className="doctor-inline-header">
                <p className="doctor-title">AI Doctor</p>
                <button
                  type="button"
                  className="feedback-chat-toggle"
                  onClick={() => setShowDoctor(false)}
                >
                  Close
                </button>
              </div>
              <p className="doctor-subtitle">Educational coach for this case</p>
              <div className="doctor-chat">
                {doctorMessages.map((message, idx) => (
                  <p key={`${message.role}-${idx}`} className={`doctor-message ${message.role}`}>
                    {message.text}
                  </p>
                ))}
              </div>
              <form
                className="doctor-input-row"
                onSubmit={(e) => {
                  e.preventDefault();
                  askDoctor();
                }}
              >
                <textarea
                  className="doctor-input"
                  rows={2}
                  placeholder="Ask: Why is SGLT2 best here?"
                  value={doctorQuestion}
                  onChange={(e) => setDoctorQuestion(e.target.value)}
                />
                <button type="submit" className="doctor-send" disabled={doctorLoading}>
                  {doctorLoading ? "Thinking..." : "Ask"}
                </button>
              </form>
            </div>
          )}

          <div className="hud-panel drug-panel">
            {mode === "learning" && learningConsolidationActive && feedback ? (
              <>
                <h3>Recall Summary</h3>
                <p className="rationale">
                  {selectedDrugName}: {feedback.headline}
                </p>
                <ul className="drug-list">
                  {feedback.bullets.slice(0, 4).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                {feedback.sideEffects.length > 0 && (
                  <>
                    <p className="feedback-label">Monitor for</p>
                    <ul className="drug-list">
                      {feedback.sideEffects.map((effect) => (
                        <li key={effect}>{effect}</li>
                      ))}
                    </ul>
                  </>
                )}
              </>
            ) : (
              <>
                <h3>{mode === "testing" ? "Pick one medication" : "Medication choices"}</h3>
                <div className="question-type-switch" role="tablist" aria-label="Question style">
                  <button
                    type="button"
                    className={questionType === "mcq" ? "active" : ""}
                    onClick={() => {
                      setQuestionType("mcq");
                      nextAttempt();
                    }}
                  >
                    MCQ
                  </button>
                  <button
                    type="button"
                    className={questionType === "short_answer" ? "active" : ""}
                    onClick={() => {
                      setQuestionType("short_answer");
                      nextAttempt();
                    }}
                  >
                    Short Answer
                  </button>
                  <button
                    type="button"
                    className={questionType === "reasoning" ? "active" : ""}
                    onClick={() => {
                      setQuestionType("reasoning");
                      nextAttempt();
                    }}
                  >
                    Explain Reasoning
                  </button>
                </div>
                <div className="hint-row">
                  <button type="button" className="hint-toggle" onClick={() => setShowHint((v) => !v)}>
                    {showHint ? "Hide hint" : "Show hint"}
                  </button>
                  {showHint && <p className="hint-text">{questionHint}</p>}
                </div>

                {questionType === "mcq" && (
                  <div className="drug-grid">
                    {drugs.map((drug) => {
                      const selected = choice === drug.id;
                      const disabled =
                        (mode === "testing" && (testingAnswered || testingComplete)) || learningConsolidationActive;
                      return (
                        <div key={drug.id} className="drug-option-wrap">
                          <button
                            type="button"
                            className={`drug-card ${selected ? "selected" : ""}`}
                            onClick={() => handleChoice(drug.id)}
                            disabled={disabled}
                          >
                            <strong className="drug-name">{drug.name}</strong>
                            <div className="drug-meta-block">
                              <p className="drug-label">What it is</p>
                              <p className="drug-meta">{drug.description}</p>
                            </div>
                            <div className="drug-meta-block">
                              <p className="drug-label">Benefits</p>
                              <ul className="drug-list">
                                {drug.benefits.map((benefit) => (
                                  <li key={`${drug.id}-benefit-${benefit}`}>{benefit}</li>
                                ))}
                              </ul>
                            </div>
                            <div className="drug-meta-block">
                              <p className="drug-label">Potential side effects</p>
                              <ul className="drug-list">
                                {drug.risks.map((risk) => (
                                  <li key={`${drug.id}-risk-${risk}`}>{risk}</li>
                                ))}
                              </ul>
                            </div>
                          </button>
                          {selected && renderInlineFeedback()}
                        </div>
                      );
                    })}
                  </div>
                )}

                {questionType === "short_answer" && (
                  <div className="free-answer-block">
                    <p className="rationale">
                      Type the best medication class for this patient (example: &quot;SGLT2 inhibitor&quot;).
                    </p>
                    <textarea
                      className="doctor-input"
                      rows={2}
                      placeholder="Enter medication class..."
                      value={shortAnswerInput}
                      onChange={(e) => setShortAnswerInput(e.target.value)}
                    />
                    {shortAnswerError && <p className="input-error">{shortAnswerError}</p>}
                    <div className="quiz-actions">
                      <button type="button" onClick={submitShortAnswer}>
                        Submit Short Answer
                      </button>
                    </div>
                    {feedback && renderInlineFeedback()}
                  </div>
                )}

                {questionType === "reasoning" && (
                  <div className="free-answer-block">
                    <p className="rationale">Select a medication class to open/close reasoning input.</p>
                    <div className="drug-grid">
                      {drugs.map((drug) => {
                        const selected = pendingChoice === drug.id;
                        const disabled =
                          (mode === "testing" && (testingAnswered || testingComplete)) || learningConsolidationActive;
                        return (
                          <div key={drug.id} className="reasoning-option-wrap">
                            <button
                              type="button"
                              className={`drug-card ${selected ? "selected" : ""}`}
                              onClick={() => handleChoice(drug.id)}
                              disabled={disabled}
                            >
                              <strong className="drug-name">{drug.name}</strong>
                              <p className="drug-meta">{drug.description}</p>
                            </button>
                            {selected && reasoningComposerOpen && (
                              <div className="reasoning-composer">
                                <p className="rationale">Explain why {drug.name} fits this patient.</p>
                                <textarea
                                  className="doctor-input"
                                  rows={3}
                                  placeholder="Explain your reasoning..."
                                  value={reasoningInput}
                                  onChange={(e) => setReasoningInput(e.target.value)}
                                />
                                {reasoningError && <p className="input-error">{reasoningError}</p>}
                                <div className="quiz-actions">
                                  <button type="button" onClick={submitReasoning}>
                                    Submit Reasoning
                                  </button>
                                </div>
                              </div>
                            )}
                            {choice === drug.id && renderInlineFeedback()}
                          </div>
                        );
                      })}
                    </div>
                    {pendingDrugName && !reasoningComposerOpen && (
                      <p className="rationale">Selected: {pendingDrugName}. Click again to reopen reasoning input.</p>
                    )}
                  </div>
                )}
              </>
            )}
          </div>

          {mode === "testing" && testingComplete && (
            <div className="hud-panel feedback-panel">
              <p className="headline">Testing complete</p>
              <p className="rationale">You reviewed all patient scenarios. Restart to try again.</p>
              <div className="quiz-actions">
                <button
                  type="button"
                  onClick={() => {
                    setTestingIndex(0);
                    nextAttempt();
                  }}
                >
                  Restart Testing
                </button>
              </div>
            </div>
          )}

          {mode === "learning" && learningConsolidationActive && (
            <div className="hud-panel feedback-panel consolidation-panel">
              <p className="headline">Consolidation timer</p>
              <p className="score">{breatherSecondsLeft}s</p>
              <p className="rationale">
                Review the reasoning mentally. The next patient will load automatically.
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

function explainSideEffect(effect: string) {
  const map: Record<string, string> = {
    "Genital infections": "Genital infections: counsel on hygiene and early treatment of symptoms.",
    "Volume depletion": "Volume depletion: watch for dizziness, orthostasis, and dehydration.",
    "Nausea": "Nausea: usually early and dose-related; slower titration may help.",
    "Vomiting": "Vomiting: monitor hydration status and consider dose adjustment.",
    "Modest A1c effect": "Modest A1c effect: glucose lowering may be limited; reassess A1c response.",
    "Hypoglycemia": "Hypoglycemia: monitor glucose closely, especially if meal intake is inconsistent.",
    "Weight gain": "Weight gain: discuss diet/activity plan and monitor weight trajectory.",
    "Injection burden": "Injection burden: reinforce technique, adherence, and patient comfort.",
    "GI upset": "GI upset: can improve with slower dose escalation or taking with food.",
    "B12 deficiency with long-term use": "B12 deficiency risk with long-term use: check if neuropathy or anemia develops.",
  };
  return map[effect] ?? `${effect}: review warning signs and follow-up monitoring.`;
}

function getPatientReaction(choice: string | null, score: number): PatientReaction {
  if (!choice) return "neutral";
  if (score >= 85) return "happy";
  if (score >= 60) return "mildly_uncomfortable";
  if (score >= 20) return "uncomfortable";
  return "critical";
}

function getFeedbackEmoji(score: number) {
  if (score >= 95) return "😁";
  if (score >= 80) return "👍";
  if (score >= 60) return "😐";
  if (score >= 40) return "😓";
  if (score >= 20) return "☹️";
  return "💀";
}

function a1cInterpretation(a1c: number) {
  if (a1c >= 9) return "very high";
  if (a1c >= 8) return "above goal";
  if (a1c >= 7) return "slightly above goal";
  return "near goal";
}

function egfrInterpretation(egfr: number) {
  if (egfr < 30) return "advanced CKD";
  if (egfr < 60) return "moderate CKD";
  return "preserved";
}

function bmiInterpretation(bmi: number) {
  if (bmi >= 35) return "severe obesity";
  if (bmi >= 30) return "obesity";
  if (bmi >= 25) return "overweight";
  return "normal range";
}

function buildImportantTags(patient: ReturnType<typeof getAllCases>[number]) {
  const tags: Array<{ label: string; tone: "warn" | "good" | "info" }> = [];
  if (patient.features.egfr < 60) tags.push({ label: "CKD [Chronic Kidney Disease]", tone: "warn" });
  if (patient.features.ascvd) tags.push({ label: "ASCVD [Atherosclerotic CV Disease]", tone: "warn" });
  if (patient.features.hf) tags.push({ label: "HF [Heart Failure]", tone: "warn" });
  if (patient.features.hypoglycemiaRisk) tags.push({ label: "High hypo risk", tone: "warn" });
  if (patient.features.weightLossGoal) tags.push({ label: "Weight-loss goal", tone: "info" });
  if (patient.features.costSensitive) tags.push({ label: "Cost sensitive", tone: "info" });
  if (tags.length === 0) tags.push({ label: "No major comorbidity flags", tone: "good" });
  return tags;
}

function describeConditions(patient: ReturnType<typeof getAllCases>[number]) {
  const conditions: string[] = [];
  if (patient.features.egfr < 60) conditions.push("CKD [Chronic Kidney Disease]");
  if (patient.features.ascvd) conditions.push("ASCVD [Atherosclerotic Cardiovascular Disease]");
  if (patient.features.hf) conditions.push("HF [Heart Failure]");
  if (patient.features.giIntolerance) conditions.push("GI intolerance [Gastrointestinal side effects]");
  if (conditions.length === 0) return "No major chronic conditions flagged.";
  return conditions.join(", ");
}

function resolveDrugFromAnswer(
  answer: string,
  drugs: ReturnType<typeof getAllDrugs>
) {
  const normalized = answer.trim().toLowerCase();
  if (!normalized) return null;

  const aliases: Record<string, string> = {
    sglt2: "sglt2",
    "sglt2 inhibitor": "sglt2",
    glp1: "glp1",
    "glp-1": "glp1",
    "glp-1 ra": "glp1",
    "glp1 ra": "glp1",
    metformin: "metformin",
    dpp4: "dpp4",
    "dpp-4": "dpp4",
    "dpp4 inhibitor": "dpp4",
    "sulfonylurea": "sulfonylurea",
    "sulfonylureas": "sulfonylurea",
    insulin: "insulin",
  };

  const directId = aliases[normalized] ?? normalized;
  const byId = drugs.find((drug) => drug.id === directId);
  if (byId) return byId;

  return drugs.find((drug) => drug.name.toLowerCase().includes(normalized)) ?? null;
}

function buildQuestionHint(
  patient: ReturnType<typeof getAllCases>[number],
  questionType: QuestionType
) {
  const priorities: string[] = [];
  if (patient.features.hf) priorities.push("prioritize heart-failure benefit");
  if (patient.features.ascvd) priorities.push("consider cardiovascular benefit");
  if (patient.features.egfr < 60) priorities.push("protect kidney function");
  if (patient.features.hypoglycemiaRisk) priorities.push("avoid hypoglycemia-prone options");
  if (patient.features.weightLossGoal) priorities.push("prefer weight-benefit options");
  if (patient.features.costSensitive) priorities.push("consider low-cost options");

  const priorityText = priorities.length > 0 ? priorities.join(", ") : "match therapy to case features";

  if (questionType === "mcq") {
    return `Hint: ${priorityText}.`;
  }
  if (questionType === "short_answer") {
    return `Hint: answer with a medication class (for example: SGLT2 inhibitor, GLP-1 RA, metformin). Focus on: ${priorityText}.`;
  }
  return `Hint: include 3 parts in your explanation: patient risks/goals, why your choice helps, and what to monitor next. Focus on: ${priorityText}.`;
}
