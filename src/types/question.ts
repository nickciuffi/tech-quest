import { AnswerProps } from './answer';

export type Question = {
  id: number;
  text: string;
};
export type QuestionWithAnswers = {
  id: number;
  text: string;
  answers: AnswerProps[];
};
