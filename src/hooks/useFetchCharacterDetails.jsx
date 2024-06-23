import React, { useEffect, useState } from "react";

export default function useFetchCharacterDetails(id) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [details, setDetails] = useState([]);

  const fetchCharacterDetails = async () => {
    try {
      const response = await fetch(
        `https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters/${id}`
      );
      if (!response?.ok) {
        throw new Error(`HTTP Error!! status: ${response.status}`);
      }
      const json = await response.json();
      setDetails(json.data.results);
    } catch (err){
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchCharacterDetails();
  }, []);

  return {loading, error, details};
}
