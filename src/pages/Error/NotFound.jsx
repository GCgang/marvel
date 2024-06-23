import styles from './NotFound.module.css';
import { useRouteError } from 'react-router-dom';

export default function NotFound() {
  const error = useRouteError();
  const errorMessage = error?.message || 'Page not found';

  return (
    <div className={styles.container}>
      <di className={styles.errorMessage}>
        <h1>Error</h1>
        <p>{errorMessage}</p>
      </di>
      <img src='https://cdn.marvel.com/content/1x/019tha_ons_mas_dsk_01_2.jpg' alt="error page" className={styles.image} />
    </div>
  );
}