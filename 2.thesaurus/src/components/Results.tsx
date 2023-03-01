import React from 'react';
import '../assets/results.css';

/**
 * This is the results component that displays the results to the user
 * @param results the array of results from the api
 * @param handleClick a function that is called when the user clicks on a result
 * @returns JSX.Element
 * @constructor
 * @component
 * @example
 * <Results
 *  hasResults={hasResults}
 * results={results}
 * handleClick={generateNewResults}
 * />
 *
 * @typedef ResultsProps
 * @property {string[]} results - the array of results from the api
 * @property {(word: string) => void} handleClick - a function that is called when the user clicks on a result
 */

interface ResultsProps {
  results: string[];
  handleClick: (word: string) => void;
}

const Results: React.FC<ResultsProps> = ({ results, handleClick }) => {
  return (
    <div id="results-wrapper">
      <div className="results-container">
        {/* Render the results */}
        {results.length ? (
          <div id="results-container">
            {results.map((result) => (
              <span key={result} onClick={() => handleClick(result)}>
                <div className="label">
                  <span className="name">{result}</span>
                </div>
              </span>
            ))}
          </div>
        ) : (
          // if no results, render this
          <div className="no-results-container">
            No words found<span className="no-results"> 😓</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Results;
