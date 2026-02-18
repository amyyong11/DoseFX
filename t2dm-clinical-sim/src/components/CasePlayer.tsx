"use client";

import { useEffect, useMemo, useState } from "react";
import { ClinicScene3D } from "@/components/ClinicScene3D";
import { getAllCases, getAllDrugs, gradeChoice } from "@/lib/engine";
import type { PatientReaction } from "@/lib/types";

type Mode = "browse" | "learning" | "testing";

export function CasePlayer() {
  const cases = getAllCases();
  const drugs = getAllDrugs();

  const [mode, setMode] = useState<Mode>("browse");
  const [caseId, setCaseId] = useState(cases[0]?.id ?? "");
  const [testingIndex, setTestingIndex] = useState(0);
  const [choice, setChoice] = useState<string | null>(null);
  const [breatherSecondsLeft, setBreatherSecondsLeft] = useState(0);

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
  const testingAnswered = mode === "testing" && !!choice;
  const learningBreatherActive = mode === "learning" && breatherSecondsLeft > 0;
  const selectedDrugName = choice ? drugs.find((drug) => drug.id === choice)?.name ?? choice : null;

  useEffect(() => {
    if (!learningBreatherActive) return;

    const timer = window.setInterval(() => {
      setBreatherSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => window.clearInterval(timer);
  }, [learningBreatherActive]);

  function switchMode(nextMode: Mode) {
    setMode(nextMode);
    setChoice(null);
    setBreatherSecondsLeft(0);
    if (nextMode === "testing") {
      setTestingIndex(0);
    }
  }

  function handleChoice(drugId: string) {
    setChoice(drugId);
    if (mode === "learning") {
      setBreatherSecondsLeft(30);
    }
  }

  function nextAttempt() {
    setChoice(null);
    setBreatherSecondsLeft(0);
  }

  return (
    <main className="game-view">
      <div className="game-viewport">
        <ClinicScene3D riskScore={riskScore} reaction={reaction} celebrateIdeal={celebrateIdeal} />
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
          <div className="hud-panel drug-panel">
            <h3>{mode === "testing" ? "Pick one medication" : "Medication choices"}</h3>
            <div className="drug-grid">
              {drugs.map((drug) => {
                const selected = choice === drug.id;
                const disabled =
                  (mode === "testing" && (testingAnswered || testingComplete)) || learningBreatherActive;
                return (
                  <button
                    key={drug.id}
                    type="button"
                    className={`drug-card ${selected ? "selected" : ""}`}
                    onClick={() => handleChoice(drug.id)}
                    disabled={disabled}
                  >
                    <strong>{drug.name}</strong>
                    <span>Benefits: {drug.benefits.join(", ")}</span>
                  </button>
                );
              })}
            </div>
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

          {feedback && !testingComplete && (
            <div className="hud-panel feedback-panel">
              <div className="score-wrap">
                <p className="score">Score: {feedback.score}/100</p>
                <p className="headline">{feedback.headline}</p>
              </div>
              <p className="rationale">{feedback.rationale}</p>
              <ul>
                {feedback.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
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
              {mode === "learning" && (
                <div className="quiz-actions">
                  <p className="rationale">
                    Checkpoint: {selectedDrugName} scored {feedback.score}/100 for this case.
                  </p>
                  <p className="rationale">
                    Breather: {breatherSecondsLeft > 0
                      ? `${breatherSecondsLeft}s remaining for consolidation.`
                      : "Done. Continue when ready."}
                  </p>
                  <button type="button" onClick={nextAttempt} disabled={breatherSecondsLeft > 0}>
                    Next Attempt
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
  if (score >= 35) return "uncomfortable";
  return "critical";
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
