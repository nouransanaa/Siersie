import { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import {
  Mail,
  Lock,
  LogIn,
  Eye,
  EyeOff,
} from "lucide-react";

import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Page vers laquelle retourner après connexion
  const returnTo =
    new URLSearchParams(location.search).get("returnTo") || "/";

  const handleSubmit = async (event) => {
    event.preventDefault();

    setError("");

    if (!email || !password) {
      setError("Veuillez remplir tous les champs.");
      return;
    }

    try {
      setLoading(true);

      // Pour le moment : simulation de connexion
      await new Promise((resolve) =>
        setTimeout(resolve, 1000)
      );

      // Exemple de connexion
      // Plus tard, ici on appellera ton backend Spring Boot :
      //
      // const response = await fetch(
      //   "http://localhost:8080/api/auth/login",
      //   {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify({
      //       email,
      //       password,
      //     }),
      //   }
      // );

      navigate(returnTo);

    } catch (err) {
      setError("E-mail ou mot de passe invalide");
    } finally {
      setLoading(false);
    }
  };


  const handleGoogleLogin = () => {
    // Plus tard :
    // window.location.href =
    // "http://localhost:8080/oauth2/authorization/google";

    console.log("Connexion avec Google");
  };


  return (
    <main className="login-page">

      <div className="login-container">

        {/* =========================
            ICÔNE
        ========================= */}

        <div className="login-icon">
          <LogIn size={27} />
        </div>


        {/* =========================
            TITRE
        ========================= */}

        <h1>
          Bon retour
        </h1>

        <p className="login-subtitle">
          Connectez-vous à votre compte
        </p>


        {/* =========================
            CARTE
        ========================= */}

        <div className="login-card">

          {/* Erreur */}

          {error && (
            <div className="login-error">
              {error}
            </div>
          )}


          {/* =========================
              GOOGLE
          ========================= */}

          <button
            type="button"
            className="google-button"
            onClick={handleGoogleLogin}
          >

            <span className="google-logo">
              G
            </span>

            Continuer avec Google

          </button>


          {/* =========================
              SÉPARATEUR
          ========================= */}

          <div className="login-divider">

            <span></span>

            <small>
              OU
            </small>

            <span></span>

          </div>


          {/* =========================
              FORMULAIRE
          ========================= */}

          <form onSubmit={handleSubmit}>

            {/* EMAIL */}

            <div className="form-group">

              <label htmlFor="email">
                E-mail
              </label>

              <div className="input-wrapper">

                <Mail size={19} />

                <input
                  id="email"
                  type="email"
                  placeholder="votre@email.com"
                  value={email}
                  onChange={(event) =>
                    setEmail(event.target.value)
                  }
                />

              </div>

            </div>


            {/* MOT DE PASSE */}

            <div className="form-group">

              <div className="password-label">

                <label htmlFor="password">
                  Mot de passe
                </label>

                <NavLink to="/forgot-password">
                  Mot de passe oublié ?
                </NavLink>

              </div>


              <div className="input-wrapper">

                <Lock size={19} />

                <input
                  id="password"
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  placeholder="••••••••"
                  value={password}
                  onChange={(event) =>
                    setPassword(event.target.value)
                  }
                />


                <button
                  type="button"
                  className="password-toggle"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                >

                  {showPassword ? (
                    <EyeOff size={19} />
                  ) : (
                    <Eye size={19} />
                  )}

                </button>

              </div>

            </div>


            {/* =========================
                BOUTON CONNEXION
            ========================= */}

            <button
              type="submit"
              className="login-button"
              disabled={loading}
            >

              {loading ? (
                <>
                  <span className="spinner"></span>
                  Connexion…
                </>
              ) : (
                "Se connecter"
              )}

            </button>

          </form>


          {/* =========================
              INSCRIPTION
          ========================= */}

          <p className="register-text">

            Vous n'avez pas de compte ?{" "}

            <NavLink to="/register">
              Créer un compte
            </NavLink>

          </p>

        </div>

      </div>

    </main>
  );
}
export default Login;