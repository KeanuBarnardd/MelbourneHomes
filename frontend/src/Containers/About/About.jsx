import React from "react";
import "./About.scss";
import { images } from "../../Constants/index";
import AgentCard from "../../Components/AgentCard/AgentCard";

const About = () => {
  return (
    <div className="page__content app__flex">
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
            />
            <AgentCard
              image={images.agent2}
              name="Paul Sharma"
              email={"psharma@goldkeyre.com.au"}
              position={"Head Manager"}
              phone={"0455847818"}
            />
            <AgentCard
              image={images.agent3}
              name="Paul Sharma"
              email={"psharma@goldkeyre.com.au"}
              position={"Head Manager"}
              phone={"0455847818"}
            />
            <AgentCard
              image={images.agent4}
              name="Paul Sharma"
              email={"psharma@goldkeyre.com.au"}
              position={"Head Manager"}
              phone={"0455847818"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
