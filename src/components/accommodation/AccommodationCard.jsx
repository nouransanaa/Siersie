import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import "./AccommodationCard.css";


function AccommodationCard({ accommodation }) {

  const [isFavorite, setIsFavorite] = useState(false);


  // =========================
  // VÉRIFIER LE FAVORI
  // =========================

  const checkFavorite = () => {

    const favorites = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );

    setIsFavorite(
      favorites.includes(accommodation.id)
    );

  };


  // =========================
  // CHARGEMENT INITIAL
  // =========================

  useEffect(() => {

    checkFavorite();

  }, [accommodation.id]);


  // =========================
  // SYNCHRONISATION
  // =========================

  useEffect(() => {

    const handleFavoritesChange = () => {

      checkFavorite();

    };


    // Écoute les changements de favoris
    window.addEventListener(
      "favoritesChanged",
      handleFavoritesChange
    );


    return () => {

      window.removeEventListener(
        "favoritesChanged",
        handleFavoritesChange
      );

    };

  }, [accommodation.id]);


  // =========================
  // AJOUTER / SUPPRIMER
  // =========================

  const handleFavorite = (event) => {

    // Empêche le bouton de provoquer
    // une autre action
    event.stopPropagation();


    const favorites = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );


    let newFavorites;


    // =========================
    // SUPPRIMER
    // =========================

    if (favorites.includes(accommodation.id)) {

      newFavorites = favorites.filter(
        (id) => id !== accommodation.id
      );

      setIsFavorite(false);

    }

    // =========================
    // AJOUTER
    // =========================

    else {

      newFavorites = [
        ...favorites,
        accommodation.id
      ];

      setIsFavorite(true);

    }


    // Sauvegarder
    localStorage.setItem(
      "favorites",
      JSON.stringify(newFavorites)
    );


    // Prévenir les autres composants
    window.dispatchEvent(
      new Event("favoritesChanged")
    );

  };


  // =========================
  // IMAGE
  // =========================

  const image =
    accommodation.image_url ||
    accommodation.image;


  return (

    <div className="accommodation-card">


      {/* =========================
          IMAGE
      ========================= */}

      <div className="card-image">

        <img
          src={image}
          alt={accommodation.name}
        />


        {/* =========================
            TYPE
        ========================= */}

        <span className="accommodation-badge">

          {accommodation.type}

        </span>


        {/* =========================
            FAVORI
        ========================= */}

        <button
          type="button"
          className={`favorite-button ${
            isFavorite
              ? "favorite-active"
              : ""
          }`}
          onClick={handleFavorite}
          aria-label={
            isFavorite
              ? "Retirer des favoris"
              : "Ajouter aux favoris"
          }
        >

          {isFavorite ? "♥" : "♡"}

        </button>

      </div>


      {/* =========================
          CONTENU
      ========================= */}

      <div className="card-content">


        {/* =========================
            NOM + NOTE
        ========================= */}

        <div className="card-title-row">

          <h2>
            {accommodation.name}
          </h2>


          <span className="rating">

            ★ {accommodation.rating}

          </span>

        </div>


        {/* =========================
            LOCALISATION
        ========================= */}

        <p className="location">

          <span>
            ⌖
          </span>

          {accommodation.city},{" "}

          {accommodation.region}

        </p>


        {/* =========================
            DESCRIPTION
        ========================= */}

        <p className="description">

          {accommodation.short_description ||
            accommodation.description}

        </p>


        {/* =========================
            FOOTER
        ========================= */}

        <div className="card-footer">


          {/* PRIX */}

          <p className="price">

            à partir de{" "}

            <strong>

              {accommodation.price_from ||
                accommodation.price}{" "}

              TND

            </strong>

            {" "}/ nuit

          </p>


          {/* DÉTAILS */}

          <NavLink
            to={`/hebergements/${accommodation.id}`}
            className="details-link"
          >

            Voir les détails

          </NavLink>


        </div>

      </div>

    </div>

  );
}


export default AccommodationCard;