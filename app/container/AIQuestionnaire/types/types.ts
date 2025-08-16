export type Question = {
  id: string;
  title: string;
  question: string;
  options: string[];
};

export type QuestionnaireState = {
  currentStep: number;
  answers: Record<string, string>;
};
