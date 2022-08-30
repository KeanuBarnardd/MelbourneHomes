import React from "react";
import "./Navbar.scss";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="app__flex">
      <div className="navbar__content app__container-width">
        <Link className="link" to="/">
          <h1>
            <span>Melbourne</span>Homes
          </h1>
        </Link>

        <div className="navbar__links-container">
          <NavLink className="navlink" to="/">
            Home
          </NavLink>
          <NavLink className="navlink" to="listings">
            Listings
          </NavLink>
          <NavLink className="navlink" to="about">
            About
          </NavLink>
          <NavLink className="navlink" to="services">
            Services
          </NavLink>
          <NavLink className="navlink" to="contact">
            Contact
          </NavLink>
        </div>
        <div className="navbar__buttons-container">
          <button>
            <FavoriteIcon />
          </button>
          <button>
            <PersonIcon />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
