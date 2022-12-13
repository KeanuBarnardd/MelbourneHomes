import React from "react";
import "./ContactForm.scss";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const ContactForm = () => {
  return (
    <form className="app__container-width" action="">
      <div className="row">
        <div className="row__item">
          <h3 className="page__tag">About us</h3>
          <h1 className="head-text">What makes us the best team in Melbourne.</h1>
        </div>
        <div className="row__item"></div>
      </div>
      <div className="form__container">
        <div className="form__container-detail">
          <div className="form__detail-tag">
            <i className="fa-solid fa-location form__icon"></i>
            <div className="form__detail-info">
              <p className="form__detail-title">Address</p>
              <p className="form__info-p">2017 Hatton Drive</p>
              <p className="form__info-p">Hoppers Crossing</p>
            </div>
          </div>
          <div className="form__detail-tag">
            <i className="fa-solid fa-phone form__icon"></i>
            <div className="form__detail-info">
              <p className="form__detail-title">Phone</p>
              <p className="form__info-p">048766134</p>
            </div>
          </div>
          <div className="form__detail-tag">
            <i className="fa-solid fa-envelope form__icon"></i>
            <div className="form__detail-info">
              <p className="form__detail-title">Email</p>
              <p className="form__info-p">melbournehomes@gmail.com.au</p>
            </div>
          </div>
          <div className="contact__socials-container">
            <button>
              <FacebookIcon className="socials-icon" />
            </button>
            <button>
              <LinkedInIcon className="socials-icon" />
            </button>
            <button>
              <EmailIcon className="socials-icon" />
            </button>
            <button>
              <InstagramIcon className="socials-icon" />
            </button>
          </div>
        </div>
        <fieldset>
          <div className="form__top-row">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Last Name" />
            <input type="text" placeholder="Email Address" />
          </div>
          <textarea placeholder="Message" name="" id="" cols="30" rows="10"></textarea>
          <button>Send</button>
        </fieldset>
      </div>
    </form>
  );
};

export default ContactForm;
