import styles from "./CharacterCard.module.css";
export default function CharacterCard({ thumbnail, name }) {
  return (
    <div className={styles["character-card"]}>
      <img
        className={styles["character-card__img"]}
        src={thumbnail}
        alt="thumbnail"
      />
      <div className={styles["character-name"]}>
        <h1>{name}</h1>
      </div>
    </div>
  );
}
