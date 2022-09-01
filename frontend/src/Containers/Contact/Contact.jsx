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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium soluta temporibus
            pariatur ducimus itaque libero vero ratione ipsam quod, vitae cupiditate beatae? Cumque
            eius saepe, ea maxime alias dolorum commodi!
          </p>
        </div>
      </header>
      <div className="page__content app__flex">
        <ContactForm/>
      </div>
    </div>
  );
};

export default Contact;
