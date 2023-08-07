import styles from "./Footer.module.css";
import logo from "./assets/logo-light.svg";
function Footer() {
  return (
    <footer className={styles.footer}>
      <img src={logo} alt="logo" className={styles.logo} />
      <button className={styles.btn}>Get Started</button>
    </footer>
  );
}

export default Footer;
