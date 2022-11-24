import React from "react";
import "./SearchHeader.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
// Icons
import SearchIcon from "@mui/icons-material/Search";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import BedIcon from "@mui/icons-material/Bed";
import ShowerIcon from "@mui/icons-material/Shower";
import TimeToLeaveIcon from "@mui/icons-material/TimeToLeave";
import SquareFootIcon from "@mui/icons-material/SquareFoot";

const SearchHeader = ({
  getLocationHandler,
  getMinValueHandler,
  getMaxValueHandler,
  getBedHandler,
  getBathHandler,
  getGarageHandler,
  submitSearch,
  setIsBuying,
  getSquareFootHandler,
}) => {
  const [isRent, setIsRent] = useState(false);

  return (
    <div className="search__header-form">
      <div className="input-field"></div>

      <div className="search__input-field">
        <AttachMoneyIcon className="input-icon" />
        <div className="search__input-container">
          <p>Minimum Price</p>
          <input placeholder="$2000" type="text" onChange={getMinValueHandler} />
        </div>
      </div>

      <div className="search__input-field">
        <AttachMoneyIcon className="input-icon" />
        <div className="search__input-container">
          <p>Maximum Price</p>
          <input placeholder="$550000" type="text" onChange={getMaxValueHandler} />
        </div>
      </div>

      <div className="search__input-field">
        <BedIcon className="input-icon" />
        <div className="search__input-container">
          <p>Bedrooms</p>
          <select onChange={getBedHandler} name="" id="bed-select">
            <option value="all">All</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4+</option>
          </select>
        </div>
      </div>

      <div className="search__input-field">
        <ShowerIcon className="input-icon" />
        <div className="search__input-container">
          <p>Bathrooms</p>
          <select onChange={getBathHandler} name="" id="bed-select">
            <option value="all">All</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4+</option>
          </select>
        </div>
      </div>

      <Link to="/listings" className="search__btn" type="submit">
        <i className="fa-solid fa-search"></i>
      </Link>
    </div>
  );
};

export default SearchHeader;

/*
<div className="select__section">
        <button
          onClick={() => {
            setIsRent(false);
            setIsBuying(true);
          }}
          className={`select-section__button ${isRent !== true ? "active" : ""}`}
        >
          Buy
        </button>
        <button
          onClick={() => {
            setIsRent(true);
            setIsBuying(false);
          }}
          className={`select-section__button ${isRent ? "active" : ""}`}
        >
          Rent
        </button>
      </div>

*/
