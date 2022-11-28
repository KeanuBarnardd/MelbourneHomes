import React from "react";

import "./AgentModal.scss";
import { Link } from "react-router-dom";
const AgentModal = ({ toggleAgentModalHandler, agentData }) => {
  return (
    <div className="modal__background">
      <div className="agent__modal-content">
        {/* <p className="modal__logo">
          Melbourne<span>Homes</span>
        </p> */}
        <div className="image__container">
          <img src={agentData.image} alt="" />
          <h1>
            {" "}
            <span>{agentData.name}</span>{" "}
          </h1>
        </div>
        <p className="p-text">{agentData.description}</p>
        <div className="contacts__container">
          <p className="contact__tag blue">
            <i className="fa-solid fa-phone"></i> {agentData.email}
          </p>
          <p className="contact__tag">
            <i className="fa-solid fa-envelope"></i> {agentData.phone}
          </p>
        </div>
        <div className="buttons__container">
          <Link to="/contact" className="btn contact">
            Contact
          </Link>
          <button
            className="btn close"
            onClick={() => {
              toggleAgentModalHandler();
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default AgentModal;
