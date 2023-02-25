import { useEffect, useState } from 'react';
import './App.css';
import { generateRandomColor, handleAnswerClick } from './utils';
import { Result } from './interfaces';

function App() {
  const [color, setColor] = useState('');
  const [answers, setAnswers] = useState<string[]>([]);
  const [result, setResult] = useState<Result | undefined>(undefined);

  const generateColors = () => {
    const actualColor = generateRandomColor(); // store the actual value in this variable
    setColor(actualColor); // set the color to that of the value in the variable
    setAnswers(
      [actualColor, generateRandomColor(), generateRandomColor()].sort(
        () => 0.5 - Math.random(),
      ),
    ); // the answer prompts will be from this array, and we can use the .sort() method to randomly display the position of the right answer.
  };

  useEffect(() => {
    generateColors();
  }, []);

  return (
    <div className="App">
      <h1 className="header">Guess the color</h1>
      <button className="result-box">
        {result === Result.Incorrect && (
          <p className="wrong-answer">Incorrect Answer</p>
        )}
        {result === Result.Correct && (
          <p className="right-answer">You're Awesome</p>
        )}
      </button>
      <div className="guess-me" style={{ background: color }}></div>
      <section className="answer-buttons-wrapper">
        {answers.map((answer) => (
          <button
            key={answer}
            onClick={() =>
              handleAnswerClick({
                userAnswer: answer,
                actualColor: color,
                setResult,
                generateColors,
              })
            }
          >
            {answer}
          </button>
        ))}
      </section>
    </div>
  );
}

export default App;
