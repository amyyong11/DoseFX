"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { ReactNode } from "react";
import { ClinicScene3D } from "@/components/ClinicScene3D";
import type { DoctorMood } from "@/components/GhostDoctor";
import { getAllCases, getAllDrugs, gradeChoice } from "@/lib/engine";
import type { Feedback, PatientReaction } from "@/lib/types";

type Mode = "browse" | "learning" | "testing";
type QuestionType = "mcq" | "short_answer";
type DifficultyLevel = "basic" | "intermediate" | "advanced";
type ChatMessage = { role: "user" | "assistant"; text: string };
type BubbleSource = "context" | "chat";
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
  const [shortAnswerInput, setShortAnswerInput] = useState("");
  const [shortAnswerError, setShortAnswerError] = useState("");
  const [submittedResponseFeedback, setSubmittedResponseFeedback] = useState<Feedback | null>(null);
  const [testingReasoningQualified, setTestingReasoningQualified] = useState(false);
  const [testingSubmissionId, setTestingSubmissionId] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [breatherSecondsLeft, setBreatherSecondsLeft] = useState(0);
  const [learningPhase, setLearningPhase] = useState<"idle" | "timer">("idle");
  const [showEmojiKey, setShowEmojiKey] = useState(false);
  const [showDoctor, setShowDoctor] = useState(false);
  const [doctorQuestion, setDoctorQuestion] = useState("");
  const [doctorLoading, setDoctorLoading] = useState(false);
  const [bubbleSource, setBubbleSource] = useState<BubbleSource>("context");
  const [scoredPoints, setScoredPoints] = useState(0);
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
  const displayFeedback = submittedResponseFeedback ?? feedback;

  const riskScore = choice ? displayFeedback?.score ?? 60 : 60;
  const reaction = getPatientReaction(choice, displayFeedback?.score ?? 0);
  const celebrateIdeal = !!choice && (displayFeedback?.score ?? 0) >= 95;
  const feedbackEmoji = displayFeedback ? getFeedbackEmoji(displayFeedback.score) : "";
  const testingAnswered = mode === "testing" && !!choice;
  const learningConsolidationActive = mode === "learning" && learningPhase === "timer";
  const selectedDrugName = choice ? drugs.find((drug) => drug.id === choice)?.name ?? choice : null;
  const questionHint = buildQuestionHint(patient, questionType);
  const scoredTestingAttempts = useRef<Set<string>>(new Set());
  const difficultyLevel: DifficultyLevel =
    scoredPoints >= 1500 ? "advanced" : scoredPoints >= 1000 ? "intermediate" : "basic";
  const allowedTestingQuestionTypes: QuestionType[] = useMemo(() => ["short_answer"], []);
  const doctorMood: DoctorMood = getDoctorMoodFromScore(displayFeedback?.score);
  const doctorPromptText = buildDoctorPromptText({
    mode,
    selectedDrugName,
    feedbackScore: displayFeedback?.score,
    feedbackHeadline: displayFeedback?.headline,
  });
  const latestDoctorReply = [...doctorMessages].reverse().find((message) => message.role === "assistant")?.text ?? null;
  const doctorBubbleText =
    bubbleSource === "chat" && latestDoctorReply ? latestDoctorReply : doctorPromptText;

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

  useEffect(() => {
    if (mode !== "testing") return;
    if (allowedTestingQuestionTypes.includes(questionType)) return;
    setQuestionType("short_answer");
  }, [mode, allowedTestingQuestionTypes, questionType]);

  useEffect(() => {
    if (mode !== "testing" || testingSubmissionId <= 0 || !submittedResponseFeedback) return;
    const attemptKey = `${patient.id}:${testingIndex}:${testingSubmissionId}`;
    if (scoredTestingAttempts.current.has(attemptKey)) return;
    scoredTestingAttempts.current.add(attemptKey);
    const correctChoice = !!choice && patient.appropriate.includes(choice);
    const earned = getTestingPointsForAttempt({
      score: submittedResponseFeedback.score,
      correctChoice,
      reasoningQualified: testingReasoningQualified,
    });
    if (earned <= 0) return;
    setScoredPoints((prev) => prev + earned);
  }, [
    mode,
    testingSubmissionId,
    submittedResponseFeedback,
    choice,
    testingReasoningQualified,
    patient.id,
    testingIndex,
    patient.appropriate,
  ]);

  function switchMode(nextMode: Mode) {
    setMode(nextMode);
    setBubbleSource("context");
    resetAttemptState();
    if (nextMode === "browse") {
      setQuestionType("mcq");
    }
    if (nextMode === "testing") {
      setQuestionType("short_answer");
      setTestingIndex(0);
    }
  }

  function handleChoice(drugId: string) {
    setShortAnswerError("");
    setSubmittedResponseFeedback(null);
    setTestingReasoningQualified(false);
    setChoice(drugId);
    setBubbleSource("context");
  }

  function nextAttempt() {
    resetAttemptState();
  }

  function resetAttemptState() {
    setChoice(null);
    setShortAnswerInput("");
    setShortAnswerError("");
    setSubmittedResponseFeedback(null);
    setTestingReasoningQualified(false);
    setTestingSubmissionId(0);
    setShowHint(false);
    setBreatherSecondsLeft(0);
    setLearningPhase("idle");
  }

  function submitShortAnswer() {
    const content = shortAnswerInput.trim();
    const reasoningQualified = hasSufficientShortAnswerReasoning(content);
    const resolved = resolveDrugFromAnswer(content, drugs);
    const responseFeedback = buildShortAnswerSubmissionFeedback({
      content,
      resolvedDrug: resolved,
      reasoningQualified,
      patient,
    });
    setShortAnswerError("");
    setSubmittedResponseFeedback(responseFeedback);
    setTestingReasoningQualified(reasoningQualified);
    setTestingSubmissionId((prev) => prev + 1);
    setChoice(resolved?.id ?? null);
    setBubbleSource("context");
  }

  function startLearningConsolidation() {
    setLearningPhase("timer");
    setBreatherSecondsLeft(LEARNING_CONSOLIDATION_SECONDS);
  }

  function openDoctorFromFeedback() {
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
            feedback: displayFeedback,
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
      setBubbleSource("chat");
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
      setBubbleSource("chat");
    } finally {
      setDoctorLoading(false);
    }
  }

  function renderInlineFeedback(): ReactNode {
    if (!displayFeedback || testingComplete) return null;
    const currentFeedback = displayFeedback;

    if (mode === "testing") {
      return (
        <div className="inline-feedback">
          <div className="score-wrap">
            <p className="score">{feedbackEmoji} Score: {currentFeedback.score}/100</p>
          </div>
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
        </div>
      );
    }

    return (
      <div className="inline-feedback">
        <div className="score-wrap">
          <p className="score">{feedbackEmoji} Score: {currentFeedback.score}/100</p>
          <p className="headline">{currentFeedback.headline}</p>
        </div>
        <p className="rationale">{currentFeedback.rationale}</p>
        <p className="feedback-label">Key points</p>
        <ul className="feedback-list">
          {currentFeedback.bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        {currentFeedback.evidence.length > 0 && <p className="feedback-label">Evidence</p>}
        {currentFeedback.evidence.length > 0 && (
          <p className="evidence">
            Evidence: {currentFeedback.evidence[0].source} - {currentFeedback.evidence[0].quote}
          </p>
        )}
        {currentFeedback.sideEffects.length > 0 && (
          <div className="side-effects">
            <p className="side-effects-title">Potential side effects to monitor</p>
            <ul>
              {currentFeedback.sideEffects.map((effect) => (
                <li key={effect}>{explainSideEffect(effect)}</li>
              ))}
            </ul>
          </div>
        )}
        {mode === "learning" && (
          <div className="quiz-actions">
            <p className="rationale">
              Checkpoint: {selectedDrugName} scored {currentFeedback.score}/100 for this case.
            </p>
            <button type="button" onClick={startLearningConsolidation}>
              Next: Start Consolidation Timer
            </button>
          </div>
        )}
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
          feedbackEmoji={displayFeedback ? feedbackEmoji : null}
          doctorPromptText={doctorBubbleText}
          doctorMood={doctorMood}
          doctorShowBubble
        />
        <div className="hud hud-top">
          <div className="hud-header">
            <span className="hud-title">Simulose</span>
            <span className="hud-subtitle">Patient medication simulator</span>
          </div>
          <div className="mode-picker">
            <select
              id="mode-picker"
              className="mode-select"
              value={mode}
              onChange={(e) => switchMode(e.target.value as Mode)}
            >
              <option value="" disabled>
                Choose a mode
              </option>
              <option value="browse">Browse Mode</option>
              <option value="learning">Learning Mode</option>
              <option value="testing">Testing Mode</option>
            </select>
          </div>
          {mode === "testing" && (
            <p className="quiz-progress">
              Points: {scoredPoints} | Difficulty: {difficultyLevel}
            </p>
          )}
          <div className="hud-case-picker">
            {mode !== "testing" ? (
              <>
                <select
                  id="case-picker"
                  className="case-picker-select"
                  value={patient.id}
                  onChange={(e) => {
                    setCaseId(e.target.value);
                    nextAttempt();
                  }}
                >
                  <option value="" disabled>
                    Patient list
                  </option>
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
          {(mode === "browse" || mode === "learning") && (
            <button
              type="button"
              className="doctor-chat-launch"
              onClick={() => setShowDoctor((open) => !open)}
              aria-expanded={showDoctor}
              aria-controls="ai-doctor-panel"
            >
              {showDoctor ? "Hide Chat" : "Open Chat"}
            </button>
          )}
          <div className="emoji-key-wrap">
            <button
              type="button"
              className="emoji-key-button"
              onClick={() => setShowEmojiKey((open) => !open)}
              aria-expanded={showEmojiKey}
              aria-controls="emoji-key-panel"
              aria-label="Toggle emoji key"
              title="Legend"
            >
              <span aria-hidden="true">🗝️</span>
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
          <div className="hud-panel level-status-panel">
            <p className="feedback-label">Progress</p>
            <p className="headline">Level: {difficultyLevel}</p>
            <p className="score">Points: {scoredPoints}</p>
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
                {doctorMessages
                  .filter((message) => message.role === "user")
                  .map((message, idx) => (
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
            {mode === "learning" && learningConsolidationActive && displayFeedback ? (
              <>
                <h3>Recall Summary</h3>
                <p className="rationale">
                  {selectedDrugName}: {displayFeedback.headline}
                </p>
                <ul className="drug-list">
                  {displayFeedback.bullets.slice(0, 4).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                {displayFeedback.sideEffects.length > 0 && (
                  <>
                    <p className="feedback-label">Monitor for</p>
                    <ul className="drug-list">
                      {displayFeedback.sideEffects.map((effect) => (
                        <li key={effect}>{effect}</li>
                      ))}
                    </ul>
                  </>
                )}
              </>
            ) : (
              <>
                <h3>{mode === "testing" ? "Pick one medication" : "Medication choices"}</h3>
                {mode !== "testing" && (
                  <div className="question-type-switch" role="tablist" aria-label="Question style">
                    {mode === "browse" ? (
                      <button
                        type="button"
                        className={questionType === "mcq" ? "active" : ""}
                        onClick={() => {
                          setQuestionType("mcq");
                          nextAttempt();
                        }}
                      >
                        Medications
                      </button>
                    ) : (
                      <>
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
                      </>
                    )}
                  </div>
                )}
                <div className="hint-row">
                  <button type="button" className="hint-toggle" onClick={() => setShowHint((v) => !v)}>
                    {showHint ? "Hide hint" : "Show hint"}
                  </button>
                  {showHint && <p className="hint-text">{questionHint}</p>}
                </div>

                {mode !== "testing" && questionType === "mcq" && (
                  <div className="drug-grid">
                    {drugs.map((drug) => {
                      const selected = choice === drug.id;
                      const disabled = learningConsolidationActive;
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
                      Write the best medication class and explain why it fits this patient.
                    </p>
                    <textarea
                      className="doctor-input"
                      rows={3}
                      placeholder="Enter your medication class and reasoning..."
                      value={shortAnswerInput}
                      onChange={(e) => setShortAnswerInput(e.target.value)}
                    />
                    {shortAnswerError && <p className="input-error">{shortAnswerError}</p>}
                    <div className="quiz-actions">
                      <button
                        type="button"
                        onClick={displayFeedback ? openDoctorFromFeedback : submitShortAnswer}
                      >
                        {displayFeedback ? "Ask more" : "Submit Short Answer"}
                      </button>
                    </div>
                    {displayFeedback && renderInlineFeedback()}
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

function getDoctorMoodFromScore(score?: number): DoctorMood {
  if (typeof score !== "number") return "neutral";
  if (score >= 85) return "happy";
  if (score >= 65) return "neutral";
  if (score >= 45) return "concerned";
  return "strict";
}

function buildDoctorPromptText({
  mode,
  selectedDrugName,
  feedbackScore,
  feedbackHeadline,
}: {
  mode: Mode;
  selectedDrugName: string | null;
  feedbackScore?: number;
  feedbackHeadline?: string;
}) {
  if (mode === "browse") {
    if (selectedDrugName && typeof feedbackScore === "number") {
      if (feedbackScore >= 95) return `${selectedDrugName}? Absolutely legendary pick.`;
      if (feedbackScore >= 85) return `${selectedDrugName}: YES. That choice lands hard in the right direction.`;
      if (feedbackScore >= 60) return `${selectedDrugName}: decent move, but you can do better.`;
      if (feedbackScore >= 40) return `${selectedDrugName}: uh oh, this is getting risky.`;
      return `${selectedDrugName}: dramatic miss. Re-check patient safety priorities now.`;
    }
    return "Do you have any questions?";
  }

  if (mode === "learning") {
    if (selectedDrugName && typeof feedbackScore === "number") {
      if (feedbackScore >= 95) return `${selectedDrugName}: perfect clinical read. Incredible work.`;
      if (feedbackScore >= 85) return `${selectedDrugName}: strong call. Keep this momentum.`;
      if (feedbackScore >= 60) return `${selectedDrugName}: okay, but tighten your rationale.`;
      if (feedbackScore >= 40) return `${selectedDrugName}: rough fit. Let's clean up the logic.`;
      return `${selectedDrugName}: hard no. This needs a full rethink.`;
    }
    return "Which medication would you choose?";
  }

  if (mode === "testing") {
    if (feedbackHeadline && typeof feedbackScore === "number") {
      if (feedbackScore >= 85) return `${feedbackHeadline}. Excellent execution.`;
      if (feedbackScore >= 60) return `${feedbackHeadline}. You're close, refine your rationale.`;
      return `${feedbackHeadline}. This needs a stronger clinical justification.`;
    }
    if (selectedDrugName && typeof feedbackScore === "number") {
      if (feedbackScore >= 95) return `${selectedDrugName}: flawless answer. That was elite.`;
      if (feedbackScore >= 85) return `${selectedDrugName}: big win. Your reasoning tracks.`;
      if (feedbackScore >= 60) return `${selectedDrugName}: partial hit. Sharpen the why.`;
      if (feedbackScore >= 40) return `${selectedDrugName}: shaky. You need a safer justification.`;
      return `${selectedDrugName}: red alert answer. Rebuild from patient risks first.`;
    }
    return "Which medication would you choose?";
  }
  return "Do you have any questions?";
}

function pickBubbleVariant(options: string[], seed: string) {
  let hash = 0;
  for (let i = 0; i < seed.length; i += 1) {
    hash = (hash * 31 + seed.charCodeAt(i)) >>> 0;
  }
  return options[hash % options.length];
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

function getTestingPointsForScore(score: number) {
  if (score >= 95) return 75;
  if (score >= 80) return 50;
  return Math.max(40, Math.round(score * 0.6));
}

function getTestingPointsForAttempt({
  score,
  correctChoice,
  reasoningQualified,
}: {
  score: number;
  correctChoice: boolean;
  reasoningQualified: boolean;
}) {
  if (correctChoice && reasoningQualified) return getTestingPointsForScore(score);
  if (correctChoice || reasoningQualified) return 25;
  return 0;
}

function buildShortAnswerSubmissionFeedback({
  content,
  resolvedDrug,
  reasoningQualified,
  patient,
}: {
  content: string;
  resolvedDrug: ReturnType<typeof getAllDrugs>[number] | null;
  reasoningQualified: boolean;
  patient: ReturnType<typeof getAllCases>[number];
}): Feedback {
  if (!content.trim()) {
    return {
      headline: "No answer submitted",
      score: 0,
      bullets: [
        "Submit any medication class attempt to get targeted feedback.",
        "Include a brief reason linked to this patient's risks and goals.",
      ],
      rationale: "Try: medication class + one clinical reason (for example CKD, hypoglycemia risk, weight, or cost).",
      sideEffects: [],
      evidence: [],
    };
  }

  if (!resolvedDrug) {
    return {
      headline: "Could not identify medication class",
      score: reasoningQualified ? 45 : 0,
      bullets: [
        "We could not match your medication class to available options.",
        "Use one of the listed classes and keep your explanation concise.",
      ],
      rationale: "Your reasoning is noted, but the medication class needs to be recognizable for grading.",
      sideEffects: [],
      evidence: [],
    };
  }

  const baseFeedback = gradeChoice(patient, resolvedDrug.id);
  if (!baseFeedback) {
    return {
      headline: "Unable to grade this response",
      score: 0,
      bullets: ["Try submitting again with a medication class from the list."],
      rationale: "A grading error occurred for this specific response.",
      sideEffects: [],
      evidence: [],
    };
  }

  if (!patient.appropriate.includes(resolvedDrug.id)) {
    return {
      ...baseFeedback,
      score: reasoningQualified ? Math.max(45, Math.min(65, baseFeedback.score)) : 0,
      headline: "Incorrect medication choice",
      rationale: reasoningQualified
        ? "Medication choice is incorrect, but your reasoning has some clinical value."
        : "This selected class is not appropriate for this patient in this case.",
    };
  }

  if (reasoningQualified) {
    return baseFeedback;
  }

  return {
    ...baseFeedback,
    score: Math.min(baseFeedback.score, 55),
    headline: "Medication recognized, but reasoning needs work",
    bullets: [
      "Your medication selection was captured.",
      "Add a clearer clinical reason linked to this patient profile.",
      "Mention at least one specific risk/goal (CKD, hypoglycemia, weight, cost, ASCVD/HF).",
    ],
    rationale: "Points in Testing mode require both a clinically appropriate choice and strong reasoning.",
  };
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

  const aliasMatch = Object.entries(aliases).find(([alias]) => normalized.includes(alias));
  if (aliasMatch) {
    const aliasDrug = drugs.find((drug) => drug.id === aliasMatch[1]);
    if (aliasDrug) return aliasDrug;
  }

  return drugs.find((drug) => normalized.includes(drug.name.toLowerCase())) ?? null;
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
    return `Hint: answer with medication class plus reasoning in one response (example: SGLT2 inhibitor because CKD and low hypoglycemia risk). Focus on: ${priorityText}.`;
  }
  return `Hint: ${priorityText}.`;
}

function hasSufficientShortAnswerReasoning(answer: string) {
  const normalized = answer.trim().toLowerCase();
  if (normalized.length < 25) return false;

  const wordCount = normalized.split(/\s+/).filter(Boolean).length;
  if (wordCount < 6) return false;

  const reasoningSignals = [
    "because",
    "since",
    "due to",
    "given",
    "risk",
    "benefit",
    "avoid",
    "prefer",
    "monitor",
    "kidney",
    "egfr",
    "ckd",
    "hypoglycemia",
    "weight",
    "cost",
    "ascvd",
    "heart failure",
    "hf",
  ];

  return reasoningSignals.some((token) => normalized.includes(token));
}
