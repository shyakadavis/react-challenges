import { IAnswerParams, Result } from '../interfaces';

export const handleAnswerClick = ({
  userAnswer,
  actualColor,
  setResult,
  generateColors,
}: IAnswerParams) => {
  if (userAnswer === actualColor) {
    setResult(Result.Correct);
    generateColors(); // re-render a new colors with a new set of prompts
  } else {
    setResult(Result.Incorrect);
  }
};
