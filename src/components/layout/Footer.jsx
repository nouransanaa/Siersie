import { NavLink } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="site-footer">

      {/* =========================
          PARTIE PRINCIPALE
      ========================= */}

      <div className="footer-container">

        {/* =========================
            COLONNE MARQUE
        ========================= */}

        <div className="footer-brand">

          <NavLink to="/" className="footer-logo">
            <span>SIER</span><span>SIE</span>
          </NavLink>

          <p className="footer-description">
            Un pont entre les voyageurs et l'authenticité tunisienne.
            Découvrez des hébergements authentiques et explorez les plus
            belles destinations de Tunisie.
          </p>

          {/* Réseaux sociaux */}

          <div className="footer-socials">

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Instagram"
            >
              ◎
            </a>

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Facebook"
            >
              f
            </a>

          </div>

        </div>


        {/* =========================
            NAVIGATION
        ========================= */}

        <div className="footer-column">

          <h3>
            Navigation
          </h3>

          <ul>

            <li>
              <NavLink to="/">
                Accueil
              </NavLink>
            </li>

            <li>
              <NavLink to="/hebergements">
                Hébergements
              </NavLink>
            </li>

            <li>
              <NavLink to="/destinations">
                Destinations
              </NavLink>
            </li>

            <li>
              <NavLink to="/favoris">
                Favoris
              </NavLink>
            </li>

          </ul>

        </div>


        {/* =========================
            DESTINATIONS
        ========================= */}

        <div className="footer-column">

          <h3>
            Destinations
          </h3>

          <ul>

            <li>
              <NavLink to="/hebergements?city=Bizerte">
                Bizerte
              </NavLink>
            </li>

            <li>
              <NavLink to="/hebergements?city=Tabarka">
                Tabarka
              </NavLink>
            </li>

            <li>
              <NavLink to="/hebergements?city=Nabeul">
                Nabeul
              </NavLink>
            </li>

            <li>
              <NavLink to="/hebergements?city=Hammamet">
                Hammamet
              </NavLink>
            </li>

            <li>
              <NavLink to="/hebergements?city=Djerba">
                Djerba
              </NavLink>
            </li>

            <li>
              <NavLink to="/hebergements?city=Tozeur">
                Tozeur
              </NavLink>
            </li>

          </ul>

        </div>


        {/* =========================
            CONTACT
        ========================= */}

        <div className="footer-column footer-contact">

          <h3>
            Contact
          </h3>

          <div className="contact-item">

            <span className="contact-icon">
              📍
            </span>

            <span>
              Tunis, Tunisie
            </span>

          </div>


          <div className="contact-item">

            <span className="contact-icon">
              ✉
            </span>

            <a href="mailto:contact@siersie.tn">
              contact@siersie.tn
            </a>

          </div>


          <div className="contact-item">

            <span className="contact-icon">
              ☎
            </span>

            <a href="tel:+21671000000">
              +216 71 000 000
            </a>

          </div>

        </div>

      </div>


      {/* =========================
          BARRE INFÉRIEURE
      ========================= */}

      <div className="footer-bottom">

        <div className="footer-bottom-left">

          <span className="compass">
            ◉
          </span>

          <span>
            © 2026 SIERSIE. Tous droits réservés.
          </span>

        </div>

        <p>
          Conçu avec passion pour la Tunisie authentique.
        </p>

      </div>

    </footer>
  );
}

export default Footer;