import React, { useState } from "react";
import { FeatureCheckBox } from "../index";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import BedIcon from "@mui/icons-material/Bed";
import ShowerIcon from "@mui/icons-material/Shower";
import TimeToLeaveIcon from "@mui/icons-material/TimeToLeave";
import ChairIcon from "@mui/icons-material/Chair";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import "./ListSearch.scss";
import { houseData } from "../../Constants/homeData";

const ListSearch = ({
  isBuying,
  setIsBuying,
  getMinValueHandler,
  getMaxValueHandler,
  getBedHandler,
  getBathHandler,
  getGarageHandler,
  getSquareFootHandler,
  getLivingHandler,
  features,
  setFeatures,
  featuresList,
}) => {
  const [toggleFilters, setToggleFilters] = useState(false);
  const [toggleRooms, setToggleRooms] = useState(false);

  const displayFiltersNav = () => {
    setToggleRooms(false);
    toggleFilters ? setToggleFilters(false) : setToggleFilters(true);
  };

  const displayRoomNav = () => {
    setToggleFilters(false);
    toggleRooms ? setToggleRooms(false) : setToggleRooms(true);
  };

  return (
    <nav className="app__flex search-navbar">
      <div className="app__container-width navbar__container">
        <div className="navbar__top">
          <div className="buy__select-container">
            <button
              onClick={() => {
                setIsBuying(true);
              }}
              className={`buy-btn ${isBuying ? "active" : ""}`}
            >
              Buy
            </button>
            <button
              onClick={() => {
                setIsBuying(false);
              }}
              className={`rent-btn ${isBuying !== true ? "active" : ""}`}
            >
              Rent
            </button>
          </div>

          <div className="input-container">
            <input onChange={getMinValueHandler} type="text" placeholder="Enter your minimum" />
            <button>Min</button>
          </div>
          <div className="input-container">
            <input onChange={getMaxValueHandler} type="text" placeholder="Enter your maximum" />
            <button>Max</button>
          </div>
          <div className="filter__container">
            <button
              onClick={displayRoomNav}
              className={`searchList-btn room ${toggleRooms ? "active" : ""}`}
            >
              Rooms
              <KeyboardArrowDownIcon className="arrow-down" />
            </button>
            <button
              onClick={displayFiltersNav}
              className={`searchList-btn fill ${toggleFilters ? "active" : ""}`}
            >
              Filters
              <KeyboardArrowDownIcon className="arrow-down" />
            </button>
          </div>
        </div>
        <div className="navbar__bottom">
          {/* ROOMS CONTAINER */}
          <div className={`navbar__bottom-content rooms-nav ${toggleRooms ? "active" : ""}`}>
            <div className="input-container">
              <select onChange={getBedHandler} name="" id="">
                <option value="all">All</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              <div className="select__type max-w">
                <BedIcon />
                Bedrooms
              </div>
            </div>
            <div className="input-container">
              <select onChange={getBathHandler} name="" id="">
                <option value="all">All</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4+</option>
              </select>
              <div className="select__type max-w">
                <ShowerIcon />
                Bath
              </div>
            </div>
            <div className="input-container">
              <select onChange={getGarageHandler} name="bath-value" id="">
                <option value="all">All</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4+</option>
              </select>
              <div className="select__type max-w">
                <TimeToLeaveIcon />
                Garage
              </div>
            </div>
            <div className="input-container">
              <select onChange={getLivingHandler} name="" id="">
                <option value="all">All</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4+</option>
              </select>
              <div className="select__type max-w">
                <ChairIcon />
                Living
              </div>
            </div>
          </div>
          {/* TYPE CONTAINER */}
          <div className={`navbar__bottom-content filter ${toggleFilters ? "active" : ""}`}>
            <div className="input-container">
              <input
                onChange={getSquareFootHandler}
                type="text"
                placeholder="Enter your mininmun size in feet"
              />
              <button>
                <SquareFootIcon />
                Sqft
              </button>
            </div>
            {featuresList.map((featureBtn, idx) => {
              return (
                <FeatureCheckBox
                  key={idx}
                  text={featureBtn}
                  feature={featureBtn}
                  features={features}
                  setFeatures={setFeatures}
                />
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default ListSearch;
