import { QuestionSet } from './question-set';

export interface Quiz {
  [key: string]: {
    [key: number]: QuestionSet[]
  };
}
