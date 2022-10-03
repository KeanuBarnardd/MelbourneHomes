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
}) => {
  const [isRent, setIsRent] = useState(false);

  return (
    <div className="search__header-form">
      <div className="select__section">
        <button
          onClick={() => setIsRent(false)}
          className={`select-section__button ${isRent !== true ? "active" : ""}`}
        >
          Buy
        </button>
        <button
          onClick={() => setIsRent(true)}
          className={`select-section__button ${isRent ? "active" : ""}`}
        >
          Rent
        </button>
      </div>
      <div className="input-field">
        <p>Location</p>
        <input type="text" onChange={getLocationHandler}></input>
        <SearchIcon className="input-icon" />
      </div>
      <div className="form-row rooms">
        <div className="input-field">
          <p>Min</p>
          <input type="text" onChange={getMinValueHandler}></input>
          <AttachMoneyIcon className="input-icon" />
        </div>
        <div className="input-field">
          <p>Max</p>
          <input type="text" onChange={getMaxValueHandler} />
          <AttachMoneyIcon className="input-icon" />
        </div>
      </div>
      <div className="form-row">
        <div className="input-field">
          <p>Bed</p>
          <select onChange={getBedHandler} name="" id="bed-select">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4+</option>
          </select>
          <BedIcon className="input-icon" />
        </div>
        <div className="input-field">
          <p>Bath</p>
          <select onChange={getBathHandler} name="" id="bath-select">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4+</option>
          </select>
          <ShowerIcon className="input-icon" />
        </div>
        <div className="input-field">
          <p>Garage</p>
          <select onChange={getGarageHandler} name="" id="garage-select">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4+</option>
          </select>
          <TimeToLeaveIcon className="input-icon" />
        </div>
      </div>
      <button onClick={() => submitSearch()} className="search__btn" type="submit">
        Search
      </button>
    </div>
  );
};

export default SearchHeader;
