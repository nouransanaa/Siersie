import { useState } from "react";

import AccommodationCard from "../components/accommodation/AccommodationCard";
import AccommodationFilters from "../components/accommodation/AccommodationFilters";
import NavBar from "../components/layout/NavBar";

import accommodations from "../data/accommodations";

import "./Hebergements.css";

function Hebergements() {

  // Recherche
  const [search, setSearch] = useState("");

  // Filtres
  const [region, setRegion] = useState("");
  const [city, setCity] = useState("");
  const [type, setType] = useState("");

  // Tri
  const [sort, setSort] = useState("recommended");

  // Filtrer les logements
  let filteredAccommodations = accommodations.filter(
    (accommodation) => {

      const searchText = search.toLowerCase();

      const matchesSearch =
        accommodation.name
          .toLowerCase()
          .includes(searchText) ||

        accommodation.city
          .toLowerCase()
          .includes(searchText) ||

        accommodation.region
          .toLowerCase()
          .includes(searchText);

      const matchesRegion =
        region === "" ||
        accommodation.region === region;

      const matchesCity =
        city === "" ||
        accommodation.city === city;

      const matchesType =
        type === "" ||
        accommodation.type === type;

      return (

        matchesSearch &&
        matchesRegion &&
        matchesCity &&
        matchesType
      );
    }
  );

  // Trier les résultats
  if (sort === "name") {
    filteredAccommodations.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  }

  if (sort === "rating") {
    filteredAccommodations.sort(
      (a, b) => b.rating - a.rating
    );
  }

  if (sort === "price-asc") {
    filteredAccommodations.sort(
      (a, b) => a.price - b.price
    );
  }

  if (sort === "price-desc") {
    filteredAccommodations.sort(
      (a, b) => b.price - a.price
    );
  }

  // Réinitialiser les filtres
  const resetFilters = () => {
    setSearch("");
    setRegion("");
    setCity("");
    setType("");
    setSort("recommended");
  };

  return (
  <>
    <NavBar />

    <div className="hebergements-page">

      {/* HERO */}
      <section className="hebergements-hero">

        <div className="hero-content">

          <p className="hero-subtitle">
            HÉBERGEMENTS
          </p>

          <h1>
            Découvrez nos hébergements
          </h1>

          <p className="hero-description">
            Maisons d'hôtes, riads, dar et villas
            authentiques à travers toute la Tunisie.
          </p>

          {/* Recherche */}
          <div className="search-box">

            <div className="search-input-container">

              <span className="search-icon">
                ⌕
              </span>

              <input
                type="text"
                placeholder="Rechercher par nom, ville ou région..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

            </div>

            <button className="search-button">
              Rechercher
            </button>

          </div>

        </div>

      </section>


      {/* CONTENU */}
      <section className="accommodations-section">

        <div className="accommodations-layout">

          <AccommodationFilters
            region={region}
            setRegion={setRegion}
            city={city}
            setCity={setCity}
            type={type}
            setType={setType}
            resetFilters={resetFilters}
          />

          <div className="results-container">

            <div className="results-header">

              <p>
                <strong>
                  {filteredAccommodations.length}
                </strong>{" "}
                résultats
              </p>

              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="sort-select"
              >
                <option value="recommended">
                  Recommandé
                </option>

                <option value="rating">
                  Meilleure note
                </option>

                <option value="price-asc">
                  Prix croissant
                </option>

                <option value="price-desc">
                  Prix décroissant
                </option>
              </select>

            </div>


            {filteredAccommodations.length > 0 ? (

              <div className="accommodations-grid">

                {filteredAccommodations.map(
                  (accommodation) => (
                    <AccommodationCard
                      key={accommodation.id}
                      accommodation={accommodation}
                    />
                  )
                )}

              </div>

            ) : (

              <div className="no-results">

                <h2>
                  Aucun hébergement trouvé
                </h2>

                <p>
                  Aucun hébergement ne correspond
                  à votre recherche.
                </p>

                <button onClick={resetFilters}>
                  Réinitialiser les filtres
                </button>

              </div>

            )}

          </div>

        </div>

      </section>

    </div>
  </>
);
}

export default Hebergements;