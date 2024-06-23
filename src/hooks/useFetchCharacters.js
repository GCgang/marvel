import { useEffect, useState } from "react";
import { getCharactersListUrl } from '../utils/api'
import { useNavigate } from 'react-router-dom';

export default function useFetchCharacters() {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch(getCharactersListUrl());
        if (!response?.ok) {
          throw new Error(`Error: getCharactersListUrl() status: ${response.status}`);
        }
        const json = await response.json();
        setCharacters(json.data.results);
      } catch (err) {
        navigate('/not-found', { state: { error: err.message } });
      } finally {
        setLoading(false);
      }
    };
    fetchCharacters();
  }, [navigate]);

  return { loading, characters };
}
