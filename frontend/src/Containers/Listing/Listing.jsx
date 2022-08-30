import React from "react";
import "./Listing.scss";
import ListSearch from "./../../Components/ListSearch/ListSearch";
import HouseCard from "./../../Components/HouseCard/HouseCard";
import {images} from "../../Constants/index";
const Listing = ({ totalProperties }) => {
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
            <p> Showing <span>10</span> total properties</p>
              <select name="" id="">
                <option value="">Most Recent</option>
                <option value="">Least Recent</option>
                <option value="">Price- Low to High</option>
                <option value="">Price- High to low</option>
              </select>
            </div>
          </div>
          <div className="listings__grid">
          <HouseCard
              postedAgo={"3"}
              sellType="Rent"
              title="13 Averson Road"
              price={500}
              payType="Week"
              image={images.house1_1}
              details="Beautiful water front city house with a dream view."
              square={5000}
              beds={2}
              baths={2}
            />
            <HouseCard
              postedAgo={"3"}
              sellType="Rent"
              title="13 Averson Road"
              price={500}
              payType="Week"
              image={images.house2_2}
              details="Beautiful water front city house with a dream view."
              square={5000}
              beds={2}
              baths={2}
            />
            <HouseCard
              postedAgo={"3"}
              sellType="Rent"
              title="13 Averson Road"
              price={500}
              payType="Week"
              image={images.house4_1}
              details="Beautiful water front city house with a dream view."
              square={5000}
              beds={2}
              baths={2}
            />
<HouseCard
              postedAgo={"3"}
              sellType="Rent"
              title="13 Averson Road"
              price={500}
              payType="Week"
              image={images.house1_1}
              details="Beautiful water front city house with a dream view."
              square={5000}
              beds={2}
              baths={2}
            />
            <HouseCard
              postedAgo={"3"}
              sellType="Rent"
              title="13 Averson Road"
              price={500}
              payType="Week"
              image={images.house2_7}
              details="Beautiful water front city house with a dream view."
              square={5000}
              beds={2}
              baths={2}
            />
            <HouseCard
              postedAgo={"3"}
              sellType="Rent"
              title="13 Averson Road"
              price={500}
              payType="Week"
              image={images.house4_5}
              details="Beautiful water front city house with a dream view."
              square={5000}
              beds={2}
              baths={2}
            />


          </div>
        </div>
      </div>
    </>
  );
};

export default Listing;
