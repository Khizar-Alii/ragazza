import styles from "./threeColumnSection.module.css";
import MiddleImage from "../../assets/silvia3.png";

const ThreeColumnSection = () => {
  return (
    <div className={`${styles.threeColContainer} pageContainer`}>
      <div className={styles.contentWrapper}>
        {/* Left Column - Text */}
        <div className={styles.leftColumn}>
          <p>
            Se n'è andata in fretta, così come viveva di corsa con la paura di
            perdersi qualcosa, senza disturbare nessuno. <br /> La vita
            non le è stata facile ma ha avuto l'amore, la certezza di <br />
            essere amata, anche l'amore speciale di un ragazzo. <br /> Ma
            soprattutto lasciava il segno dove passava, una specie di scia
            che resta. <br /> Con i capelli rosa i rasta i piercing la
            chiamavano Pinki e la sua provocazione era dolce ma decisa.
            <br /> Sarà per sempre bella e incerta della sua bellezza. <br />
            Sarà per sempre saggia come coloro che ricercano continuamente
            senza certezze. <br /> Sarà per sempre coraggiosa come il Don
            Chisciotte che tanto amava e tanto aveva studiato. <br />
            Sarà per sempre trasparente e impetuosa nel suo desiderio di <br />
            chiarezza. <br /> Grazie a lei ho scoperto che non siamo noi
            genitori ad accompagnare <br /> i nostri figli ma sono loro i nostri
            figli ad accompagnarci nella vita offrendoci ogni giorno
            <br /> una coerenza che non scende a compromessi <br /> una sorpresa
            per essere meravigliati <br /> una curiosità per conoscere <br /> un
            buon motivo per vivere.
          </p>

          <button className={styles.downloadBtn}>Scarica PDF ⬇</button>
        </div>

        {/* Center Column - Book Cover */}
        <div className={styles.centerColumn}>
          <div className={styles.bookCover}>
            <img src={MiddleImage} alt="La contabilità della gioia" />
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default ThreeColumnSection;
