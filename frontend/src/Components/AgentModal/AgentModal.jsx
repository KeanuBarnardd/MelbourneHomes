import React from "react";

import "./AgentModal.scss";

const AgentModal = ({ toggleAgentModalHandler }) => {
  return (
    <div className="modal__background">
      <div className="modal__content">
        <p>Agent Image Here</p>
        <h1>Agent Name</h1>
        <button
          onClick={() => {
            toggleAgentModalHandler();
          }}
        >Close</button>
      </div>
    </div>
  );
};

export default AgentModal;
