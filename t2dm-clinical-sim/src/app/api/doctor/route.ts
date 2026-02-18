import { NextResponse } from "next/server";

type DoctorRequest = {
  question?: string;
  context?: unknown;
};

const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models";
const GEMINI_MODELS = [
  "gemini-2.0-flash",
  "gemini-2.0-flash-001",
  "gemini-2.0-flash-lite",
] as const;

function extractGeminiText(data: unknown): string | null {
  if (!data || typeof data !== "object") return null;

  const chunks: string[] = [];
  const candidates = (data as { candidates?: unknown }).candidates;
  if (!Array.isArray(candidates)) return null;

  for (const candidate of candidates) {
    if (!candidate || typeof candidate !== "object") continue;
    const content = (candidate as { content?: unknown }).content;
    if (!content || typeof content !== "object") continue;
    const parts = (content as { parts?: unknown }).parts;
    if (!Array.isArray(parts)) continue;

    for (const part of parts) {
      if (!part || typeof part !== "object") continue;
      const text = (part as { text?: unknown }).text;
      if (typeof text === "string" && text.trim().length > 0) {
        chunks.push(text.trim());
      }
    }
  }

  return chunks.length > 0 ? chunks.join("\n\n") : null;
}

export async function POST(req: Request) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey || apiKey === "your_gemini_api_key_here") {
    return NextResponse.json(
      { error: "Missing GEMINI_API_KEY on server." },
      { status: 500 }
    );
  }

  let body: DoctorRequest;
  try {
    body = (await req.json()) as DoctorRequest;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const question = body.question?.trim();
  if (!question) {
    return NextResponse.json({ error: "Question is required." }, { status: 400 });
  }

  const contextText = JSON.stringify(body.context ?? {}, null, 2);

  const systemInstruction =
    "You are an educational AI Doctor tutor for a diabetes medication simulator. " +
    "Explain reasoning clearly and concisely for students. Use only the provided case context when possible. " +
    "If unsure, say what is uncertain. Do not provide definitive diagnosis or treatment directives for real patients. " +
    "Always include a short safety reminder that this is educational and requires clinician verification.";

  const userPrompt =
    `Student question:\n${question}\n\n` +
    `Simulator context:\n${contextText}\n\n` +
    "Answer in plain language with: 1) direct answer, 2) why, 3) what to monitor.";

  try {
    const errors: string[] = [];
    const configuredModel = process.env.GEMINI_MODEL?.trim();
    const models = configuredModel
      ? ([configuredModel, ...GEMINI_MODELS.filter((m) => m !== configuredModel)] as const)
      : GEMINI_MODELS;

    for (const model of models) {
      const resp = await fetch(`${GEMINI_API_URL}/${model}:generateContent`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": apiKey,
        },
        body: JSON.stringify({
          system_instruction: {
            parts: [{ text: systemInstruction }],
          },
          contents: [
            {
              role: "user",
              parts: [{ text: userPrompt }],
            },
          ],
          generationConfig: {
            maxOutputTokens: 350,
          },
        }),
      });

      if (!resp.ok) {
        const errText = await resp.text();
        errors.push(`${model}: ${errText}`);
        continue;
      }

      const data = (await resp.json()) as unknown;
      const answer = extractGeminiText(data);
      if (answer) {
        return NextResponse.json({ answer });
      }

      errors.push(`${model}: No response text returned by model.`);
    }

    return NextResponse.json(
      {
        error: "Model request failed.",
        detail: errors.length > 0 ? errors.join(" | ") : "No model attempts were made.",
      },
      { status: 502 }
    );
  } catch {
    return NextResponse.json(
      { error: "Unexpected error while generating AI Doctor response." },
      { status: 500 }
    );
  }
}
