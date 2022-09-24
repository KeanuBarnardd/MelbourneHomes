import React from "react";
import { useState } from "react";

import "./HouseCard.scss";

import { InfoModal, HouseModal } from "../index";

// Icons
import FavoriteIcon from "@mui/icons-material/Favorite";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import BedIcon from "@mui/icons-material/Bed";
import ShowerIcon from "@mui/icons-material/Shower";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

const HouseCard = ({
 homeData, id
}) => {
  const [toggleHouseModal, setToggleHouseModal] = useState(false);

  const toggleHouseModalHandler = () => {
    toggleHouseModal ? setToggleHouseModal(false) : setToggleHouseModal(true);
  };

  return (
    <div className="housecard__container">
      <div className="housecard__img" style={{ backgroundImage: `url(${homeData.images[0]})` }}>
        <div className="image__top">
          <p className="image-tag">{homeData.listedTime} Days Ago</p>
          <p className="image-tag">For {homeData.sellType}</p>
        </div>
        <div className="image__bottom">
          <button className="image-tag">
            <CameraAltIcon /> {homeData.images.length}
          </button>
        </div>
      </div>
      <div className="housecard-content">
        <div className="housecard__container-top-row-details">
          <p className="price">
            ${homeData.price.toLocaleString("en-US")}
            {homeData.sellType === "purchase" ? "" : "/Weekly"}
          </p>
          <div className="interactions__container">
            <button className="interaction__btn">
              <PhoneIcon className="interaction__btn-logo" />
            </button>
            <button className="interaction__btn">
              <FavoriteIcon className="interaction__btn-logo" />
            </button>
            <button className="interaction__btn">
              <EmailIcon className="interaction__btn-logo" />
            </button>
          </div>
        </div>
        <h1>{homeData.address}</h1>
        <div className="details__container">
          <p>{homeData.description}</p>
        </div>

        <div className="housecard__grid">
          <p>
            <SquareFootIcon className="" />
            {homeData.squareFeet} Sqft
          </p>
          <p>
            <BedIcon className="" />
            {homeData.beds} Beds
          </p>
          <p>
            <ShowerIcon className="" />
            {homeData.baths} Baths
          </p>
        </div>
        <div className="housecard__buttons-container">
          <button className="housecard__btn">Request Info</button>
          <button
            onClick={() => {
              toggleHouseModalHandler();
            }}
            className="housecard__btn"
          >
            View Details
          </button>
        </div>
      </div>
      {toggleHouseModal && <HouseModal homeData={homeData} toggleHouseModalHandler={toggleHouseModalHandler} />}
    </div>
  );
};

export default HouseCard;
