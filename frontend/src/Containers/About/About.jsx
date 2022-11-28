import React from "react";
import "./About.scss";
import { images } from "../../Constants/index";
import { InfoCard, AgentCard } from "../../Components";
import { Link } from "react-router-dom";
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
              What makes us the <span>number 1</span> in selling homes for Melbourne.{" "}
            </h1>
            <p className="p-text">
              Here a <span>Melbourne Homes</span> We pride ourselves on giving you the best services
              we can. With a team of skilled real estate agents we have more than 10+ years of
              experience in the Melbourne house market.
            </p>
            <button>
              <Link to="/contact">Contact</Link>
            </button>
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
              <h2>You'll save time and money with a team of experts.</h2>
              <p className="p-text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, tempora natus et
                nisi blanditiis provident odit temporibus neque illo rerum veritatis nesciunt quas
                voluptatibus harum facilis ipsa sed ipsam non!
              </p>
            </div>
            <div className="gallery__side">
              <div className="gallery__side-container">
                <img src={images.about_gallery4} alt="" />
                <div className="gallery__side-container-content">
                  <h3>Best deals you can get your hands on</h3>
                  <p className="p-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam suscipit
                    laudantium, nisi dignissimos quasi ab!
                  </p>
                </div>
              </div>
              <hr />
              <div className="gallery__side-container">
                <img src={images.about_gallery2} alt="" />
                <div className="gallery__side-container-content">
                  <h3>We provide the best services</h3>
                  <p className="p-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam suscipit
                    laudantium, nisi dignissimos quasi ab!
                  </p>
                </div>
              </div>
              <hr />
              <div className="gallery__side-container">
                <img src={images.about_gallery5} alt="" />
                <div className="gallery__side-container-content">
                  <h3>Serving for 20+ years in Melbourne</h3>
                  <p className="p-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam suscipit
                    laudantium, nisi dignissimos quasi ab!
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
            <h1 className="content__title-text">
              Our <span>team</span>
            </h1>
            <p className="p-text">
              Here at Melbourne Homes we have a small but specialised team of 4 that keep the gears
              moving. With specialities in marketting, property pricing and home selling. We provide
              the best service across the board when it comes to selling,renting or buying local
              homes in Melbourne.
            </p>
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
    </>
  );
};

export default About;
