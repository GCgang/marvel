import styles from './Main.module.css'

export default function Main({children}) {
  return (
    <main className={styles.main}>
      <div className={styles.main__contents}>
        <h1 className={styles.main__title}>MARVEL CHARACTERS</h1>
        <p className={styles.main__subtitle}>Get hooked on a hearty helping of heroes and villains from the humble House of Ideas!</p>
      </div>
    </main>
  );
}