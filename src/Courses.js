import Card from "./Card";
import styles from "./Courses.module.css";
import animation from "./assets/icon-animation.svg";
import business from "./assets/icon-business.svg";
import crypto from "./assets/icon-crypto.svg";
import design from "./assets/icon-design.svg";
import photography from "./assets/icon-photography.svg";
function Courses() {
  return (
    <section className={styles["courses-section-container"]}>
      <div className={styles["popular-courses"]}>
        Check out our most popular courses!
      </div>
      <Card
        heading="Animation"
        description="Learn the latest animation techniques to create stunning motion design and captivate your audience."
        logo={animation}
      />
      <Card
        heading="Design"
        description="Create beautiful, usable interfaces to help shape the future of how the web looks."
        logo={design}
      />
      <Card
        heading="Photography"
        description="Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos."
        logo={photography}
      />
      <Card
        heading="Crypto"
        description="All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course."
        logo={crypto}
      />
      <Card
        heading="Business"
        description="A step-by-step playbook to help you start, scale, and sustain your business without outside investment."
        logo={business}
      />
    </section>
  );
}

export default Courses;
