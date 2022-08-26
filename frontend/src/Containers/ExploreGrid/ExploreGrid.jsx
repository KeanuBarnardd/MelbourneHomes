import React from "react";
import "./ExploreGrid.scss";
import { ExploreCard } from "../../Components";
import { images } from "../../Constants";
const ExploreGrid = () => {
  return (
    <>
      <div className="explore__grid">
        <ExploreCard
          title="Explore suburb profiles"
          image={
            "https://argonaut.au.reastatic.net/resi-property/prod/homepage-web/explore-4fad7437d7114b75e248.svg"
          }
          description="Check out different suburb profiles and find one thats right for you."
          linkDesc={"Research Suburbs"}
        />
        <ExploreCard
          title="Need help with a mortgage?"
          image={
            "https://argonaut.au.reastatic.net/resi-property/prod/homepage-web/track-property-43bfda872d7017c48b14.svg"
          }
          description="Compare your finance options to make an informed call."
          linkDesc={"Explore home loans"}
        />
        <ExploreCard
          title="Get estimated property prices"
          image={
            "https://argonaut.au.reastatic.net/resi-property/prod/homepage-web/homeloan-05b3a89e575f4aa28d3b.svg"
          }
          description="See how much a property's worth, whether you own it or want to buy it."
          linkDesc={"Check property values"}
        />
      </div>
    </>
  );
};

export default ExploreGrid;
