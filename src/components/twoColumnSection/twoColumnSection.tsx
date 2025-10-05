import styles from "./twoColumnSection.module.css";
import SilviaImage from "../../assets/silvia2.png";
const TwoColumnSection = () => {
  return (
    <div className={`${styles.twoColContainer} pageContainer`}>
      <div className={styles.contentWrapper}>
        <div className={styles.imageColumn}>
          <div className={styles.imageFrame}>
            <img 
              src={SilviaImage}
              alt="Silvia" 
              className={styles.image}
            />
          </div>
        </div>

        <div className={styles.textColumn}>
          <h2 className={styles.title}>La Contabilità Della Gioia</h2>
          
          <div className={styles.textContent}>
            <p>
              Prima di fare questo passo ho pensato a lungo all'opportunità di celebrare un 
              anniversario di morte sulla rete. Buongusto? Eleganza? Privatezza del dolore? 
              La storia dei santini su FB non mi piace, non mi è mai piaciuta.
            <br />
              Vivo o morto resti lì nell'improbabile eternità dei social. Non voglio questo per mia figlia.
            <br />
              Ma ho pensato anche che uno dei doni più belli per me è ricevere un libro e 
              quindi, perché non fare un tale dono a chiunque o almeno, a coloro che potrebbero 
              essere interessati?
            <br />
              Con l'avvertenza che è un libro sulla morte, sul lutto, ma non solo, anche sulle 
              strategie del dolore e sulla possibilità di ritrovare gioia.
            <br />
              Certo i libri non insegnano nulla. Ma possono dare emozioni, possono trasmettere 
              sensazioni, possono costruire mondi. La parola è così potente.
            <br />
              E ognuno ci può girare sopra il proprio film.
            <br />
              Si è legati alle parole ma al contempo si è liberi di creare personaggi e scenografie 
              e sfondi, di sprofondare nel dolore, di incontrare la GIOIA. Insomma la lettura è libertà.
            <br />
              Alla fine ho deciso di correre il rischio di dare un'opportunità a questo libro, scritto 
              e pubblicato dieci anni fa, di incontrare nuovi lettori e di onorare in questo modo il 
              ventesimo anniversario della morte di mia figlia Silvia.
            <br />
              Quello che più mi manca di lei è il non sapere. Come sarebbe diventata.
            <br />
              Cosa avrebbe fatto della sua vita.Quali percorsi avrebbe scelto. Il suo viso.
            <br />
              Le sue mani. Il suo corpo tutto. I suoi pensieri. La sua vita
            <br />
              Con me o lontano da me.
            <br />
              Eppure io la sento perché se non è rimasta qui fattavia è in me sempre e per sempre.
            </p>
            <p className={styles.signature}>Luisa Fontana</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwoColumnSection;