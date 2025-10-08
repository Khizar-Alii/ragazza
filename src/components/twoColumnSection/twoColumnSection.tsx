import styles from "./twoColumnSection.module.css";

const TwoColumnSection = () => {
  return (
    <div className={`${styles.twoColContainer} pageContainer`}>
      <div className={styles.contentWrapper}>
        <div className={styles.textColumn}>
          <h2 className={styles.title}>
            La storia di una madre e di una donna provata dal destino, il
            difficile percorso verso un nuovo inizio.
          </h2>

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
              scarnificazione del monologo interiore al limite del libero
              flusso di coscienza, fino al dialogo spontaneo che rende
              sopportabile una conversazione drammatica e impossibile.
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
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwoColumnSection;
