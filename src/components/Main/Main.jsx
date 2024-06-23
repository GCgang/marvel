import styles from './Main.module.css'

export default function Main({title, subtitle, backgroundImage, customStyles}) {
  return (
    <main
      className={`${styles.main} ${customStyles}`} 
      style={{ backgroundImage: `url(${backgroundImage})` }}
      >
      <div className={styles.main__contents}>
        <h1 className={styles.main__title}>{title}</h1>
        <p className={styles.main__subtitle}>{subtitle}</p>
      </div>
    </main>
  );
}