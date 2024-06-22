import styles from './Footer.module.css'
import {Link} from 'react-router-dom'
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Link to ='/'><img className={styles.footer__logo} src='/m.png' alt='M' /></Link>
      <p>FOLLOW MARVEL</p>
      <ul className={styles.footer__follow}>
        <li className={styles.follow__link}>link</li>
        <li className={styles.follow__link}>link</li>
        <li className={styles.follow__link}>link</li>
        <li className={styles.follow__link}>link</li>
        <li className={styles.follow__link}>link</li>
        <li className={styles.follow__link}>link</li>
        <li className={styles.follow__link}>link</li>
        <li className={styles.follow__link}>link</li>
        <li className={styles.follow__link}>link</li>
        <li className={styles.follow__link}>link</li>
      </ul>
      <p>ⓒ2024 hyeonjun</p>
    </footer>
  );
}