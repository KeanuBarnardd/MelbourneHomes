import React from "react";
import "./About.scss";
import { images } from "../../Constants/index";
import { InfoCard, AgentCard } from "../../Components";
import { Link } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
const About = () => {
  return (
    <>
      <div className="page__content app__flex p-top">
        <header
          className="header-small app__flex"
          style={{ backgroundImage: `url(${images.luxuryHome})` }}
        >
          <div className="app__container-width header-content">
            <h1>
             About Us{" "}
            </h1>
          </div>
        </header>
      </div>

      <div className="page__content app__flex ">
        <div className="app__container-width">
          <div className="row">
            <div className="row__item">
              <h3 className="page__tag">About us</h3>
              <h1 className="head-text">What makes us the best team in Melbourne.</h1>
            </div>
            <div className="row__item">
              <Link className="page__content-link" to="/listings">
                View homes <i className="fa-solid fa-chevron-right"></i>{" "}
              </Link>
            </div>
          </div>
          <div className="about__gallery-container">
            <div className="gallery__main">
              <img src={images.about_gallery1} alt="" />
              <h2>Advanced search functionality</h2>
              <p className="p-text">
              Our website's advanced search functionality allows users to search properties based on location, price, and other criteria.
              </p>
            </div>
            <div className="gallery__side">
              <div className="gallery__side-container">
                <img src={images.about_gallery4} alt="" />
                <div className="gallery__side-container-content">
                  <h3>Professional support</h3>
                  <p className="p-text">
                  Our team of experienced real estate agents is available to provide professional support and guidance throughout the buying or renting process.
                  </p>
                </div>
              </div>
              <hr />
              <div className="gallery__side-container">
                <img src={images.about_gallery2} alt="" />
                <div className="gallery__side-container-content">
                  <h3>Detailed property information</h3>
                  <p className="p-text">
                  Each listing includes detailed information about the property, including photos, floor plans, and key features.
                  </p>
                </div>
              </div>
              <hr />
              <div className="gallery__side-container">
                <img src={images.about_gallery5} alt="" />
                <div className="gallery__side-container-content">
                  <h3>Extensive property listings</h3>
                  <p className="p-text">
                  Our website offers a wide range of properties for sale and rent in Melbourne, including apartments, houses, and commercial properties.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="page__content  app__flex bg-grey">
        <div className="app__container-width">
          <div className="team-intro">
            <div className="row">
              <div className="row__item">
                <h3 className="page__tag">About us</h3>
                <h1 className="head-text">What makes us the best team in Melbourne.</h1>
                <p className="p-text">
                Our team at MelbourneHomes is composed of experienced and dedicated real estate professionals who are passionate about helping our clients find their dream property.
                </p>
              </div>
              <div className="row__item">
                <Link className="page__content-link" to="/contact">
                  Contact Us <i className="fa-solid fa-chevron-right"></i>{" "}
                </Link>
              </div>
            </div>

            <div className="about__team-grid">
              <AgentCard
                image={images.agent1}
                name="Paul Sharma"
                email={"psharma@melbhomes.com.au"}
                position={"CEO"}
                phone={"041-322-542"}
                description={
                  "Owner and operations manager of Melbourne Homes, with 20+ years of experience."
                }
              />
              <AgentCard
                image={images.agent2}
                name="Steve Barrack"
                email={"steveBarrack@melbhomes.com.au"}
                position={"Real Estate agent"}
                phone={"045-322-542"}
                description={
                  "Steven is an experienced agent with over 50+ sold properties and 30 succesful leases in under 10 years."
                }
              />
              <AgentCard
                image={images.agent3}
                name="Jeffery Stone"
                email={"jeffstone@melbhomes.com.au"}
                position={"Real Estate agent"}
                phone={"042-322-542"}
                description={
                  "Jeffery works with MelbourneHome as a new but skilled agent with a total of 50 sold homes in a short 5 years of service."
                }
              />
              <AgentCard
                image={images.agent4}
                name="Vanessa Shmall"
                email={"vanessashmall@melbhomes.com.au"}
                position={"Adverting Expert"}
                phone={"044-322-542"}
                description={
                  "Vanessa is our marketing and advertising specialist with over 14+ years of experience with melbourne real estate."
                }
              />
            </div>
          </div>
        </div>
      </div>
      <div className="page__content app__flex">
        <div className="app__container-width">
          <div className="row">
            <div className="row__item">
              <h3 className="page__tag">Our Stats</h3>
              <h1 className="head-text">Check out our real estate stats</h1>
            </div>
            <div className="row__item">
              <p className="p-text">
              We provide historical data on the Melbourne property market, allowing you to see how the market has evolved over time and make informed decisions about buying or renting a property.
              </p>
            </div>
          </div>
          <div className="grid">
            <div className="list__grid-item">
              <AccountBalanceWalletOutlinedIcon className="grid__item-icon" />
              <h2>Smart feature rich</h2>
              <p className="p-text">
                There are 100's of property ads. But you can explore everything you need here and
                use smart features like our mortgage calculator.{" "}
              </p>
            </div>
            <div className="list__grid-item">
              <LibraryBooksOutlinedIcon className="grid__item-icon" />
              <h2>Find a place of business</h2>
              <p className="p-text">
                Renting a place of business and buying and sellijng houses becomes easier. Meet your
                business and investment needs faster.
              </p>
            </div>
            <div className="list__grid-item">
              <HomeOutlinedIcon className="grid__item-icon" />
              <h2>Find your dream house</h2>
              <p className="p-text">
                Many ads for apartments and houses for sasle in various locations around Melbourne.
                Check out what we have in store for you in our listings.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
