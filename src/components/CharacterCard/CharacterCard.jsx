import styles from "./CharacterCard.module.css";
import { Link } from 'react-router-dom';

export default function CharacterCard({ id, thumbnail, name }) {
  return (
    <div className={styles["character-card"]}>
      <Link to={`/character/${id}`} className={styles["character-card__link"]}>
        <img
          className={styles["character-card__img"]}
          src={thumbnail}
          alt="thumbnail"
        />
        <div className={styles["character-name"]}>
          <h1>{name}</h1>
        </div>
      </Link>
    </div>
  );
}
