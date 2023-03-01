import { useEffect, useState } from 'react';
import { fetchResults } from '../api/fetchResults';

export const useGetResults = (endPoint: string, word: string) => {
  const [results, setResults] = useState<string[]>([]); // this is the array of results from the api that will be displayed
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchResultsFromAPI = async () => {
      setLoading(true);
      try {
        const data = await fetchResults(endPoint, word);
        setResults(data);
      } catch (error: any) {
        setError(error.message);
      }
      setLoading(false);
    };
    fetchResultsFromAPI();
  }, [endPoint, word]);

  return { results, loading, error };
};
