import { useState } from "react";
import { Mail, Lock, UserPlus } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Auth.css";

function Register() {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    setError("");

    if (password !== confirmPassword) {
      setError("Les mots de passe ne correspondent pas");
      return;
    }

    // Pour le moment : passage à l'étape OTP
    setStep(2);
  };

  const handleVerify = (e) => {
    e.preventDefault();

    if (code.length !== 6) {
      setError("Le code doit contenir 6 chiffres");
      return;
    }

    // Plus tard : appel au backend
    navigate("/");
  };

  return (
    <div className="auth-page">

      <div className="auth-card">

        <div className="auth-icon">
          <UserPlus size={28} />
        </div>

        {step === 1 ? (
          <>
            <h1>Créez votre compte</h1>

            <p className="auth-subtitle">
              Inscrivez-vous pour commencer
            </p>

            <button className="google-button">
              Continuer avec Google
            </button>

            <div className="auth-divider">
              <span>ou</span>
            </div>

            {error && (
              <div className="auth-error">
                {error}
              </div>
            )}

            <form onSubmit={handleRegister}>

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

              <label>Mot de passe</label>

              <div className="auth-input">
                <Lock size={18} />

                <input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <label>Confirmer le mot de passe</label>

              <div className="auth-input">
                <Lock size={18} />

                <input
                  type="password"
                  placeholder="••••••••"
                  value={confirmPassword}
                  onChange={(e) =>
                    setConfirmPassword(e.target.value)
                  }
                  required
                />
              </div>

              <button
                type="submit"
                className="auth-button"
              >
                Créer un compte
              </button>

            </form>

            <p className="auth-bottom">
              Vous avez déjà un compte ?{" "}
              <NavLink to="/login">
                Se connecter
              </NavLink>
            </p>
          </>
        ) : (
          <>
            <h1>Vérifiez votre e-mail</h1>

            <p className="auth-subtitle">
              Nous avons envoyé un code à
              <br />
              <strong>{email}</strong>
            </p>

            {error && (
              <div className="auth-error">
                {error}
              </div>
            )}

            <form onSubmit={handleVerify}>

              <label>Code de vérification</label>

              <input
                className="otp-input"
                type="text"
                maxLength="6"
                placeholder="123456"
                value={code}
                onChange={(e) =>
                  setCode(e.target.value.replace(/\D/g, ""))
                }
              />

              <button
                type="submit"
                className="auth-button"
                disabled={code.length !== 6}
              >
                Vérifier
              </button>

            </form>

            <button
              className="resend-button"
              onClick={() => alert("Code renvoyé")}
            >
              Vous n'avez pas reçu le code ? <strong>Renvoyer</strong>
            </button>

          </>
        )}

      </div>

    </div>
  );
}

export default Register;