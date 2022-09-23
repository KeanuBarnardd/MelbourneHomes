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
      <div className="page__content app__flex app__primarybg bg-grey">
        <div className="app__container-width about__stats-container">
          <h1 className="content__title-text">
            What do we <span>offer?</span>
          </h1>
          <div className="stats__grid">
            <InfoCard
              title={"Competetive rates"}
              text={
                <p className="p-text">
                  We have the most competetive rates on the market, rated the{" "}
                  <span>most affordable</span> agents in Melbourne <span>2 years running</span>. Get
                  in contact with us to hear more.
                </p>
              }
              link={"Find out about our rates"}
            />
            <InfoCard
              title={"Marketting and Advertising"}
              text={
                <p className="p-text">
                  We have the best team that specialises advertising properties. Using many facets
                  such as <span>signage</span>, <span>flyers</span>, <span>online advertising</span>
                  , magazine and <span>video/drone</span> footage. You can gurantee your house is
                  going to be <span>sold</span> .
                </p>
              }
              link={"More on advertising"}
            />
            <InfoCard
              title={"Pricing properties"}
              text={
                <p className="p-text">
                  Pricing properties is one of the most <span>important</span> parts of selling a
                  house and we make sure that we have experts calculate best price to get you to
                  sell your home.
                </p>
              }
              link={"How we calculate properties"}
            />
          </div>
        </div>
      </div>
      <div className="page__content  app__flex">
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
            <div className="page__content">
              <div className="dreamhouse__container">
                <img src={images.dreamHome2} alt="" />
                <div className="dreamhouse__container-content">
                  <h2>
                    Melbourne<span>Homes</span>
                  </h2>
                  <h1>How we can help you ?</h1>
                  <p>
                    We have the resources to assist you on finding your home, getting the knowledge you need to make the right decision and helping you find your family a new home. Coming into our office and working with us, is the best way we can help. Otherwise we have these two options below.
                  </p>
                  <div className="dreamhouse__btn-container">
                    <Link to="/services" className="link">
                      <button>Mortgage Calculator</button>
                    </Link>
                    <Link to="/listings" className="link">
                      <button className="dreamhouse-blue">Find a home</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
