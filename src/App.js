import styles from "./App.module.css";
import NavBar from "./NavBar";
import Header from "./Header";
import DesktopHero from "./assets/image-hero-desktop.png";
import TabletHero from "./assets/image-hero-tablet.png";
import MobileHero from "./assets/image-hero-mobile@2x.png";
import Courses from "./Courses";
import Footer from "./Footer";
function App() {
  return (
    <main className={styles.container}>
      <NavBar />
      <Header />
      <Courses />
      <Footer />
      <img src={DesktopHero} alt="hero" className={styles["hero--desktop"]} />
      <img src={TabletHero} alt="hero" className={styles["hero--tablet"]} />
      <img src={MobileHero} alt="hero" className={styles["hero--mobile"]} />
    </main>
  );
}

export default App;

/**
 Get Started Maximize skill, minimize budget Our modern courses across a range of 
 in-demand skills will give you the knowledge you need to live the life you want.
  Get Started Check out our most popular courses! 
  Animation Learn the latest animation techniques to create stunning motion design and captivate your audience.
   Get Started Design Create beautiful, usable interfaces to help shape the future of how the web looks.
    Get Started Photography Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos.
     Get Started Crypto All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course.
      Get Started Business A step-by-step playbook to help you start, scale, and sustain your business without outside investment.
       Get Started Get Started
 */
