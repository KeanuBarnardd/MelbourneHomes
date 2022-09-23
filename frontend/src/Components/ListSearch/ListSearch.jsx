import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import BedIcon from "@mui/icons-material/Bed";
import ShowerIcon from "@mui/icons-material/Shower";
import TimeToLeaveIcon from "@mui/icons-material/TimeToLeave";
import ChairIcon from "@mui/icons-material/Chair";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import "./ListSearch.scss";

const ListSearch = () => {
  return (
    <nav className="app__flex search-navbar">
      <div className="app__container-width navbar__container">
        <div className="navbar__top">
          <div className="input-container">
            <input type="text" placeholder="Search region suburb or postcode" />
            <button>
              <SearchIcon className="icon" />
            </button>
          </div>
          <button className="searchList-btn">
            Price
            <KeyboardArrowDownIcon className="arrow-down" />
          </button>
          <button className="searchList-btn">
            Rooms
            <KeyboardArrowDownIcon className="arrow-down" />
          </button>
          <button className="searchList-btn">
            Type
            <KeyboardArrowDownIcon className="arrow-down" />
          </button>
          <button className="searchList-btn">
            Filter
            <KeyboardArrowDownIcon className="arrow-down" />
          </button>
        </div>
        <div className="navbar__bottom">
          {/* PRICE CONTAINER */}
          <div className="navbar__bottom-content price-nav active">
            <div className="input-container">
              <input type="text" placeholder="Enter your minimum"  />
              <button>Min</button>
            </div>
            <div className="input-container">
              <input type="text" placeholder="Enter your maximum" />
              <button>Max</button>
            </div>
            <button>Clear</button>
            <button>Confirm</button>
          </div>
          {/* ROOMS CONTAINER */}
          <div className="navbar__bottom-content rooms-nav active">
            <div className="input-container">
              <select name="" id="">
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
                <option value="">4+</option>
              </select>
              <div className="select__type">
                <BedIcon />
                Bedrooms
              </div>
            </div>
            <div className="input-container">
              <select name="" id="">
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
                <option value="">4+</option>
              </select>
              <div className="select__type">
                <ShowerIcon />
                Bath
              </div>
            </div>
            <div className="input-container">
              <select name="" id="">
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
                <option value="">4+</option>
              </select>
              <div className="select__type">
                <TimeToLeaveIcon />
                Garage
              </div>
            </div>
            <div className="input-container">
              <select name="" id="">
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
                <option value="">4+</option>
              </select>
              <div className="select__type">
                <ChairIcon />
                Living
              </div>
            </div>
            <button>Clear</button>
            <button>Confirm</button>
          </div>
          {/* TYPE CONTAINER */}
          <div className="navbar__bottom-content type-nav active">
            <div className="input-container">
              <input type="text" />
              <button>
                <SquareFootIcon />
                Sqft
              </button>
            </div>
            <button>Apartment</button>
            <button>House</button>
            <button>Commercial</button>
            <button>Other</button>
            <button>Apartment</button>
          </div>
          {/* FILTER CONTAINER */}
          <div className="navbar__bottom-content filter active">
            <button>Aircon</button>
            <button>Pool</button>
            <button>Study</button>
            <button>Dishwasher</button>
            <button>Built in robes</button>
            <button>Heating</button>
            <button>Solar Panels</button>
            <button>Outdoor area</button>
            <button>balcony</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default ListSearch;
