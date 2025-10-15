import Navbar from "../components/navbar/navbar";
import styles from "../components/contact/contact.module.css";

const ContactScreen = () => {
  return (
    <div className={styles.contactWrapper}>
      <Navbar />
      <div className={styles.contactContent}>
        <section className={styles.contactSection}>
          <h1 className={styles.title}>CONTACT</h1>
          <p className={styles.subtitle}>
            Per qualsiasi informazione o comunicazione, puoi contattarci via
            email:
          </p>

          <div className={styles.emailBox}>
            <a href="mailto:info@example.com" className={styles.email}>
              info@example.com
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactScreen;
