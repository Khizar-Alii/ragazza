import styles from "./Incipit.module.css";
const Incipit = () => {
  const handleDownload = () => {
    const pdfUrl =
      "https://drive.google.com/file/d/1iOYkoMQnAidDCreLFraDPPKMRa066u1W/view?usp=sharing";
    window.open(pdfUrl, "_blank");
  };

  return (
    <section className={styles.incipitSection}>
      <div className={styles.textContainer}>
        <p>
          Se n'è andata in fretta, così come viveva di corsa con la paura di
          perdersi qualcosa, senza disturbare nessuno. La vita non le è stata
          facile ma ha avuto l'amore, la certezza di essere amata, anche l'amore
          speciale di un ragazzo. Ma soprattutto lasciava il segno dove passava,
          una specie di scia che resta. Con i capelli rosa, i rasta, i piercing
          la chiamavano Pinki e la sua provocazione era dolce ma decisa. Sarà
          per sempre bella e incerta della sua bellezza. Sarà per sempre saggia
          come coloro che ricercano continuamente senza certezze. Sarà per
          sempre coraggiosa come il Don Chisciotte che tanto amava e tanto aveva
          studiato. Sarà per sempre trasparente e impetuosa nel suo desiderio di
          chiarezza. Grazie a lei ho scoperto che non siamo noi genitori ad
          accompagnare i nostri figli ma sono loro i nostri figli ad
          accompagnarci nella vita offrendoci ogni giorno una coerenza che non
          scende a compromessi, una sorpresa per essere meravigliati, una
          curiosità per conoscere, un buon motivo per vivere.
        </p>
      </div>

      <div className={styles.buttonWrapper}>
        <button onClick={handleDownload} className={styles.downloadButton}>
          Scarica il libro (PDF)
        </button>
      </div>
    </section>
  );
};

export default Incipit;
