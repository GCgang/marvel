import { useParams } from "react-router-dom";
import useFetchCharacterData from "../../hooks/useFetchCharacterData";
import Main from "../../components/Main/Main";
import styles from "./CharacterDetails.module.css";
import CustomSlider from "../../components/CustomSlider/CustomSlider.jsx";
import Loading from "../../components/Loading/Loading.jsx";
export default function CharacterDetails() {
  const { id } = useParams();
  const { loading, characterData } = useFetchCharacterData(id);
  const { details, comics, series, events } = characterData;

  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <Main
        title={details[0].name}
        backgroundImage={`${details[0].thumbnail.path}/landscape_incredible.${details[0].thumbnail.extension}`}
        subtitle={details[0].description}
        customStyles={styles.characterDetailsMain}
      />
      <CustomSlider items={comics} title="Comics" />
      <CustomSlider items={series} title="Series" />
      <CustomSlider items={events} title="Events" />
    </div>
  );
}
