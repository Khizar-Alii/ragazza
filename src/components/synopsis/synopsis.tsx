import styles from "./synopsis.module.css";
import SynopsisImage from "../../assets/bookCover.png";
const Synopsis = () => {
  return ( 
    <section className={`${styles.synopsisContainer}`}>
      <div className={`${styles.synopsisWrapper} pageContainer`}>
        <div className={styles.textColumn}>
          <h2 className={styles.title}>Synopsis</h2>
          <p>
            Se n'è andata in fretta, così come viveva di corsa con la paura di
            perdersi qualcosa, senza disturbare nessuno. La vita non le è stata
            facile ma ha avuto l'amore, la certezza di essere amata, anche
            l'amore speciale di un ragazzo. Ma soprattutto lasciava il segno
            dove passava, una specie di scia che resta. Con i capelli rosa i
            rasta i piercing la chiamavano Pinki e la sua provocazione era dolce
            ma decisa. Sarà per sempre bella e incerta della sua bellezza. Sarà
            per sempre saggia come coloro che ricercano continuamente senza
            certezze. Sarà per sempre coraggiosa come il Don Chisciotte che
            tanto amava e tanto aveva studiato. Sarà per sempre trasparente e
            impetuosa nel suo desiderio di chiarezza. Grazie a lei ho scoperto
            che non siamo noi genitori ad accompagnare i nostri figli ma sono
            loro i nostri figli ad accompagnarci nella vita offrendoci ogni
            giorno una coerenza che non scende a compromessi una sorpresa per
            essere meravigliati una curiosità per conoscere un buon motivo per
            vivere.
          </p>
          <p>
            La sua identità, ormai a brandelli, la lascia galleggiare nel vuoto
            privo di gravità in cui il solo concetto di vita diventa
            insopportabile, un buio fatto di porte chiuse, di sensi di colpa e
            di nostalgia, in cui rischia di perdere di vista il senso
            dell’esistere con esiti tragici. Sarà un nuovo dolore, un’inattesa
            consapevolezza a risvegliarla dal torpore, e un compito a
            richiamarla alla vita e alla gioia. Tra suggestioni poetiche e
            importanti riflessioni sulla genitorialità e sulle dinamiche
            familiari, Luisa Fontana ci offre un romanzo elegante e prezioso.
          </p>
        </div>

        {/* Right Column - Image */}
        <div className={styles.imageColumn}>
          <div className={styles.imageWrapper}>
            <img src={SynopsisImage} alt="Synopsis" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Synopsis;
