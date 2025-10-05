import { useState } from "react";
import styles from "./navbar.module.css";
import { FaFacebook } from "react-icons/fa6";
import { FaBehanceSquare, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav className={styles.navbar}>
        <div className="pageContainer">
          <div className={`${styles.container}`}>
            <Link to="/" className={styles.logo}>
              <span className={styles.logoName}>Luisa</span>
              <span className={styles.logoSurname}>Fontana</span>
            </Link>

            <div className={styles.rightSection}>
              <ul className={styles.navLinks}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">About</Link></li>
                <li><Link to="/">Contact Us</Link></li>
              </ul>
              <span style={{ color: "white" }}>|</span>
              <div className={styles.socialIcons}>
                <Link to="#facebook" className={styles.socialIcon}>
                  <FaFacebook size={24} color="white" />
                </Link>
                <Link to="#youtube" className={styles.socialIcon}>
                  <FaYoutube size={24} color="white" />
                </Link>
                <Link to="#behance" className={styles.socialIcon}>
                  <FaBehanceSquare size={24} color="white" />
                </Link>
              </div>
              <span style={{ color: "white" }}>|</span>
            </div>

            <button
              className={styles.menuToggle}
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
        <div
          className={`${styles.overlay} ${isOpen ? styles.open : ""}`}
          onClick={closeMenu}
        >
        </div>

        <div className={`${styles.mobileMenu} ${isOpen ? styles.open : ""}`}>
          <ul className={styles.mobileNavLinks}>
            <li>
              <Link to="/" onClick={closeMenu}>Home</Link>
            </li>
            <li>
              <Link to="/" onClick={closeMenu}>About</Link>
            </li>
            <li>
              <Link to="/" onClick={closeMenu}>Contact Us</Link>
            </li>
          </ul>

          <div className={styles.mobileSocialIcons}>
            <Link to="#facebook" className={styles.socialIcon}>
              <FaFacebook size={24} color="white" />
            </Link>
            <Link to="#youtube" className={styles.socialIcon}>
              <FaYoutube size={24} color="white" />
            </Link>
            <Link to="#behance" className={styles.socialIcon}>
              <FaBehanceSquare size={24} color="white" />
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
