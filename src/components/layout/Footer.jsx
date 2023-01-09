import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import styles from './Footer.module.css'
function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.social_list}>
        <li><FaLinkedin /></li>
        <li><FaInstagram /></li>
        <li><FaFacebook /></li>
      </ul>
      <p className={styles.copy_right}><span>Gerenciador</span> &copy;2023
      </p>
    </footer>
  )
}

export default Footer