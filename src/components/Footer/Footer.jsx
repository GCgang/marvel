import styles from './Footer.module.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube, faTwitter, faPinterest, faSnapchat } from '@fortawesome/free-brands-svg-icons';

const socialMediaLinks = [
  { href: "https://www.facebook.com/marvel", icon: faFacebook },
  { href: "https://www.instagram.com/marvel", icon: faInstagram },
  { href: "https://www.youtube.com/marvel", icon: faYoutube },
  { href: "https://www.twitter.com/marvel", icon: faTwitter },
  { href: "https://www.pinterest.com/marvel", icon: faPinterest },
  { href: "https://www.snapchat.com/add/marvel", icon: faSnapchat },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Link to='/'><img className={styles.footer__logo} src='/m.png' alt='M' /></Link>
      <p>FOLLOW MARVEL</p>
      <ul className={styles.footer__follow}>
        {socialMediaLinks.map((link, index) => (
          <li key={index} className={styles.follow__link}>
            <a href={link.href} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={link.icon} />
            </a>
          </li>
        ))}
      </ul>
      <p>ⓒ2024 hyeonjun</p>
    </footer>
  );
}
