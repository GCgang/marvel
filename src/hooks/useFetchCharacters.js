import { useEffect, useState } from "react";
import { getCharactersListUrl } from '../utils/api'
export default function useFetchCharacters() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [characters, setCharacters] = useState([]);

  const fetchCharacters = async () => {
    try {
      const response = await fetch(getCharactersListUrl());
      if (!response?.ok) {
        throw new Error(`Error: getCharactersListUrl() status: ${response.status}`);
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
