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
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere dignissimos voluptate
              odio dolore consectetur at voluptatem temporibus numquam ea aliquam molestias ullam,
              expedita aspernatur magni amet perferendis maiores placeat quaerat!
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
                "With over 4,000 home loans to compare you can find a home loan thats right for you."
              }
              link={"Compare home loans"}
            />
            <InfoCard
              title={"Competetive rates"}
              text={
                "With over 4,000 home loans to compare you can find a home loan thats right for you."
              }
              link={"Compare home loans"}
            />
            <InfoCard
              title={"Competetive rates"}
              text={
                "With over 4,000 home loans to compare you can find a home loan thats right for you."
              }
              link={"Compare home loans"}
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In laboriosam quasi porro
              veniam magnam voluptatibus molestias deleniti accusamus nemo velit error quaerat ullam
              molestiae libero illum dolore, explicabo reiciendis quo?
            </p>
            <div className="about__team-grid">
              <AgentCard
                image={images.agent1}
                name="Paul Sharma"
                email={"psharma@goldkeyre.com.au"}
                position={"Head Manager"}
                phone={"0455847818"}
                description={"Your favourite real estate seller dude thing that does something."}
              />
              <AgentCard
                image={images.agent2}
                name="Paul Sharma"
                email={"psharma@goldkeyre.com.au"}
                position={"Head Manager"}
                phone={"0455847818"}
                description={"Your favourite real estate seller dude thing that does something."}
              />
              <AgentCard
                image={images.agent3}
                name="Paul Sharma"
                email={"psharma@goldkeyre.com.au"}
                position={"Head Manager"}
                phone={"0455847818"}
                description={"Your favourite real estate seller dude thing that does something."}
              />
              <AgentCard
                image={images.agent4}
                name="Paul Sharma"
                email={"psharma@goldkeyre.com.au"}
                position={"Head Manager"}
                phone={"0455847818"}
                description={"Your favourite real estate seller dude thing that does something."}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
