import { useState } from "react";
import { Mail, ArrowLeft } from "lucide-react";
import { NavLink } from "react-router-dom";

import "./Auth.css";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");

    if (!email) {
      setError("Veuillez saisir votre adresse e-mail");
      return;
    }

    // Pour le moment, on simule l'envoi
    setSent(true);
  };

  return (
    <div className="auth-page">

      <div className="auth-card">

        <div className="auth-icon">
          <Mail size={28} />
        </div>

        {!sent ? (
          <>
            <h1>Mot de passe oublié ?</h1>

            <p className="auth-subtitle">
              Entrez votre adresse e-mail pour recevoir
              un lien de réinitialisation.
            </p>

            {error && (
              <div className="auth-error">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit}>

              <label>E-mail</label>

              <div className="auth-input">

                <Mail size={18} />

                <input
                  type="email"
                  placeholder="votre@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />

              </div>

              <button
                type="submit"
                className="auth-button"
              >
                Envoyer le lien
              </button>

            </form>

            <NavLink
              to="/login"
              className="back-link"
            >
              <ArrowLeft size={16} />
              Retour à la connexion
            </NavLink>
          </>
        ) : (
          <>
            <h1>E-mail envoyé</h1>

            <p className="auth-subtitle">
              Un lien de réinitialisation a été envoyé à :
            </p>

            <strong className="email-confirmation">
              {email}
            </strong>

            <p className="success-message">
              Consultez votre boîte mail pour continuer.
            </p>

            <NavLink
              to="/login"
              className="auth-button auth-link-button"
            >
              Retour à la connexion
            </NavLink>
          </>
        )}

      </div>

    </div>
  );
}

export default ForgotPassword;