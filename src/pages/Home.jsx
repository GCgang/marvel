import React, { useEffect, useState } from "react";
import useFetchCharacters from "../hooks/useFetchCharacters";

export default function Home() {
  const { loading, error, characters } = useFetchCharacters();

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div>
      <ul>
        {characters?.map((character) => (
          <li key={character?.id}>{character?.name}</li>
        ))}
      </ul>
    </div>
  );
}
