"use client";

import { useEffect, useState } from "react";
import cases from "@/data/cases.json";
import { getAllDrugs, gradeChoice } from "@/lib/engine";

type Mode = "browse" | "learning" | "testing";

export function CasePlayer() {
  const patient = cases[0];
  const drugs = getAllDrugs();
  const [mode, setMode] = useState<Mode>("browse");
  const [choice, setChoice] = useState<string | null>(null);
  const [breatherSecondsLeft, setBreatherSecondsLeft] = useState(0);

  const feedback = choice ? gradeChoice(patient, choice) : null;
  const selectedDrug = drugs.find(d => d.id === choice);
  const isAppropriate = choice ? patient.appropriate.includes(choice) : null;
  const isLearningBreatherActive = mode === "learning" && breatherSecondsLeft > 0;

  useEffect(() => {
    if (!isLearningBreatherActive) return;

    const timer = window.setInterval(() => {
      setBreatherSecondsLeft(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => window.clearInterval(timer);
  }, [isLearningBreatherActive]);

  function handleModeChange(nextMode: Mode) {
    setMode(nextMode);
    setChoice(null);
    setBreatherSecondsLeft(0);
  }

  function handleChoice(drugId: string) {
    setChoice(drugId);
    if (mode === "learning") {
      setBreatherSecondsLeft(30);
    }
  }

  function resetAttempt() {
    setChoice(null);
    setBreatherSecondsLeft(0);
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-semibold mb-2">{patient.title}</h1>
      <p className="text-gray-600 mb-4">{patient.summary}</p>
      <p className="text-sm text-gray-700 mb-2">Mode</p>
      <div className="flex flex-wrap gap-2 mb-4">
        <button
          onClick={() => handleModeChange("browse")}
          className={`rounded-xl px-3 py-2 border text-sm ${
            mode === "browse" ? "bg-gray-900 text-white border-gray-900" : "bg-white"
          }`}
        >
          Browse mode
        </button>
        <button
          onClick={() => handleModeChange("learning")}
          className={`rounded-xl px-3 py-2 border text-sm ${
            mode === "learning" ? "bg-gray-900 text-white border-gray-900" : "bg-white"
          }`}
        >
          Learning mode
        </button>
        <button
          onClick={() => handleModeChange("testing")}
          className={`rounded-xl px-3 py-2 border text-sm ${
            mode === "testing" ? "bg-gray-900 text-white border-gray-900" : "bg-white"
          }`}
        >
          Testing mode
        </button>
      </div>

      <div className="grid gap-2 mb-4">
        {drugs.map(d => (
          <button
            key={d.id}
            onClick={() => handleChoice(d.id)}
            disabled={isLearningBreatherActive}
            className="border rounded-xl p-3 text-left hover:bg-gray-50 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <div className="font-medium">{d.name}</div>
            <div className="text-xs text-gray-600">
              Benefits: {d.benefits.join(", ")}
            </div>
          </button>
        ))}
      </div>

      {feedback && (
        <>
          <div className="border rounded-xl p-4 bg-white mb-4">
            <h3 className="font-semibold">{feedback.headline}</h3>
            <ul className="list-disc pl-5 mt-2 text-sm">
              {feedback.bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          </div>

          {mode === "learning" && (
            <>
              <div className="border rounded-xl p-4 bg-amber-50 mb-3">
                <h3 className="font-semibold mb-2">Checkpoint summary</h3>
                <ul className="list-disc pl-5 text-sm">
                  <li>
                    You chose: <span className="font-medium">{selectedDrug?.name ?? choice}</span>
                  </li>
                  <li>
                    Result:{" "}
                    <span className="font-medium">
                      {isAppropriate ? "appropriate for this case" : "not the best option"}
                    </span>
                  </li>
                  <li>{patient.teachingPoint}</li>
                </ul>
              </div>

              <div className="border rounded-xl p-4 bg-blue-50">
                <h3 className="font-semibold">Breather</h3>
                <p className="text-sm mt-1">
                  {breatherSecondsLeft > 0
                    ? `Pause for consolidation: ${breatherSecondsLeft}s remaining.`
                    : "Breather complete."}
                </p>
                <button
                  onClick={resetAttempt}
                  disabled={breatherSecondsLeft > 0}
                  className="mt-3 rounded-lg border px-3 py-2 text-sm disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  Next attempt
                </button>
              </div>
            </>
          )}

          {mode !== "learning" && (
            <button onClick={resetAttempt} className="rounded-lg border px-3 py-2 text-sm">
              Try another choice
            </button>
          )}
        </>
      )}
    </div>
  );
}
