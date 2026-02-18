"use client";

import { useEffect, useState } from "react";
import cases from "@/data/cases.json";
import { getAllDrugs, gradeChoice } from "@/lib/engine";

type Mode = "browse" | "learning" | "testing";
type ChatMessage = { role: "user" | "assistant"; text: string };

export function CasePlayer() {
  const patient = cases[0];
  const drugs = getAllDrugs();
  const [mode, setMode] = useState<Mode>("browse");
  const [choice, setChoice] = useState<string | null>(null);
  const [breatherSecondsLeft, setBreatherSecondsLeft] = useState(0);
  const [showEmojiLegend, setShowEmojiLegend] = useState(false);
  const [showDoctor, setShowDoctor] = useState(false);
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      text: "I am your AI Doctor coach. Ask what to pick, why, or side effects to monitor."
    }
  ]);

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

  function askDoctor() {
    const q = question.trim();
    if (!q) return;
    const reply = generateDoctorResponse(q, patient, drugs, choice, feedback);
    setMessages(prev => [...prev, { role: "user", text: q }, { role: "assistant", text: reply }]);
    setQuestion("");
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex items-start justify-between gap-3 mb-2">
        <h1 className="text-2xl font-semibold">{patient.title}</h1>
        <div className="flex gap-2">
          <button
            onClick={() => setShowEmojiLegend(v => !v)}
            className="rounded-lg border px-3 py-2 text-sm bg-white"
          >
            Emoji Legend
          </button>
          <button
            onClick={() => setShowDoctor(v => !v)}
            className="rounded-lg border px-3 py-2 text-sm bg-white"
          >
            AI Doctor
          </button>
        </div>
      </div>
      <p className="text-gray-600 mb-4">{patient.summary}</p>

      {showEmojiLegend && (
        <div className="mb-4 rounded-xl border p-3 bg-white text-sm">
          <div>😁 95-100: excellent match</div>
          <div>👍 80-94: strong choice</div>
          <div>😐 60-79: acceptable</div>
          <div>😓 40-59: weak fit</div>
          <div>☹️ 20-39: poor choice</div>
          <div>💀 0-19: dangerous choice</div>
        </div>
      )}

      {showDoctor && (
        <div className="mb-4 rounded-xl border p-3 bg-white">
          <h3 className="font-semibold mb-2">AI Doctor</h3>
          <div className="max-h-44 overflow-y-auto space-y-2 mb-2">
            {messages.map((m, i) => (
              <p key={i} className={`text-sm ${m.role === "user" ? "text-gray-900" : "text-gray-600"}`}>
                {m.text}
              </p>
            ))}
          </div>
          <form
            className="flex gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              askDoctor();
            }}
          >
            <input
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Ask: Why is SGLT2 best here?"
              className="flex-1 rounded-lg border px-3 py-2 text-sm"
            />
            <button type="submit" className="rounded-lg border px-3 py-2 text-sm">
              Ask
            </button>
          </form>
        </div>
      )}
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

function generateDoctorResponse(
  question: string,
  patient: (typeof cases)[number],
  drugs: ReturnType<typeof getAllDrugs>,
  selectedDrugId: string | null,
  feedback: ReturnType<typeof gradeChoice>
) {
  const q = question.toLowerCase();
  const selectedDrug = selectedDrugId ? drugs.find(d => d.id === selectedDrugId) ?? null : null;
  const bestDrug = drugs.find(d => d.id === patient.bestAlternative) ?? null;
  const mentionedDrug = drugs.find((d) => q.includes(d.name.toLowerCase()) || q.includes(d.id.toLowerCase())) ?? null;

  if (q.includes("best") || q.includes("recommend")) {
    return bestDrug
      ? `Best choice is ${bestDrug.name}. ${patient.teachingPoint}`
      : "I cannot identify the best choice from this case data.";
  }
  if (mentionedDrug) {
    return `${mentionedDrug.name}: Benefits - ${mentionedDrug.benefits.join(", ")}. Side effects - ${mentionedDrug.risks.join(", ")}.`;
  }
  if (q.includes("side effect") || q.includes("risk")) {
    if (selectedDrug) return `For ${selectedDrug.name}, monitor: ${selectedDrug.risks.join(", ")}.`;
    return "Pick a medication first and I can summarize its major side effects.";
  }
  if (feedback && selectedDrug) {
    return `Current selection: ${selectedDrug.name}. ${feedback.headline}.`;
  }
  return "Ask me: best medication, why one option is safer, or side effects to monitor.";
}
