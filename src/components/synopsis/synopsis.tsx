import styles from "./synopsis.module.css";
import SynopsisImage from "../../assets/bookCover.png";
const Synopsis = () => {
  return (
    <section className={`${styles.synopsisContainer}`}>
      <div className={`${styles.synopsisWrapper} pageContainer`}>
        <div className={styles.textColumn}>
          <h2 className={styles.title}>
            La storia di una madre e di una donna provata dal destino, il
            difficile percorso verso un nuovo inizio.
          </h2>
          <h3 className={styles.subtitle}>Sinossi</h3>
          <div className={styles.textContent}>
            <p>
              Un testo rigidamente strutturato: suddiviso in sei parti, sei
              quadri di vita e di morte, ognuno dei quali è introdotto scandito
              e concluso da componimenti poetici. Poesie scritte nel corso degli
              anni, in vita e in morte delle figlie.
              <br />
              Uno stile linguistico che cambia, si modula ad ogni passaggio: da
              una prosa sciolta, che corre lungo il binario dei pensieri,
              facendosi lirica e allo stesso tempo aspramente realistica, alla
              scarnificazione del monologo interiore al limite del libero flusso
              di coscienza, fino al dialogo spontaneo che rende sopportabile una
              conversazione drammatica e impossibile.
              <br />
              I sei quadri contengono la sofferenza straziante di una donna e di
              una madre a cui la vita ha riservato la prova più dolorosa: la
              perdita di una figlia. Questo il tema che il libro affronta con
              sorprendente coraggio e vivido realismo, immergendosi senza
              anestetici nel vortice di domande e di disperazione della
              protagonista, privata del suo mondo affettivo e della percezione
              di sé.
              <br />
              <strong>Uno stile linguistico che cambia</strong> Si modula ad
              ogni passaggio: da una prosa sciolta, che corre lungo il binario
              dei pensieri, facendosi lirica e allo stesso tempo aspramente
              realistica, alla scarnificazione del monologo interiore — al
              limite del libero flusso di coscienza — fino al dialogo spontaneo
              che rende sopportabile una conversazione drammatica e impossibile.
              <br />
              <strong>I sei quadri </strong> Contengono la sofferenza straziante
              di una donna e di una madre a cui la vita ha riservato la prova
              più dolorosa: la perdita di una figlia. Questo è il tema che il
              libro affronta con sorprendente coraggio e vivido realismo,
              immergendosi senza anestetici nel vortice di domande e di
              disperazione della protagonista, privata del suo mondo affettivo e
              della percezione di sé.
              <br />
              <strong>La sua identità</strong>, ormai a brandelli, la lascia galleggiare nel
              vuoto privo di gravità in cui il solo concetto di vita diventa
              insopportabile, un buio fatto di porte chiuse, di sensi di colpa e
              di nostalgia, in cui rischia di perdere di vista il senso
              dell’esistere con esiti tragici. Sarà un nuovo dolore, un’inattesa
              consapevolezza a risvegliarla dal torpore, e un compito a
              richiamarla alla vita e alla gioia. Tra suggestioni poetiche e
              importanti riflessioni sulla genitorialità e sulle dinamiche
              familiari, Luisa Fontana ci offre un romanzo elegante e prezioso.
            </p>
          </div>
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
