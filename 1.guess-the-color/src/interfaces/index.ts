import { Dispatch, SetStateAction } from 'react';

export enum Result {
  Correct,
  Incorrect,
}
export interface IAnswerParams {
  userAnswer: string;
  actualColor: string;
  setResult: Dispatch<SetStateAction<Result | undefined>>;
  generateColors: () => void;
}
