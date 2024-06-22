import React, { useEffect, useState } from "react";

export default function useFetchCharacters() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [characters, setCharacters] = useState([]);

  const fetchCharacters = async () => {
    try {
      const response = await fetch(
        "https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters?limit=50&orderBy=modified&series=24229,1058,2023"
      );
      if (!response?.ok) {
        return new Error(`HTTP Error!! status: ${response.status}`);
      }
      const json = await response.json();
      setCharacters(json.data.results);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchCharacters();
  }, []);

  return { loading, error, characters };
}
