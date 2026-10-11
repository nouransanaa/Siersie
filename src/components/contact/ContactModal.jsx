import { useMemo, useState } from "react";

import "./ContactModal.css";

const roomOptions = [
  {
    label: "Chambre avec vue sur jardin",
    supplement: 45,
  },
  {
    label: "Chambre avec vue sur mer",
    supplement: 95,
  },
  {
    label: "Chambre standard",
    supplement: 0,
  },
];

const mealOptions = [
  {
    label: "Chambre seule",
    supplement: 0,
  },
  {
    label: "Petit-déjeuner inclus",
    supplement: 25,
  },
  {
    label: "Demi-pension (petit-déjeuner + déjeuner ou dîner)",
    supplement: 65,
  },
  {
    label: "Pension complète (petit-déjeuner + déjeuner + dîner)",
    supplement: 110,
  },
];

const initialForm = {
  fullName: "",
  email: "",
  phone: "",
  days: "",
  people: "",
  message: "",
};

function ContactModal({ isOpen, onClose, accommodation }) {
  const [formData, setFormData] = useState(initialForm);
  const [selectedRoom, setSelectedRoom] = useState(roomOptions[0].label);
  const [selectedMeal, setSelectedMeal] = useState(mealOptions[0].label);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const normalizedType = (accommodation?.type || "").toLowerCase();
  const isHotelStay = [
    "hotel",
    "hôtel",
    "auberge",
    "riad",
    "dar",
    "maison d'hôtes",
    "maison d'hote",
  ].includes(normalizedType);

  const isHouseStay = [
    "villa",
    "maison",
    "appartement",
    "gîte",
    "gite",
  ].includes(normalizedType);

  const basePricePerNight = Number(accommodation?.price || 0);

  const roomSupplement = useMemo(() => {
    const option = roomOptions.find((item) => item.label === selectedRoom);
    return option ? option.supplement : 0;
  }, [selectedRoom]);

  const mealSupplement = useMemo(() => {
    const option = mealOptions.find((item) => item.label === selectedMeal);
    return option ? option.supplement : 0;
  }, [selectedMeal]);

  const days = Number(formData.days) || 0;
  const people = Number(formData.people) || 0;

  const estimatedTotal = useMemo(() => {
    if (isHotelStay) {
      return basePricePerNight * days + roomSupplement + mealSupplement;
    }

    return basePricePerNight * days;
  }, [basePricePerNight, days, isHotelStay, mealSupplement, roomSupplement]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((previous) => ({
        ...previous,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const nextErrors = {};

    if (!formData.fullName.trim()) {
      nextErrors.fullName = "Le nom complet est obligatoire.";
    }

    if (!formData.email.trim()) {
      nextErrors.email = "L'adresse e-mail est obligatoire.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      nextErrors.email = "Veuillez saisir une adresse e-mail valide.";
    }

    if (!formData.phone.trim()) {
      nextErrors.phone = "Le numéro de téléphone est obligatoire.";
    }

    if (!formData.days || Number(formData.days) <= 0 || !Number.isInteger(Number(formData.days))) {
      nextErrors.days = "Le nombre de jours doit être un entier positif.";
    }

    if (!formData.people || Number(formData.people) <= 0 || !Number.isInteger(Number(formData.people))) {
      nextErrors.people = "Le nombre de personnes doit être un entier positif.";
    }

    if (isHotelStay && !selectedRoom) {
      nextErrors.roomType = "Veuillez choisir un type de chambre.";
    }

    if (isHotelStay && !selectedMeal) {
      nextErrors.mealPlan = "Veuillez choisir une formule de restauration.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    window.setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const closeModal = () => {
    setFormData(initialForm);
    setSelectedRoom(roomOptions[0].label);
    setSelectedMeal(mealOptions[0].label);
    setErrors({});
    setIsSubmitted(false);
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="contact-modal-backdrop" onClick={closeModal}>
      <div
        className="contact-modal"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Formulaire de contact pour l'hébergement"
      >
        <button
          type="button"
          className="contact-modal-close"
          onClick={closeModal}
          aria-label="Fermer la popup"
        >
          ×
        </button>

        {isSubmitted ? (
          <div className="contact-success">
            <div className="success-icon">✓</div>

            <h3>Votre demande a été envoyée avec succès !</h3>

            <p>
              Votre demande a été envoyée avec succès ! Nous vous contacterons bientôt.
            </p>

            <button type="button" className="submit-button" onClick={closeModal}>
              Fermer
            </button>
          </div>
        ) : (
          <>
            <div className="contact-modal-header">
              <span className="contact-badge">Demande de réservation</span>
              <h2>Contacter {accommodation?.name || "cet hébergement"}</h2>
            </div>

            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="form-grid">
                <div className="field-group">
                  <label htmlFor="fullName">Nom complet</label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Votre nom complet"
                  />
                  {errors.fullName && <span className="field-error">{errors.fullName}</span>}
                </div>

                <div className="field-group">
                  <label htmlFor="email">Adresse e-mail</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="exemple@email.com"
                  />
                  {errors.email && <span className="field-error">{errors.email}</span>}
                </div>

                <div className="field-group">
                  <label htmlFor="phone">Numéro de téléphone</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+216 12 345 678"
                  />
                  {errors.phone && <span className="field-error">{errors.phone}</span>}
                </div>

                <div className="field-group">
                  <label htmlFor="days">Nombre de jours du séjour</label>
                  <input
                    id="days"
                    name="days"
                    type="number"
                    min="1"
                    step="1"
                    value={formData.days}
                    onChange={handleChange}
                    placeholder="3"
                  />
                  {errors.days && <span className="field-error">{errors.days}</span>}
                </div>

                <div className="field-group">
                  <label htmlFor="people">Nombre de personnes</label>
                  <input
                    id="people"
                    name="people"
                    type="number"
                    min="1"
                    step="1"
                    value={formData.people}
                    onChange={handleChange}
                    placeholder="2"
                  />
                  {errors.people && <span className="field-error">{errors.people}</span>}
                </div>

                <div className="field-group field-group-full">
                  <label htmlFor="message">Message facultatif</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Précisions, demandes particulières, préférences..."
                    rows="4"
                  />
                </div>
              </div>

              {isHotelStay && (
                <div className="hotel-options">
                  <div className="option-section">
                    <h3>Type de chambre</h3>

                    <div className="option-list">
                      {roomOptions.map((option) => (
                        <label key={option.label} className="option-item">
                          <input
                            type="radio"
                            name="roomType"
                            checked={selectedRoom === option.label}
                            onChange={() => setSelectedRoom(option.label)}
                          />
                          <span>{option.label}</span>
                          <strong>+ {option.supplement} TND</strong>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="option-section">
                    <h3>Formule de restauration</h3>

                    <div className="option-list">
                      {mealOptions.map((option) => (
                        <label key={option.label} className="option-item">
                          <input
                            type="radio"
                            name="mealPlan"
                            checked={selectedMeal === option.label}
                            onChange={() => setSelectedMeal(option.label)}
                          />
                          <span>{option.label}</span>
                          <strong>+ {option.supplement} TND</strong>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {isHotelStay && (
                <div className="price-summary">
                  <h3>Estimation du prix</h3>

                  <div className="price-row">
                    <span>Prix de base par nuit</span>
                    <strong>{basePricePerNight} TND</strong>
                  </div>

                  <div className="price-row">
                    <span>Supplément chambre</span>
                    <strong>{roomSupplement} TND</strong>
                  </div>

                  <div className="price-row">
                    <span>Supplément restauration</span>
                    <strong>{mealSupplement} TND</strong>
                  </div>

                  <div className="price-row">
                    <span>Nombre de jours</span>
                    <strong>{days}</strong>
                  </div>

                  <div className="price-row total-row">
                    <span>Prix total estimé</span>
                    <strong>{estimatedTotal} TND</strong>
                  </div>
                </div>
              )}

              {!isHotelStay && !isHouseStay && (
                <div className="price-summary">
                  <h3>Estimation du prix</h3>
                  <div className="price-row total-row">
                    <span>Prix total estimé</span>
                    <strong>{estimatedTotal} TND</strong>
                  </div>
                </div>
              )}

              {isHouseStay && (
                <div className="price-summary">
                  <h3>Estimation du prix</h3>

                  <div className="price-row">
                    <span>Prix par nuit</span>
                    <strong>{basePricePerNight} TND</strong>
                  </div>

                  <div className="price-row">
                    <span>Nombre de jours</span>
                    <strong>{days}</strong>
                  </div>

                  <div className="price-row total-row">
                    <span>Prix total estimé</span>
                    <strong>{estimatedTotal} TND</strong>
                  </div>
                </div>
              )}

              <div className="modal-actions">
                <button type="button" className="cancel-button" onClick={closeModal}>
                  Fermer
                </button>

                <button
                  type="submit"
                  className="submit-button"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande"}
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default ContactModal;
