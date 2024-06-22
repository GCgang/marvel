import React, { useEffect, useState } from "react";
import useFetchCharacters from "../../hooks/useFetchCharacters";
import { Link } from "react-router-dom";
import CharacterCard from "../../components/CharacterCard/CharacterCard";
import styles from "./Home.module.css";
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
      <ul className={styles["cards-container"]}>
        {characters?.map((character) => (
          <li key={character?.id}>
            <CharacterCard
              thumbnail={`${character.thumbnail.path}/portrait_xlarge.jpg`}
              name={character?.name}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
