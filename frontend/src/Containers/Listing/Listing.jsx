import React from "react";
import "./Listing.scss";

import { ListSearch, HouseCard, HouseModal } from "../../Components/index";
 import { houseData } from "../../Constants/homeData";

const Listing = ({ totalProperties }) => {
  const listProperties = houseData.map((home, index) => {
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
        
      />
    );
  });

  return (
    <>
      <ListSearch />
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
                Showing <span>10</span> total properties
              </p>
              <select name="" id="">
                <option value="">Most Recent</option>
                <option value="">Least Recent</option>
                <option value="">Price- Low to High</option>
                <option value="">Price- High to low</option>
              </select>
            </div>
          </div>
          <div className="listings__grid">{listProperties}</div>
        </div>
      </div>
    </>
  );
};

export default Listing;
