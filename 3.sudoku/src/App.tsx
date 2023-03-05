import { useEffect, useState } from 'react';
import './App.css';

// TODO: add a button to reset the grid
// TODO: add a button to solve the grid
// TODO: add a button to generate a new grid
// TODO: add a button to check if the grid is valid
// TODO: add a button to check if the grid is solved
// TODO: add a button to check if the grid is valid and solved
// TODO: add a button to check if the grid is valid and not solved
// TODO: add a button to check if the grid is not valid and solved
// TODO: add a button to check if the grid is not valid and not solved
const initialGrid = () => {
  return [
    [0, 2, 0, 0, 0, 0, 0, 7, 0],
    [0, 0, 9, 3, 5, 0, 0, 0, 2],
    [0, 0, 0, 0, 9, 0, 6, 0, 0],
    [0, 6, 0, 0, 0, 9, 3, 0, 0],
    [0, 0, 2, 5, 0, 8, 7, 0, 0],
    [0, 0, 5, 1, 0, 0, 0, 4, 0],
    [0, 0, 4, 0, 6, 0, 0, 0, 0],
    [9, 0, 0, 0, 8, 3, 5, 0, 0],
    [0, 8, 0, 0, 0, 0, 0, 3, 0],
  ];
};

const solvedSudoku = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9],
];

const emptyGrid = new Array(9).fill('').map(() => new Array(9).fill('0'));

function App() {
  const [grid, setGrid] = useState<number[][]>(initialGrid());
  const [error, setError] = useState<boolean>(false);
  const [errorText, setErrorText] = useState<string>('');

  const setGridValue = (row: number, col: number, value: number) => {
    // limit the value to 1-9
    if (value < 0 || value > 9) {
      return;
    }

    const newGrid = [...grid];
    newGrid[row][col] = value;
    setGrid(newGrid);
  };

  const handleSolve = async () => {
    // curl -H 'Content-Type: application/json' -X POST -d '{"sudoku":["9715..842..69...1....8.2..95.....79...76.83...28.....57..1.5....4...91..819..7254"]}' http://127.0.0.1:5000
    let puzzleAsString = '';
    for (let rowIndex = 0; rowIndex < 9; rowIndex++) {
      for (let colIndex = 0; colIndex < 9; colIndex++) {
        const value = grid[colIndex][rowIndex]; // the order indices is switched because the way the grid is being rendered on the screen is different from the way it is being stored in the array
        puzzleAsString += value === 0 ? '.' : value; // if the value is 0, then we send a dot, otherwise we use the value
      }
    }
    try {
      const res = await fetch('http://0.0.0.0:9090/http://127.0.0.1:5000', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sudoku: [puzzleAsString],
        }),
      });
      const response = await res.json();
      const data = response.data[0];
      console.log(data);
      if (data.status == 'error') {
        setError(true);
        setErrorText(data.message);
        return;
      } else {
        setError(false);
        const solution = data.solution;
        const newGrid = new Array(9).fill('').map(() => new Array(9).fill(''));

        /*       for (let rowIndex = 0; rowIndex < 9; rowIndex++) {
        for (let colIndex = 0; colIndex < 9; colIndex++) {
          newGrid[rowIndex][colIndex] = parseInt(
            solution.charAt(rowIndex * 9 + colIndex),
          );
        }
      } */

        // this is the same as above, though less readable, but less verbose
        for (let i = 0; i < 81; i++) {
          const row = Math.floor(i / 9);
          const col = i % 9;
          newGrid[row][col] = parseInt(solution[i]);
        }

        setGrid(newGrid);
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const handleReset = () => {
    setGrid(initialGrid());
    setError(false);
  };

  return (
    <div className="App">
      <div className="header">
        <h2>Sudoku</h2>
        {error && <div className="error">{errorText}</div>}
      </div>
      <div className="grid">
        {grid.map((row, rowIndex) => (
          <div className="row" key={rowIndex}>
            {row.map((number, colIndex) => (
              <div className="cell" key={colIndex}>
                <input
                  value={number}
                  inputMode="numeric"
                  onChange={(e) =>
                    setGridValue(
                      rowIndex,
                      colIndex,
                      parseInt(e.target.value) || 0,
                    )
                  }
                />
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="solve">
        <button onClick={handleSolve}>Solve</button>🦕🦕🦕🦕
        <button onClick={handleReset}>Reset</button>🦕🦕🦕🦕
        <button onClick={handleSolve}>Solve it for Me</button>
      </div>
    </div>
  );
}

export default App;
