import useFetchCharacters from "../../hooks/useFetchCharacters";
import CharacterCard from "../../components/CharacterCard/CharacterCard";
import styles from "./Home.module.css";
import filterWithImages from "../../utils/filterWithImages";
import Main from "../../components/Main/Main";
import { getHomeMainBackgroundImage } from "../../utils/api";
import Loading from "../../components/Loading/Loading";
export default function Home() {
  const { loading, characters } = useFetchCharacters();

  if (loading) {
    return <Loading />;
  }

  const charactersWithImages = filterWithImages(characters);
  return (
    <div>
      <Main
        title={"MARVEL CHARACTERS"}
        subtitle={
          "Get hooked on a hearty helping of heroes and villains from the humble House of Ideas!"
        }
        backgroundImage={getHomeMainBackgroundImage()}
        customStyles={styles.homeMain}
      />
      <ul className={styles["cards-container"]}>
        {charactersWithImages?.map((character) => (
          <li key={character?.id}>
            <CharacterCard
              id={character.id}
              thumbnail={`${character.thumbnail.path}/landscape_incredible.jpg`}
              name={character.name}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
