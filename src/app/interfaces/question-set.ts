export interface QuestionSet {
  question: string;
  responses: {
    1?: string
    2?: string
    3?: string
    4?: string
    5?: string
    6?: string
  };

  correct: number[];
  reason: string;
}
