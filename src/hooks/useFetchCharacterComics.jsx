import { useState, useEffect } from 'react';

export default function useFetchCharacterComics(id) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [comics, setComics] = useState([]);

  useEffect(() => {
    const fetchComics = async () => {
      try {
        const response = await fetch(
          `https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters/${id}/comics`
        );
        if (!response.ok) {
          throw new Error(`HTTP Error!! status: ${response.status}`);
        }
        const data = await response.json();
        setComics(data.data.results);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchComics();
  }, [id]);

  return { loading, error, comics };
}
