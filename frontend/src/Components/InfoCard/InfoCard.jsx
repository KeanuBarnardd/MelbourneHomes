import React from "react";
import "./InfoCard.scss";

const InfoCard = ({ title, text, link,icon }) => {
  return (
    <div className="infocard__container">
      <h1>{title}</h1>
      <p>{text}</p>
      <p className="infocard__link"><span>Compare home loans</span> </p>
    </div>
  );
};

export default InfoCard;
