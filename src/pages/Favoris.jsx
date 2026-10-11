import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import accommodations from "../data/accommodations";
import AccommodationCard from "../components/accommodation/AccommodationCard";

import NavBar from "../components/layout/NavBar";

import "./Favoris.css";


function Favoris() {

  const [favorites, setFavorites] = useState([]);


  // =========================
  // CHARGER LES FAVORIS
  // =========================

  const loadFavorites = () => {

    const savedFavorites = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );

    const favoriteAccommodations =
      accommodations.filter((accommodation) =>
        savedFavorites.includes(accommodation.id)
      );

    setFavorites(favoriteAccommodations);
  };


  // =========================
  // CHARGEMENT INITIAL
  // =========================

  useEffect(() => {

    loadFavorites();

  }, []);


  // =========================
  // SYNCHRONISATION
  // =========================

  useEffect(() => {

    const handleFavoritesChange = () => {
      loadFavorites();
    };


    // Quand localStorage change
    window.addEventListener(
      "storage",
      handleFavoritesChange
    );


    // Quand on modifie les favoris
    // dans la même page
    window.addEventListener(
      "favoritesChanged",
      handleFavoritesChange
    );


    return () => {

      window.removeEventListener(
        "storage",
        handleFavoritesChange
      );

      window.removeEventListener(
        "favoritesChanged",
        handleFavoritesChange
      );

    };

  }, []);


  return (

    <>

      <NavBar />


      <main className="favorites-page">


        {/* =========================
            HEADER
        ========================= */}

        <section className="favorites-header">

          <span className="favorites-subtitle">
            VOS COUPS DE CŒUR
          </span>


          <h1>
            Mes hébergements favoris
          </h1>


          <p>
            Retrouvez ici les hébergements que vous
            avez sauvegardés pour votre prochain voyage.
          </p>


          {/* COMPTEUR */}

          <div className="favorites-count">

            {favorites.length}{" "}

            {favorites.length <= 1
              ? "hébergement sauvegardé"
              : "hébergements sauvegardés"}

          </div>

        </section>



        {/* =========================
            CONTENU
        ========================= */}

        <section className="favorites-content">


          {/* =========================
              FAVORIS
          ========================= */}

          {favorites.length > 0 ? (

            <div className="favorites-grid">

              {favorites.map((accommodation) => (

                <div
                  className="favorite-item"
                  key={accommodation.id}
                >

                  <AccommodationCard
                    accommodation={accommodation}
                  />

                </div>

              ))}

            </div>

          ) : (

            /* =========================
               ÉTAT VIDE
            ========================= */

            <div className="favorites-empty">


              <div className="empty-heart">
                ♡
              </div>


              <h2>
                Vous n'avez pas encore de favoris
              </h2>


              <p>
                Ajoutez des hébergements pour les
                retrouver facilement.
              </p>


              <NavLink
                to="/hebergements"
                className="discover-button"
              >

                Découvrir des hébergements

                <span>
                  →
                </span>

              </NavLink>


            </div>

          )}

        </section>


      </main>

    </>

  );
}


export default Favoris;