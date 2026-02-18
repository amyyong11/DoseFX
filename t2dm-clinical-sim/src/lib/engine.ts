import casesRaw from "@/data/cases.json";
import drugsRaw from "@/data/drugs.json";
import type { DrugClass, Feedback, PatientCase } from "@/lib/types";

const drugs = drugsRaw as DrugClass[];
const cases = casesRaw as PatientCase[];

export function getAllCases() {
  return cases;
}

export function getAllDrugs() {
  return drugs;
}

export function gradeChoice(patient: PatientCase, selectedDrugId: string | null): Feedback | null {
  if (!selectedDrugId) {
    return {
      headline: "Choose a medication class",
      score: 0,
      bullets: ["Select an option to evaluate clinical fit for this patient."],
      rationale: "Use comorbidities, safety profile, and patient goals to guide your first-line choice.",
      sideEffects: [],
      evidence: [],
    };
  }

  const drug = drugs.find((d) => d.id === selectedDrugId);
  if (!drug) return null;

  const matchedAvoid = drug.avoidIf.filter((tag) => patient.derivedTags.includes(tag));
  const matchedPrefer = drug.preferIf.filter((tag) => patient.derivedTags.includes(tag));

  const isBest = selectedDrugId === patient.bestAlternative;
  const isAppropriate = patient.appropriate.includes(selectedDrugId);

  let score = 55;
  let headline = "Reasonable, but not optimal";

  if (isBest) {
    score = 95;
    headline = "Best choice for this case";
  } else if (isAppropriate) {
    score = 82;
    headline = "Appropriate choice";
  }

  if (matchedAvoid.length > 0) {
    score = Math.max(25, score - 35);
    headline = "High-risk choice for this patient";
  }

  const bullets: string[] = [];

  if (matchedPrefer.length > 0) {
    bullets.push(`Matches priority tags: ${matchedPrefer.join(", ")}.`);
  }
  if (matchedAvoid.length > 0) {
    bullets.push(`Conflicts with risk tags: ${matchedAvoid.join(", ")}.`);
  }

  bullets.push(...(isAppropriate ? drug.benefits : drug.risks));

  const rationale = isBest
    ? patient.teachingPoint
    : `Most preferred option in this case: ${formatDrugName(patient.bestAlternative)}.`;

  return {
    headline,
    score,
    bullets,
    rationale,
    sideEffects: drug.risks,
    evidence: drug.evidence,
  };
}

function formatDrugName(id: string) {
  return drugs.find((d) => d.id === id)?.name ?? id;
}
