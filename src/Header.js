import styles from "./Header.module.css";
function Header() {
  return (
    <section className={styles.header}>
      <h1 className={styles["header--primary-heading"]}>
        Maximize skill,
        <br /> minimize budget
      </h1>
      <p className={styles["header--description"]}>
        Our modern courses across a range of in-demand skills will give you the
        knowledge you need to live the life you want.
      </p>
      <button className={styles.btn}>Get Started</button>
    </section>
  );
}

export default Header;
