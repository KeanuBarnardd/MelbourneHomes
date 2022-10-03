import React from "react";
import "./ExploreGrid.scss";
import { ExploreCard } from "../../Components";
import { useState } from "react";

import { images } from "../../Constants";
const ExploreGrid = () => {
  const [toggleGrid, setToggleGrid] = useState(0);

  return (
    <>
      <h1 className="content-title">
        <span>Exploring</span> all things property
      </h1>
      <div className="explore__buttons-container">
        <button
          onClick={() => setToggleGrid(0)}
          className={`explore-btn ${toggleGrid === 0 ? "active" : ""}`}
        >
          Buying
        </button>
        <button
          onClick={() => setToggleGrid(1)}
          className={`explore-btn ${toggleGrid === 1 ? "active" : ""}`}
        >
          Renting
        </button>
        <button
          onClick={() => setToggleGrid(2)}
          className={`explore-btn ${toggleGrid === 2 ? "active" : ""}`}
        >
          Selling
        </button>
        <button
          onClick={() => setToggleGrid(3)}
          className={`explore-btn ${toggleGrid === 3 ? "active" : ""}`}
        >
          Researching
        </button>
      </div>
      {toggleGrid === 0 && (
        <div className="explore__grid buy">
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
      )}
      {/* ---------------------RESEARCH GRID------------ */}
      {toggleGrid === 1 && (
        <div className="explore__grid research">
          <ExploreCard
            title="Advertise your property "
            image={
              "https://argonaut.au.reastatic.net/resi-property/prod/homepage-web/rent-b1e73d2e73b162b48a60.svg"
            }
            description="Looking to get your home out there so you can get it rented asap. Work with us. "
            linkDesc={"Renting as a home owner"}
          />
          <ExploreCard
            title="Helping your tenants"
            image={
              "https://argonaut.au.reastatic.net/resi-property/prod/homepage-web/tenant-b79f522920b8828e5c7f.svg"
            }
            description="We can get you in contact with Melbournes most prestigous movers. "
            linkDesc={"Helping tenants move"}
          />
          <ExploreCard
            title="Melbourne neighbourhoods"
            image={
              "https://argonaut.au.reastatic.net/resi-property/prod/homepage-web/flatmates-a1175e16dc732b5b5f05.svg"
            }
            description="Best place for food, closest to beach, best for families we can help you find the right place."
            linkDesc={"Where should you move to"}
          />
        </div>
      )}
      {toggleGrid === 2 && (
        <div className="explore__grid selling">
          <ExploreCard
            title="Get your house on the market"
            image={
              "https://argonaut.au.reastatic.net/resi-property/prod/homepage-web/auctions-1cd992f458497ac2cae6.svg"
            }
            description="Selling homes is our speciality we can help you set the right goals in the right time."
            linkDesc={"Get rid of your home"}
          />
          <ExploreCard
            title="House projections"
            image={
              "https://argonaut.au.reastatic.net/resi-property/prod/homepage-web/guides-selling-59397b275a20d015c8bb.svg"
            }
            description="Don't know how much you should get? Contact us to find out. "
            linkDesc={"How much should I get ?"}
          />
          <ExploreCard
            title="Sell earnings know how"
            image={
              "https://argonaut.au.reastatic.net/resi-property/prod/homepage-web/calculators-4296d3979ad2268b1247.svg"
            }
            description="Determine if you are selling your house for the right price and what you need, to do so. "
            linkDesc={"Selling your house right"}
          />
        </div>
      )}
      {toggleGrid === 3 && (
        <div className="explore__grid buy">
          <ExploreCard
            title="Location, location, location"
            image={
              "https://argonaut.au.reastatic.net/resi-property/prod/homepage-web/market-a50056bd06bbd340a2e6.svg"
            }
            description="Hardest decision to decide where to move and what your neighbourhood will be like."
            linkDesc={"Rearch to find the right area"}
          />
          <ExploreCard
            title="Self research"
            image={
              "https://argonaut.au.reastatic.net/resi-property/prod/homepage-web/guides-buying-5b4c5b7e5b96caa54980.svg"
            }
            description="We can point you in the direction so you can find out what is best for yourself."
            linkDesc={"Getting your own information"}
          />
          <ExploreCard
            title="Calculating your interest"
            image={
              "https://argonaut.au.reastatic.net/resi-property/prod/homepage-web/calculators-borrow-395bc78a6a93ef17ceb9.svg"
            }
            description="We have a mortgage calculator to determine interest you will be paying."
            linkDesc={"Check property values"}
          />
        </div>
      )}
    </>
  );
};

export default ExploreGrid;
