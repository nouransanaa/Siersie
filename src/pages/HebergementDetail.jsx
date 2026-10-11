import { useState } from "react";
import { useParams, NavLink } from "react-router-dom";

import accommodations from "../data/accommodations";

import NavBar from "../components/layout/NavBar";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup
} from "react-leaflet";

import "leaflet/dist/leaflet.css";

import "./HebergementDetail.css";


function HebergementDetail() {

  // =========================
  // RÉCUPÉRER L'ID
  // =========================

  const { id } = useParams();


  // =========================
  // PHOTO ACTUELLE
  // =========================

  const [currentImage, setCurrentImage] = useState(0);


  // =========================
  // TROUVER LE LOGEMENT
  // =========================

  const accommodation = accommodations.find(
    (item) => item.id === Number(id)
  );


  // =========================
  // LOGEMENT INTROUVABLE
  // =========================

  if (!accommodation) {

    return (
      <>
        <NavBar />

        <div className="not-found">

          <h1>
            Hébergement introuvable
          </h1>

          <p>
            Cet hébergement n'existe pas.
          </p>

          <NavLink to="/hebergements">
            Retour aux hébergements
          </NavLink>

        </div>
      </>
    );
  }


  // =========================
  // GALERIE
  // =========================

  const gallery =
    accommodation.gallery &&
    accommodation.gallery.length > 0
      ? accommodation.gallery
      : [accommodation.image];


  // =========================
  // PHOTO SUIVANTE
  // =========================

  const nextImage = () => {

    setCurrentImage(
      (currentImage + 1) % gallery.length
    );

  };


  // =========================
  // PHOTO PRÉCÉDENTE
  // =========================

  const previousImage = () => {

    setCurrentImage(
      (currentImage - 1 + gallery.length) %
        gallery.length
    );

  };


  return (
    <>
      <NavBar />


      <main className="detail-page">


        {/* =========================
            FIL D'ARIANE
        ========================= */}

        <div className="breadcrumb">

          <NavLink to="/">
            Accueil
          </NavLink>

          <span>/</span>

          <NavLink to="/hebergements">
            Hébergements
          </NavLink>

          <span>/</span>

          <span>
            {accommodation.name}
          </span>

        </div>


        {/* =========================
            GALERIE
        ========================= */}

        <section className="detail-gallery">


          {/* IMAGE PRINCIPALE */}

          <div className="main-image-container">

            <img
              src={gallery[currentImage]}
              alt={accommodation.name}
              className="main-image"
            />


            {/* COMPTEUR */}

            <div className="image-counter">

              {currentImage + 1} / {gallery.length}

            </div>


            {/* FLÈCHE GAUCHE */}

            {gallery.length > 1 && (

              <button
                type="button"
                className="gallery-arrow left"
                onClick={previousImage}
                aria-label="Photo précédente"
              >
                ‹
              </button>

            )}


            {/* FLÈCHE DROITE */}

            {gallery.length > 1 && (

              <button
                type="button"
                className="gallery-arrow right"
                onClick={nextImage}
                aria-label="Photo suivante"
              >
                ›
              </button>

            )}

          </div>


          {/* MINIATURES */}

          {gallery.length > 1 && (

            <div className="thumbnails">

              {gallery.map((image, index) => (

                <button
                  type="button"
                  key={index}
                  className={`thumbnail ${
                    currentImage === index
                      ? "thumbnail-active"
                      : ""
                  }`}
                  onClick={() =>
                    setCurrentImage(index)
                  }
                >

                  <img
                    src={image}
                    alt={`${accommodation.name} - photo ${index + 1}`}
                  />

                </button>

              ))}

            </div>

          )}

        </section>



        {/* =========================
            INFORMATIONS
        ========================= */}

        <section className="detail-content">


          {/* =========================
              CONTENU PRINCIPAL
          ========================= */}

          <div className="detail-main">


            {/* TYPE */}

            <span className="detail-badge">

              {accommodation.type}

            </span>


            {/* NOM */}

            <h1>

              {accommodation.name}

            </h1>


            {/* NOTE */}

            <div className="detail-rating">

              <span className="stars">
                ★
              </span>

              <strong>
                {accommodation.rating}
              </strong>

              <span>
                ({accommodation.reviews || 0} avis)
              </span>

            </div>


            {/* LOCALISATION */}

            <p className="detail-location">

              📍 {accommodation.city},{" "}
              {accommodation.region}

            </p>


            {/* =========================
                DESCRIPTION
            ========================= */}

            <div className="detail-description">

              <h2>
                À propos de cet hébergement
              </h2>

              <p>
                {accommodation.description}
              </p>

            </div>


            {/* =========================
                ÉQUIPEMENTS
            ========================= */}

            <div className="amenities-section">

              <h2>
                Équipements
              </h2>


              <div className="amenities-list">

                {(accommodation.amenities || []).map(
                  (amenity, index) => (

                    <div
                      className="amenity"
                      key={index}
                    >

                      <span>
                        ✓
                      </span>

                      {amenity}

                    </div>

                  )
                )}

              </div>

            </div>


            {/* =========================
                INFORMATIONS PRATIQUES
            ========================= */}

            <div className="practical-info">

              <h2>
                Informations pratiques
              </h2>


              <div className="info-grid">


                {/* ADRESSE */}

                <div className="info-card">

                  <span>
                    Adresse
                  </span>

                  <strong>
                    {accommodation.address}
                  </strong>

                </div>


                {/* VILLE */}

                <div className="info-card">

                  <span>
                    Ville
                  </span>

                  <strong>
                    {accommodation.city}
                  </strong>

                </div>


                {/* RÉGION */}

                <div className="info-card">

                  <span>
                    Région
                  </span>

                  <strong>
                    {accommodation.region}
                  </strong>

                </div>


                {/* TYPE */}

                <div className="info-card">

                  <span>
                    Type
                  </span>

                  <strong>
                    {accommodation.type}
                  </strong>

                </div>


              </div>

            </div>


          </div>


          {/* =========================
              PRIX
          ========================= */}

          <aside className="booking-card">

            <p>
              À partir de
            </p>

            <h2>
              {accommodation.price} TND
            </h2>

            <span>
              / nuit
            </span>

            <button type="button">
              Contacter
            </button>

          </aside> 


        </section>



        {/* =========================
            CARTE
        ========================= */}

        <section className="location-section">


          <h2>
            Localisation
          </h2>


          <p className="location-description">

            Découvrez l'emplacement de{" "}
            <strong>
              {accommodation.name}
            </strong>
            .

          </p>


          <div className="map-container">

            <MapContainer
              center={[
                accommodation.latitude,
                accommodation.longitude
              ]}
              zoom={15}
              scrollWheelZoom={false}
              className="map"
            >


              {/* FOND DE CARTE */}

              <TileLayer
                attribution='&copy; OpenStreetMap contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />


              {/* MARQUEUR */}

              <Marker
                position={[
                  accommodation.latitude,
                  accommodation.longitude
                ]}
              >

                <Popup>

                  <strong>
                    {accommodation.name}
                  </strong>

                  <br />

                  {accommodation.city},{" "}
                  {accommodation.region}

                </Popup>

              </Marker>


            </MapContainer>

          </div>


        </section>


      </main>

    </>
  );
}


export default HebergementDetail;