import { Building2, ChevronDown, MapPin, Search } from "lucide-react";
import Navbar from "../components/layout/Navbar";
import DestinationPreview from "../components/home/DestinationPreview";
import WhySiersie from "../components/home/WhySiersie";

import "./Home.css";

function Home() {
  return (
    <div className="home">

      <Navbar />

      <main className="hero">

        <div className="hero-image"></div>

        <div className="hero-overlay"></div>

        <div className="hero-content container">

          <div className="hero-badge">
            <span className="hero-badge-icon">◉</span>
            SIERSIE · TUNISIE
          </div>

          <h1 className="hero-title">
            Découvrez la
            <br />
            Tunisie autrement
          </h1>

          <p className="hero-description">
            Trouvez des hébergements authentiques et explorez les plus belles
            destinations tunisiennes.
          </p>

          <div className="hero-search">

            <div className="search-field destination-field">

              <label>DESTINATION / VILLE</label>

              <div className="search-input">
                <MapPin size={21} strokeWidth={1.8} />

                <input
                  type="text"
                  placeholder="Ex : Djerba, Tozeur, Tunis..."
                />
              </div>

            </div>

            <div className="search-field type-field">

              <label>TYPE D'HÉBERGEMENT</label>

              <div className="search-input select-input">
                <Building2 size={21} strokeWidth={1.8} />

                <select defaultValue="">
                  <option value="">Tous les types</option>
                  <option value="Auberge">Auberge</option>
                  <option value="Gîte">Gîte</option>
                  <option value="Maison d'hôtes">Maison d'hôtes</option>
                  <option value="Riad">Riad</option>
                  <option value="Dar">Dar</option>
                  <option value="Villa">Villa</option>
                  <option value="Hôtel">Hôtel</option>
                </select>

                <ChevronDown
                  className="select-arrow"
                  size={19}
                  strokeWidth={1.7}
                />
              </div>

            </div>

            <button
              type="button"
              className="search-button"
            >
              <Search size={21} strokeWidth={2} />
              <span>Rechercher</span>
            </button>

          </div>

        </div>

      </main>

      <DestinationPreview />

      <WhySiersie />

    </div>
  );
}

export default Home;