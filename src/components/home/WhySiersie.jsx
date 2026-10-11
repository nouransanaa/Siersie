import { NavLink } from "react-router-dom";
import "./WhySiersie.css";

function WhySiersie() {
  return (
    <section className="why-siersie">

      {/* =========================
          EN-TÊTE
      ========================= */}

      <div className="why-header">

        <span className="why-subtitle">
          POURQUOI SIERSIE ?
        </span>

        <h2>
          Une autre façon de voyager en Tunisie
        </h2>

        <p>
          Plus qu'une plateforme, SIERSIE est une invitation à découvrir
          l'âme tunisienne à travers ses hébergements et ses destinations.
        </p>

      </div>


      {/* =========================
          CARTES
      ========================= */}

      <div className="why-cards">

        {/* =========================
            DÉCOUVRIR
        ========================= */}

        <NavLink
          to="/hebergements"
          className="why-card"
        >

          <div className="why-icon">
            ◉
          </div>

          <h3>
            Découvrir
          </h3>

          <p>
            Parcourez une sélection d'hébergements authentiques,
            choisis pour leur caractère, leur hospitalité et leur
            ancrage local.
          </p>

        </NavLink>


        {/* =========================
            EXPLORER
        ========================= */}

        <NavLink
          to="/destinations"
          className="why-card"
        >

          <div className="why-icon">
            ♧
          </div>

          <h3>
            Explorer
          </h3>

          <p>
            Explorez les plus belles destinations tunisiennes,
            des côtes méditerranéennes aux oasis du désert et
            aux médinas historiques.
          </p>

        </NavLink>


        {/* =========================
            SAUVEGARDER
        ========================= */}

        <NavLink
          to="/favoris"
          className="why-card"
        >

          <div className="why-icon">
            ♡
          </div>

          <h3>
            Sauvegarder
          </h3>

          <p>
            Conservez vos coups de cœur et retrouvez facilement
            vos hébergements favoris, où que vous soyez.
          </p>

        </NavLink>

      </div>

    </section>
  );
}

export default WhySiersie;