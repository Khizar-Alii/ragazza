import Navbar from "../components/navbar/navbar";
import styles from "../components/about/about.module.css";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const AboutScreen = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 250);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className={styles.aboutWrapper}>
        <Navbar />
        <div className={styles.aboutContent}>
          <section className={styles.aboutSection}>
            <h1 className={styles.title}>Chi Siamo</h1>
            <div className={styles.content}>
              <p>
                Questa pagina nasce da desideri congiunti, di madre, di padre,
                di sorella, di ricordare come ogni anno -ma in modo speciale- il
                20esimo anniversario della morte di Silvia, nostra figlia e
                sorella.
              </p>
              <p>
                Una morte improvvisa e sconvolgente nella notte del 22 ottobre
                2005. E' passato molto tempo ma noi siamo “quelli che restano
                per sempre senza te”. Il proposito in seguito è quello di
                restare in silenzio.
              </p>
              <p>
                Quindi pensavamo a qualcosa di prezioso per noi e per lei. Va
                detto che non essendo noi abbastanza bravi e competenti per
                realizzare il progetto di creare una pagina web per far dono di
                un libro, abbiamo chiesto alla nostra amica giornalista{" "}
                <strong>BEATRICE ANDREOSE</strong> di trovare chi potesse
                collaborare.
              </p>
              <p>
                Dopo alcuni tentativi andati a vuoto si è reso disponibile{" "}
                <strong>JACOPO AGOSTINI</strong> che si è fatto carico del
                lavoro. Ma Jacopo è un grande viaggiatore. Tornava dall'India e
                partiva per la Cina. Già questo lavorare a grande distanza mi
                agitava non poco e poi Jacopo ha avuto a sua volta bisogno di un
                collaboratore. L'ha trovato in un suo amico pakistano.
              </p>
              <p>
                (Ci sarebbe materiale per una bella storia, immagino da
                scrittrice nei ritagli di tempo). Questa triangolazione
                Italia-Cina-Pakistan mi ha preoccupata non poco ma, con il
                risultato che ha prodotto, mi ha resa soprattutto felicemente
                consapevole della potenza della comunicazione tecnologica.
              </p>
              <p>
                Infine mi sono rasserenata, soprattutto per i “dai che ci
                siamo!” di Jacopo, e personalmente trovo il risultato non
                semplicemente adeguato ai nostri desideri e aspettative, ma
                bellissimo.
              </p>
              <p>
                Quindi la nostra riconoscenza va a Beatrice, a Jacopo e allo
                sconosciuto pakistano che tanta pazienza hanno avuto con le mie
                richieste, le mie osservazioni, le mie inquietudini. Hanno
                capito lo stress emotivo e la tensione che mi provocavano il
                lavoro e la situazione.
              </p>
              <p>
                Dunque grazie per aver realizzato quello che noi non avremmo
                potuto fare da soli.
              </p>
              <div className={styles.signature}>
                <p>Grazie Beatrice.</p>
                <p>Grazie Jacopo.</p>
                <p>
                  Grazie pakistano sconosciuto (di cui spero prima o poi di
                  conoscere il nome).
                </p>
                <p className={styles.names}>
                  Luisa &nbsp; Maurizio &nbsp; Ippolita
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
      {/* Scroll To Top Button */}
      {showScroll && (
        <button
          className={`scrollToTopBtn ${showScroll ? "show" : ""}`}
          onClick={scrollToTop}
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
};

export default AboutScreen;
