import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import "./HouseCard.scss";

import { InfoModal, HouseModal, AgentModal } from "../index";

// Icons
import FavoriteIcon from "@mui/icons-material/Favorite";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import BedIcon from "@mui/icons-material/Bed";
import ShowerIcon from "@mui/icons-material/Shower";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

const HouseCard = ({
  title,
  image,
  postedAgo,
  price,
  beds,
  baths,
  sellType,
  square,
  totalImages,
  details,
  homeData,
  agentData,
  listProperties,
}) => {
  const [toggleHouseModal, setToggleHouseModal] = useState(false);
  const [toggleAgentModal, setToggleAgentModal] = useState(false);
  const [featureTags, setFeatureTags] = useState([]);

  const toggleHouseModalHandler = () => {
    setToggleAgentModal(false);
    toggleHouseModal ? setToggleHouseModal(false) : setToggleHouseModal(true);
  };

  const toggleAgentModalHandler = () => {
    // Disable in case the house Modal is open
    setToggleHouseModal(false);
    toggleAgentModal ? setToggleAgentModal(false) : setToggleAgentModal(true);
  };

  function displayFilterTags() {
    const newTagsArray = [];
    for (let i = 0; i < homeData.filters.length; i++) {
      // Gets the name of our Objects Key at our I position...
      var keyValue = Object.keys(homeData.filters[i]);
      // Checks if that Object Key's value property is true...
      if (homeData.filters[i][keyValue] === true) {
        newTagsArray.push(keyValue.toString());
      }
    }
    setFeatureTags(newTagsArray);
  }

  return (
    <div className={`housecard__container ${listProperties.length < 2 ? "max-width" : ""}`}>
      <div className="housecard__img" style={{ backgroundImage: `url(${image})` }}>
        <div className="image__top">
          <p className="image-tag">{postedAgo} Days Ago</p>
          <p className="image-tag">For {sellType}</p>
        </div>
        <div className="image__bottom">
          <button
            onClick={() => {
              toggleHouseModalHandler();
              displayFilterTags();
            }}
            className="image-tag"
          >
            <CameraAltIcon /> {totalImages}
          </button>
        </div>
      </div>
      <div className="housecard-content">
        <div className="housecard__container-top-row-details">
          <p className="price">
            ${price.toLocaleString("en-US")}
            {sellType === "purchase" ? "" : "/Weekly"}
          </p>
        </div>
        <h1>{title}</h1>
        <div className="details__container">
          <p>{details}</p>
        </div>
        <hr />
        <div className="housecard__grid">
          <p>
            <SquareFootIcon className="housecard__icon" />
            {square} Sqft
          </p>
          <p>
            <BedIcon className="housecard__icon" />
            {beds} Bedroom
          </p>
          <p>
            <ShowerIcon className="housecard__icon" />
            {baths} Bathroom
          </p>
        </div>
        <div className="housecard__buttons-container">
          <button
            onClick={() => {
              toggleHouseModalHandler();
              displayFilterTags();
            }}
            className="housecard__btn"
          >
            View Details
          </button>
          <button
            onClick={() => {
              toggleAgentModalHandler();
            }}
            className="interaction__btn"
          >
            <PhoneIcon className="interaction__btn-logo" />
          </button>
        </div>
      </div>
      {toggleHouseModal && (
        <HouseModal
          homeData={homeData}
          featureTags={featureTags}
          toggleHouseModalHandler={toggleHouseModalHandler}
          toggleAgentModalHandler={toggleAgentModalHandler}
          id={`${homeData.key}x${homeData.address}-x`}
        />
      )}
      {toggleAgentModal && (
        <AgentModal agentData={agentData} toggleAgentModalHandler={toggleAgentModalHandler} />
      )}
    </div>
  );
};

export default HouseCard;
