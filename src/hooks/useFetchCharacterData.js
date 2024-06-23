import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

import {
  getCharacterDetailsUrl,
  getCharacterComicsUrl,
  getCharacterSeriesUrl,
  getCharacterEventsUrl,
  getCharacterStoriesUrl,
} from '../utils/api';

async function fetchCharacterDetails(id) {
  const response = await fetch(getCharacterDetailsUrl(id));
  if (!response?.ok) {
    throw new Error(`Error: getCharacterDetailsUrl() status: ${response.status}`);
  }
  const json = await response.json();
  return json.data.results;
}

async function fetchCharacterComics(id) {
  const response = await fetch(getCharacterComicsUrl(id));
  if (!response?.ok) {
    throw new Error(`Error: getCharacterComicsUrl() status: ${response.status}`);
  }
  const json = await response.json();
  return json.data.results;
}

async function fetchCharacterSeries(id) {
  const response = await fetch(getCharacterSeriesUrl(id));
  if (!response?.ok) {
    throw new Error(`Error: getCharacterSeriesUrl() status: ${response.status}`);
  }
  const json = await response.json();
  return json.data.results;
}

async function fetchCharacterEvents(id) {
  const response = await fetch(getCharacterEventsUrl(id));
  if (!response?.ok) {
    throw new Error(`Error: getCharacterEventsUrl() status: ${response.status}`);
  }
  const json = await response.json();
  return json.data.results;
}

async function fetchCharacterStories(id) {
  const response = await fetch(getCharacterStoriesUrl(id));
  if (!response?.ok) {
    throw new Error(`Error: getCharacterStoriesUrl() status: ${response.status}`);
  }
  const json = await response.json();
  return json.data.results;
}


export default function useFetchCharacterData(id) {
  const [loading, setLoading] = useState(true);
  const [characterData, setCharacterData] = useState({
    details: [],
    comics: [],
    series: [],
    events: [],
    stories: []
  });

  const navigate = useNavigate();
  useEffect(() => {
    const fetchCharacterData = async () => {
      try {
        const [details, comics, series, events, stories] = await Promise.all([
          fetchCharacterDetails(id),
          fetchCharacterComics(id),
          fetchCharacterSeries(id),
          fetchCharacterEvents(id),
          fetchCharacterStories(id)
        ]);
        setCharacterData({
          details,
          comics,
          series,
          events,
          stories,
        });
      } catch (err) {
        navigate('/not-found', { state: { error: err.message } });
      } finally {
        setLoading(false);
      }
    };

    fetchCharacterData();
  }, [id, navigate]);
  
  return {loading, characterData};
}
