import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">

      {/* Logo */}
      <div className="logo">
        SIERSIE
      </div>

      {/* Navigation */}
      <div className="nav-links">

        <NavLink
          to="/"
          className="nav-link"
        >
          Accueil
        </NavLink>

        <NavLink
          to="/hebergements"
          className="nav-link"
        >
          Hébergements
        </NavLink>


        <NavLink
          to="/destinations"
          className="nav-link"
        >
          Destinations
        </NavLink>

        <NavLink
          to="/favoris"
          className="nav-link"
        >
          Favoris
        </NavLink>
        <NavLink to="/Login" className="nav-link">login</NavLink>

      </div>


      {/* Coeur */}
      <NavLink
        to="/favoris"
        className="heart-link"
      >
        ♡
      </NavLink>
   

    </nav>
  );
}

export default NavBar;