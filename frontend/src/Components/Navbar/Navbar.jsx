import React from "react";
import "./Navbar.scss";

import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = ({ resetFeaturesHandler }) => {

  return (
    <nav className="main__nav app__flex">
      <div className="navbar__content app__container-width">
        <Link onClick={() => resetFeaturesHandler()} className="link" to="/">
          <h1>
            <span>Melbourne</span>Homes
          </h1>
        </Link>

        <div className="navbar__links-container">
          <NavLink onClick={() => resetFeaturesHandler()} className="navlink" to="/">
            Home
          </NavLink>
          <NavLink onClick={() => resetFeaturesHandler()} className="navlink" to="listings">
            Listings
          </NavLink>
          <NavLink onClick={() => resetFeaturesHandler()} className="navlink" to="about">
            About
          </NavLink>
          <NavLink onClick={() => resetFeaturesHandler()} className="navlink" to="services">
            Services
          </NavLink>
          <NavLink onClick={() => resetFeaturesHandler()} className="navlink" to="contact">
            Contact
          </NavLink>
        </div>
        <div className="navbar__buttons-container">
          <NavLink onClick={() => resetFeaturesHandler()} className="navlink" to="listings">
            View Homes
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
