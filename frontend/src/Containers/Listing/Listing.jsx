import React from "react";
import "./Listing.scss";
import { useState } from "react";
import { ListSearch, HouseCard, HouseModal } from "../../Components/index";
import { houseData } from "../../Constants/homeData";

const Listing = ({
  minValue,
  maxValue,
  bedValue,
  bathValue,
  livingValue,
  squareFoot,
  garageValue,
  getLocationHandler,
  getMinValueHandler,
  getMaxValueHandler,
  getBedHandler,
  getBathHandler,
  getGarageHandler,
  submitSearch,
  getLivingHandler,
  getSquareFootHandler,
}) => {
  const filteredList = houseData.filter(function (home) {
    if (
      (home.baths === bathValue || bathValue === "all") &&
      (home.beds === bedValue || bedValue === "all") &&
      (home.living === livingValue || livingValue === "all") &&
      (home.garage === garageValue || garageValue === "all") &&
      home.price <= maxValue &&
      home.price >= minValue &&
      home.squareFeet >= squareFoot
    ) {
      return home;
    }
  });

  const listProperties = filteredList.map((home, index) => {
    return (
      <HouseCard
        homeData={home}
        agentData={home.agent}
        title={home.address}
        image={home.images[0]}
        postedAgo={home.listedTime}
        price={home.price}
        beds={home.beds}
        baths={home.baths}
        sellType={home.sellType}
        square={home.squareFeet}
        totalImages={home.images.length}
        details={home.description}
        key={`${index}-${home.address}`}
        listProperties={filteredList}
      />
    );
  });

  return (
    <>
      <ListSearch
        getLocationHandler={getLocationHandler}
        getMinValueHandler={getMinValueHandler}
        getMaxValueHandler={getMaxValueHandler}
        getSquareFootHandler={getSquareFootHandler}
        getBedHandler={getBedHandler}
        getBathHandler={getBathHandler}
        getGarageHandler={getGarageHandler}
        getLivingHandler={getLivingHandler}
        submitSearch={submitSearch}
      />
      <div className="app__flex">
        <div className="app__container-width">
          <div className="listings__container">
            <div className="listings__container-title">
              <h1 className="content__title-text">
                Listing <span>Results</span>
              </h1>
            </div>
            <div className="listings__container-filters">
              <p>
                Showing <span>{listProperties.length}</span> total properties
              </p>
              <select name="" id="">
                <option value="">Most Recent</option>
                <option value="">Least Recent</option>
                <option value="">Price- Low to High</option>
                <option value="">Price- High to low</option>
              </select>
            </div>
          </div>
          <div className="listings__grid">
            {listProperties.length !== 0 ? listProperties : <h1>No results found</h1>}
          </div>
        </div>
      </div>
    </>
  );
};

export default Listing;

//  // Create an array of homeData values so we can loop through them...

//  if (bedValue !== "all") {
//   // Check how many beds we have...
// }

// if (bedValue === "all") {
//   // THEN we just ignore this step because we dont need to check a value to return.
// } else {
//   // Check WHAT our bed value is...
// }
