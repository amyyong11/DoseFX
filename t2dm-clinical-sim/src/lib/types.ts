export type EvidenceSnippet = {
  id: string;
  source: string;
  quote: string;
};

export type DrugClass = {
  id: string;
  name: string;
  benefits: string[];
  risks: string[];
  avoidIf: string[];
  preferIf: string[];
  evidence: EvidenceSnippet[];
};

export type PatientCase = {
  id: string;
  title: string;
  summary: string;
  features: {
    a1c: number;
    bmi: number;
    egfr: number;
    ascvd: boolean;
    hf: boolean;
    costSensitive: boolean;
    hypoglycemiaRisk: boolean;
    weightLossGoal: boolean;
    giIntolerance: boolean;
  };
  derivedTags: string[];
  teachingPoint: string;
  appropriate: string[];
  bestAlternative: string;
};

export type Feedback = {
  headline: string;
  score: number;
  bullets: string[];
  rationale: string;
  sideEffects: string[];
  evidence: EvidenceSnippet[];
};

export type PatientReaction =
  | "neutral"
  | "happy"
  | "mildly_uncomfortable"
  | "uncomfortable"
  | "critical";
