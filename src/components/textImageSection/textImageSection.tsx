import BikeImage from "../../assets/bikeimg.jpg";
import Navbar from "../navbar/navbar";
import styles from "./textImageSection.module.css";

const TextImageSection = () => {
  return (
    <>
      <Navbar />

      <div className={`${styles.libroLiberoContainer} pageContainer`}>
        <div className={styles.contentWrapper}>
          {/* Left Column - Text */}
          <div className={styles.textColumn}>
            <h1 className={styles.title}>LIBROLIBERO</h1>

            <h2 className={styles.subtitle}>La Contabilità della Gioia</h2>

            <div className={styles.dedication}>
              <p>
                Dedicato a Silvia, morta per malattia a vent'anni nello
                splendore della sua adolescenza.
              </p>
              <p>Dedicato a Ippolita, sua sorella.</p>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className={styles.imageColumn}>
            <div className={styles.imageWrapper}>
              <img src={BikeImage} alt="Woman on bike" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TextImageSection;
