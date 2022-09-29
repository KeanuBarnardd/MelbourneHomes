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
          <h1>Want to work with the best crew in melbourne. </h1>
          <p>
            If your sure you want to work with the best team in Melbourne be sure to email us below. Our response times will be from 7am-5pm Moday-Friday. We look forward to hearing from you and making you dream house come true.
          </p>
        </div>
      </header>
      <div className="page__content app__flex">
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
