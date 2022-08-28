import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
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
          <div className="navbar__bottom-content price-nav">
            <div className="input-container">
              <input type="text" placeholder="Enter your minimum" />
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
          <div className="navbar__bottom-content rooms-nav">
            <div className="input-container"></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default ListSearch;
