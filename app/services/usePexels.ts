import { useCallback, useEffect, useState } from 'react';

const API_KEY_PEXEL = "hTjwv4ukgnoZwOCPRYsL4dxwYt4qEQIosvUyYsqyrkB4e5SGTMZAIW3v";

export function usePexels(word: string) {

  const [images, setImages] = useState<string[]>(["", "", "", ""]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchImages = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://api.pexels.com/v1/search?query=${word}&per_page=4`, {
        headers: { Authorization: API_KEY_PEXEL },
      });

      if(!response.ok) { throw new Error('Erreur lors du chargement des images') }
  
      const data = await response.json();
      const images = data.photos.map((photo: any) => photo.src.medium);
      setImages(images);
    } catch (error: any) {
      setError(error.message || 'Une erreur est survenue');
    } finally {
      setLoading(false);
    }
  }, [word]);
  
  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  return { images, loading, error, fetchImages };

}
