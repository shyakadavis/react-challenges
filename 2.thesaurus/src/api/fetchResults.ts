/**
 * This is the base url for the api that we are using to fetch data
 * @type {string}
 * @constant
 * @default
 * @example
 * https://api.datamuse.com/words?
 * @see https://www.datamuse.com/api/
 */
const BASE_URL =
  import.meta.env.VITE_API_URL ?? 'https://api.datamuse.com/words?';

/**
 * This function fetches the results from the api
 * @param endPoint the endpoint that we are using to fetch data be it synonyms, antonyms, etc
 * @param word the word that the user entered
 * @returns {Promise<string[]>} the results from the api
 * @example
 * const results = await fetchResults('rel_syn=', 'happy');
 */
export const fetchResults = async (
  endPoint: string,
  word: string,
): Promise<string[]> => {
  const response = await fetch(`${BASE_URL}${endPoint}${word}`);
  const data = await response.json();
  const returnedData = await data.map(
    (result: { word: string }) => result.word,
  );
  return returnedData;
};
