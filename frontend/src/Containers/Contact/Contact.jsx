import React from "react";
import "./Contact.scss";
import { images } from "../../Constants";
const Contact = () => {
  return (
    <div>
      <header
        className="header-small app__flex"
        style={{ backgroundImage: `url(${images.luxuryContact})` }}
      >
        
        <h1>Want to work with the best crew in melbourne. </h1>
      </header>
    </div>
  );
};

export default Contact;
