import styles from "./Card.module.css";
function Card({ logo, heading, description }) {
  return (
    <div className={styles.card}>
      <div>
        <img src={logo} alt="logo" className={styles.logo} />
        <h2 className={styles.heading}>{heading}</h2>
        <p className={styles.description}>{description}</p>
      </div>
      <p className={styles.link}>Get Started</p>
    </div>
  );
}

export default Card;
