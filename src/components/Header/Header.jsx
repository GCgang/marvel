import styles from './Header.module.css';
import {Link} from 'react-router-dom';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__logo}>
        <Link to='/'>
          <img className={styles.header__logo__img} src='/marvel.png' alt='MARVEL'/>
        </Link>
      </div>
    </header>
  );
}