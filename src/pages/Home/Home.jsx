import useFetchCharacters from "../../hooks/useFetchCharacters";
import CharacterCard from "../../components/CharacterCard/CharacterCard";
import styles from "./Home.module.css";
import filterCharactersWithImages from '../../utils/filterCharactersWithImages';

export default function Home() {
  const { loading, error, characters } = useFetchCharacters();
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
  const charactersWithImages = filterCharactersWithImages(characters);
  
  return (
    <div>
      <ul className={styles["cards-container"]}>
        {charactersWithImages?.map((character) => (
          <li key={character?.id}>
            <CharacterCard
              id={character.id}
              thumbnail={`${character.thumbnail.path}/portrait_xlarge.jpg`}
              name={character?.name}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
