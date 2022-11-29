import React from "react";
import "./Contact.scss";
import { images } from "../../Constants";
import { ContactForm } from "../../Components";

const Contact = () => {
  return (
    <div>
      <header
        className="header-small app__flex"
        style={{ backgroundImage: `url(${images.luxuryContact})` }}
      >
        <div className="app__container-width header-content">
          <h1>Contact Us </h1>
        </div>
      </header>
      <div className="page__content app__flex">
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
