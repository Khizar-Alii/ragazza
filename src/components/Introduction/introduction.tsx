import styles from "./introduction.module.css";
import IntroImage from "../../assets/silvia.png";

const Introduction = () => {
  return (
    <div
      className={`${styles.introContainer} pageContainer`}
      style={{ backgroundImage: `url(${IntroImage})` }}
    >
      <div className={styles.overlay}></div>

      <div className={styles.textWrapper}>
        <div className={styles.header}>
          <h2 className={styles.name}>SILVIA</h2>
          <p className={styles.years}>1984-2005</p>
        </div>

        <div className={styles.textContent}>
          <p>
            Prima di fare questo passo ho pensato a lungo all'opportunità di
            celebrare un anniversario di morte sulla rete. Buongusto? Eleganza?
            Privatezza del dolore? La storia dei santini su FB non mi piace, non
            mi è mai piaciuta. Vivo o morto resti lì nell'improbabile eternità
            dei sociali. Non voglio questo per mia figlia.
          </p>
          <p>
            Ma ho pensato anche che uno dei doni più belli per me è ricevere un
            libro e quindi, perché non fare un tale dono a chiunque o, almeno, a
            coloro che potrebbero essere interessati? Con l'avvertenza che è un
            libro sulla morte, sul lutto, ma non solo, anche sulle strategie del
            dolore e sulla possibilità di ritrovare gioia.
          </p>
          <p>
            Certo i libri non insegnano nulla. Ma possono dare emozioni, possono
            trasmettere sensazioni, possono costruire mondi. La parola è così
            potente. E ognuno ci può girare sopra il proprio film. Si è legati
            alle parole ma al contempo si è liberi di creare personaggi e
            scenografie e sfondi, di sprofondare nel dolore, di incontrare la
            GIOIA. Insomma la lettura è libertà.
          </p>
          <p>
            Alla fine ho deciso di correre il rischio di dare un'opportunità a
            questo libro, scritto e pubblicato dieci anni fa, di incontrare
            nuovi lettori e di onorare in questo modo il ventesimo anniversario
            della morte di mia figlia Silvia.
          </p>
          <p>
            Quello che più mi manca di lei è il non sapere. Come sarebbe
            diventata. Cosa avrebbe fatto della sua vita. Quali percorsi avrebbe
            scelto. Il suo viso. Le sue mani. Il suo corpo tutto. I suoi
            pensieri. La sua vita. Con me o lontano da me. Eppure io la sento
            perché se non è rimasta qui tuttavia è in me sempre e per sempre.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
