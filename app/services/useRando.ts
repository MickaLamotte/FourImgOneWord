import { useEffect, useState, useCallback } from 'react';

const useRando = () => {

  const [word, setWord] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  
  const fetchWord = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://random-word-api.vercel.app/api?words=1&length=6&type=uppercase&alphabetize=true`);

      if(!response.ok) { throw new Error('Erreur lors du chargement des images') }


      const data = await response.json();
      console.log(data[0]);
      setWord(data[0]);

    } catch (error: any) {
      setError(error.message || 'Une erreur est survenue');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchWord();
  }, [fetchWord]);

  return { word, loading, error, fetchWord };

}

export default useRando;