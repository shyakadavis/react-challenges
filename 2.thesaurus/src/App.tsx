import { FormEvent, useState } from 'react';
import './App.css';
import Results from './components/Results';
import Button from './components/Button';
import Which from './components/Which';
import { useGetResults } from './hooks/useGetResults';

/**
 * This is the main component that renders the app
 * @returns JSX.Element
 * @constructor
 * @component
 * @example
 * <App />
 */
function App() {
  const [word, setWord] = useState(''); // this is the word that the user enters
  const [endPoint, setEndPoint] = useState<string>('rel_syn='); // a setter for whether wwe are using the synonym, antonym, or rhyme endpoint e.t.c
  const { results, loading, error } = useGetResults(endPoint, word); // this is a custom hook that fetches the results from the api
  // this function is called when the form is submitted
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setWord(word); // this will trigger a new fetch in the useGetResults hook
  };

  /**
   * This function is called when the user clicks on a result, and it generates a new set of results
   * @param newWord the word that the user clicked on
   * @returns void
   */
  const generateNewResults = async (newWord: string) => {
    setWord(newWord); // set the word to the new word which will trigger a new fetch in the useGetResults hook
  };

  return (
    <div className="App">
      <form id="form" onSubmit={handleSubmit}>
        <label htmlFor="word">Enter a word</label>
        <input
          type="text"
          id="word"
          name="word"
          onChange={(e) => setWord(e.target.value)}
          value={word}
        />
        {/* this is the button that changes the endpoint */}
        <Button setEndPoint={setEndPoint} />
        {/*  */}
        {/* this is the component that displays the current endpoint for clarity to the user */}
        <Which endpoint={endPoint} word={word} />
        {/*  */}
      </form>
      {/* this is the component that displays the results */}
      {loading && <div className="loading">Loading...🐳...🌀</div>}
      <Results results={results} handleClick={generateNewResults} />
    </div>
  );
}

export default App;
