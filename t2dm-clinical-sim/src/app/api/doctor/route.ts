import { NextResponse } from "next/server";

type DoctorRequest = {
  question?: string;
  context?: unknown;
};

const OPENAI_API_URL = "https://api.openai.com/v1/responses";
const OPENAI_MODELS = [
  "gpt-4.1-mini",
  "gpt-4o-mini",
] as const;

function extractOpenAIText(data: unknown): string | null {
  if (!data || typeof data !== "object") return null;

  const outputText = (data as { output_text?: unknown }).output_text;
  if (typeof outputText === "string" && outputText.trim().length > 0) {
    return outputText.trim();
  }

  const chunks: string[] = [];
  const output = (data as { output?: unknown }).output;
  if (!Array.isArray(output)) return null;

  for (const item of output) {
    if (!item || typeof item !== "object") continue;
    const content = (item as { content?: unknown }).content;
    if (!Array.isArray(content)) continue;

    for (const part of content) {
      if (!part || typeof part !== "object") continue;
      const textValue = (part as { text?: unknown }).text;
      if (typeof textValue === "string" && textValue.trim().length > 0) {
        chunks.push(textValue.trim());
      }

      const nestedText = (part as { text?: { value?: unknown } }).text?.value;
      if (typeof nestedText === "string" && nestedText.trim().length > 0) {
        chunks.push(nestedText.trim());
      }

      const text = (part as { text?: unknown }).text;
      if (text && typeof text === "object") {
        const value = (text as { value?: unknown }).value;
        if (typeof value === "string" && value.trim().length > 0) {
          chunks.push(value.trim());
        }
      }
    }
  }

  return chunks.length > 0 ? chunks.join("\n\n") : null;
}

export async function POST(req: Request) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey || apiKey === "your_openai_api_key_here") {
    return NextResponse.json(
      { error: "Missing OPENAI_API_KEY on server." },
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
    const configuredModel = process.env.OPENAI_MODEL?.trim();
    const models = configuredModel
      ? ([configuredModel, ...OPENAI_MODELS.filter((m) => m !== configuredModel)] as const)
      : OPENAI_MODELS;

    for (const model of models) {
      const resp = await fetch(OPENAI_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model,
          instructions: systemInstruction,
          input: userPrompt,
          max_output_tokens: 350,
        }),
      });

      if (!resp.ok) {
        const errText = await resp.text();
        errors.push(`${model}: ${errText}`);
        continue;
      }

      const data = (await resp.json()) as unknown;
      const answer = extractOpenAIText(data);
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
