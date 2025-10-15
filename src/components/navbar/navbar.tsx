import { useState } from "react";
import styles from "./navbar.module.css";
import { FaFacebook } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav className={styles.navbar}>
        <div className="pageContainer">
          <div className={styles.container}>
            <NavLink to="/" className={styles.logo}>
              <span className={styles.logoName}>Luisa</span>
              <span className={styles.logoSurname}>Fontana</span>
            </NavLink>

            <div className={styles.rightSection}>
              <ul className={styles.navLinks}>
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `${styles.link} ${isActive ? styles.active : ""}`
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      `${styles.link} ${isActive ? styles.active : ""}`
                    }
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      `${styles.link} ${isActive ? styles.active : ""}`
                    }
                  >
                    Contact Us
                  </NavLink>
                </li>
              </ul>
              <span style={{ color: "white" }}>|</span>
              <div className={styles.socialIcons}>
                <NavLink
                  target="_blank"
                  to="https://www.facebook.com/share/1aFHgfWSQt/"
                  className={styles.socialIcon}
                >
                  <FaFacebook size={24} color="white" />
                </NavLink>
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
        ></div>

        <div className={`${styles.mobileMenu} ${isOpen ? styles.open : ""}`}>
          <ul className={styles.mobileNavLinks}>
            <li>
              <NavLink to="/" onClick={closeMenu}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={closeMenu}>About</NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={closeMenu}>Contact Us</NavLink>
            </li>
          </ul>

          <div className={styles.mobileSocialIcons}>
            <NavLink
              target="_blank"
              to="https://www.facebook.com/share/1aFHgfWSQt/"
              className={styles.socialIcon}
            >
              <FaFacebook size={24} color="white" />
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
