import styles from "./hero.module.css";
import Navbar from "../navbar/navbar";

const HeroComponent = () => {
  return (
    <div className={styles.hero}>
      <Navbar />
      <div className={`${styles.heroContent} pageContainer`}>
        <h1 className={styles.title}>La contabilità della gioia</h1>
        <p className={styles.subtitle}>
          Dedicato a Silvia, morta per malattia a vent'anni <br />
          nello splendore della sua adolescenza. Dedicato a Ippolita, sua
          sorella.
          <span className={styles.years}>1984-2005</span>
        </p>
      </div>
    </div>
  );
};

export default HeroComponent;
