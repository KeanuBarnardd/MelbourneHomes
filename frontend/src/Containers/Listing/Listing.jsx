import React, { useState } from "react";
import "./Listing.scss";
import { ListSearch, HouseCard } from "../../Components/index";
import { houseData } from "../../Constants/homeData";

const Listing = ({
  isBuying,
  setIsBuying,
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
  features,
  setFeatures,
}) => {
  const featuresList = [
    "Aircon",
    "Pool",
    "Study",
    "Dishwasher",
    "WIR",
    "Heating",
    "Solar",
    "Outdoor",
    "Balcony",
  ];

  const [filteredHouseData, setFilteredHouseData] = useState(houseData);

  const filteredList = filteredHouseData.filter(function (home) {
    let saleType = "purchase";
    isBuying ? (saleType = "purchase") : (saleType = "rent");

    if (
      (home.baths === bathValue || bathValue === "all") &&
      (home.beds === bedValue || bedValue === "all") &&
      (home.living === livingValue || livingValue === "all") &&
      (home.garage === garageValue || garageValue === "all") &&
      home.price <= maxValue &&
      home.price >= minValue &&
      home.squareFeet >= squareFoot &&
      home.sellType === saleType
    ) {
      return home;
    }
  });

  const featuredFilteredList = filteredList.filter(function (home) {
    for (let x = 0; x < home.filters.length; x++) {
      for (let i = 0; i < features.length; i++) {
        let keyVal = Object.keys(home.filters[x]).toString();
        let fVal = features[i];
        if (keyVal === fVal) {
          const objVal = Object.values(home.filters[x]).toString();
          if (objVal === "true") {
            return home;
          }
        }
      }
    }
  });

  const listProperties = featuredFilteredList.map((home, index) => {
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

  const selectChangeFilter = (e) => {
    if (e.target.value === "none") {
      setFilteredHouseData(houseData);
    }
    if (e.target.value === "low_to_high") {
      console.log("Lowest to Highest");
      const lowestToHighest = featuredFilteredList.sort((a, b) => {
        return a.price - b.price;
      });
      setFilteredHouseData(lowestToHighest);
    }
    if (e.target.value === "high_to_low") {
      const highestToLowest = featuredFilteredList.sort((a, b) => {
        return b.price - a.price;
      });
      setFilteredHouseData(highestToLowest);
    }
  };

  return (
    <>
      <ListSearch
        setIsBuying={setIsBuying}
        isBuying={isBuying}
        getLocationHandler={getLocationHandler}
        getMinValueHandler={getMinValueHandler}
        getMaxValueHandler={getMaxValueHandler}
        getSquareFootHandler={getSquareFootHandler}
        getBedHandler={getBedHandler}
        getBathHandler={getBathHandler}
        getGarageHandler={getGarageHandler}
        getLivingHandler={getLivingHandler}
        submitSearch={submitSearch}
        features={features}
        setFeatures={setFeatures}
        featuresList={featuresList}
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
              <select
                onChange={(e) => {
                  selectChangeFilter(e);
                }}
                name=""
                id=""
              >
                <option value="none">None</option>
                <option value="low_to_high">Low to High</option>
                <option value="high_to_low">High to low</option>
              </select>
            </div>
          </div>
          <div className="listings__grid">
            {listProperties.length !== 0 ? (
              listProperties
            ) : (
              <div className="no__results-container">
                <h1 className="content__title-text">
                  No
                  <span>Results</span> found
                </h1>
                <p className="p-text">
                  Can't seem to find any houses your looking for. Try adjusting your search.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Listing;
