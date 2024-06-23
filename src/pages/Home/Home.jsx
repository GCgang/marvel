import useFetchCharacters from "../../hooks/useFetchCharacters";
import CharacterCard from "../../components/CharacterCard/CharacterCard";
import styles from "./Home.module.css";
import filterCharactersWithImages from '../../utils/filterCharactersWithImages';
import Main from '../../components/Main/Main';
import {getHomeMainBackgroundImage} from '../../utils/api'

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
      <Main
        title={'MARVEL CHARACTERS'}
        subtitle={'Get hooked on a hearty helping of heroes and villains from the humble House of Ideas!'}
        backgroundImage={getHomeMainBackgroundImage()}
        customStyles={styles.homeMain}
      />
      <ul className={styles["cards-container"]}>
        {charactersWithImages?.map((character) => (
          <li key={character?.id}>
            <CharacterCard
              id={character.id}
              thumbnail={`${character.thumbnail.path}/portrait_xlarge.jpg`}
              name={character.name}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
