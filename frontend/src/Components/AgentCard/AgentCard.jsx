import React from "react";
import "./AgentCard.scss";

import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";

const AgentCard = ({ image, name, position, phone, email, description }) => {
  return (
    <div className="agent__card-container">
      <img src={image} alt="" />
      <div className="agent__img-container">
        {/* <button className="agent__button">
          <EmailIcon className="agent__icon" />
          {email}
        </button>
        <button className="agent__button">
          <LocalPhoneIcon className="agent__icon" />
          {phone}
        </button> */}

      
      </div>
      <p className="agent__position">{position}</p>
      <div className="agent__card-details">
        <h1 className="agent__name">{name}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default AgentCard;
