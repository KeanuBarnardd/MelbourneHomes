import React from "react";
import "./AgentCard.scss";

import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";

const AgentCard = ({ image, name, position, phone, email, description }) => {
  return (
    <div className="agent__card-container">
      <div className="agent__img-container">
     
        <img src={image} alt="" />
        <p className="agent__position">
          <span>{position}</span>
        </p>
      </div>

      <div className="agent__card-details">
        <h1 className="agent__name">{name}</h1>

        <p>{description}</p>
      </div>
      <hr />
      <div className="agent__card-contact">
        <div className="contacts__container">
          <p className="email-box">
            <i className="fa-solid fa-envelope"></i>
            {email}
          </p>
          <p>
            <i className="fa-solid fa-phone"></i>
            {phone}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AgentCard;
