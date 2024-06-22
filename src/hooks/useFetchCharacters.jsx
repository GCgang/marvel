import React, {useEffect, useState} from 'react';

export default function useFetchChracters() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [chracters, setChracters] = useState([]);

  const fetchChracters = async () => {  
    try {
      const response = await fetch('https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters?limit=50&orderBy=modified&series=24229,1058,2023');
      if (!response?.ok) {
        return new Error(`HTTP Error!! status: ${response.status}`);
      }
      const json = await response.json();
      setChracters(json.data.results);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchChracters();
  }, []);

  return ({loading, error, chracters});
}