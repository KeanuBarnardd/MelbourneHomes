import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
// Links
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <footer>
      <div className="footer__container app__flex">
        <div className="navbar__content app__container-width">
          <div className="navbar__grid">
            <div className="navbar__content-container ">
              <h2>Contact</h2>
              <ul>
                <li>Street: 2017 Harron Drive</li>
                <li>City: Melbourne</li>
                <li>State: VIC</li>
                <li>PostCode: 3029</li>
                <li>Phone Number: 048766134</li>
              </ul>
            </div>
            
              <div className="navbar__content-container">
                <h2>Menu</h2>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="featured">Featured</Link>
                  </li>
                  <li>
                    <Link to="listings">Listings</Link>
                  </li>
                  <li>
                    <Link to="services">Services</Link>
                  </li>
                  <li>
                    <Link to="contact">Contact</Link>
                  </li>
                </ul>
              </div>
              <div className="navbar__content-container">
                <h2>Recent Posts</h2>
                <ul>
                  <li>Finding your dream home</li>
                  <li>Home loans now</li>
                  <li>Saving for an investment property</li>
                  <li>Selling your home</li>
                </ul>
              </div>
          

            <div className="navbar__content-container">
              <h2>Newsletter</h2>
              <div className="input-container">
                <input type="text" name="" id="" placeholder="Your email address" />
                <button>Sign up</button>
              </div>
              <div className="socials__container">
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
          </div>

          <div className="navbar__bottom-container">
            <h3>
              Melbourne<span>Homes</span>
            </h3>
            <p>@2022 MelbourneHomes built by Keanu Barnard</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
