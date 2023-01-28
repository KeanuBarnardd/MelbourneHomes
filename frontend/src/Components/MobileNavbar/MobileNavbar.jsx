import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

import "./MobileNavbar.scss";

export default function MobileNavbar({ resetFeaturesHandler }) {
  const [toggleMobileNav, setToggleMobileNav] = useState(true);

  const toggleNav = () => {
    toggleMobileNav ? setToggleMobileNav(false) : setToggleMobileNav(true);
  };

  return (
    <div className="mobile__nav app__flex">
      <div className="mobile__nav-top-container app__container-width">
        <Link onClick={() => resetFeaturesHandler()} className="link" to="/">
          <h1>
            <span>Melbourne</span>Homes
          </h1>
        </Link>
        <button onClick={toggleNav} className="fa-solid fa-bars mobile__nav-btn"></button>
        <div className={`mobile__nav-container ${toggleMobileNav ? "active" : ""}`}>
          <NavLink
            onClick={() => {
              toggleNav();
              resetFeaturesHandler();
            }}
            className="navlink"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            onClick={() => {
              toggleNav();
              resetFeaturesHandler();
            }}
            className="navlink"
            to="listings"
          >
            Listings
          </NavLink>
          <NavLink
            onClick={() => {
              toggleNav();
              resetFeaturesHandler();
            }}
            className="navlink"
            to="about"
          >
            About
          </NavLink>
          <NavLink
            onClick={() => {
              toggleNav();
              resetFeaturesHandler();
            }}
            className="navlink"
            to="services"
          >
            Services
          </NavLink>
          <NavLink
            onClick={() => {
              toggleNav();
              resetFeaturesHandler();
            }}
            className="navlink"
            to="contact"
          >
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
}
