import drugsRaw from "@/data/drugs.json";
import type { DrugClass, PatientCase } from "@/lib/types";

const drugs = drugsRaw as DrugClass[];

export function getAllDrugs() {
  return drugs;
}

export function gradeChoice(patient: PatientCase, selectedDrugId: string | null) {
  if (!selectedDrugId) {
    return {
      headline: "Select a drug class",
      bullets: ["Choose a medication to see feedback."],
      evidence: []
    };
  }

  const drug = drugs.find(d => d.id === selectedDrugId);
  if (!drug) return null;

  const isAppropriate = patient.appropriate.includes(drug.id);

  return {
    headline: isAppropriate ? "✅ Appropriate choice" : "⚠️ Consider another option",
    bullets: isAppropriate ? drug.benefits : drug.risks,
    evidence: drug.evidence
  };
}