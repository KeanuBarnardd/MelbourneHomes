import React from "react";
import { Link } from "react-router-dom";
import "./Banner.scss";

const Banner = ({ text, button, title, subTitle, link, image }) => {
  return (
    <div style={{ backgroundImage: `url(${image})` }} className="app__flex banner">
      <div className="app__container-width banner__content">
        <h2>{subTitle}</h2>
        <h1 className="head-text">{title}</h1>
        <p className="p-text">{text}</p>

        <Link className="banner-btn" to={`${link}`}>
          {button}
        </Link>
      </div>
    </div>
  );
};

export default Banner;
