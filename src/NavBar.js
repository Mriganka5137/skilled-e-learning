import styles from "./NavBar.module.css";
import logo from "./assets/logo-dark.svg";
function NavBar() {
  return (
    <nav className={styles.navbar}>
      <img src={logo} alt="logo" className={styles.logo} />
      <button className={styles.btn}>Get Started</button>
    </nav>
  );
}

export default NavBar;
