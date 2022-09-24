import React from "react";

import { ImageSlider } from "../index";
import { houseData } from "../../Constants/homeData";
import "./HouseModal.scss";

const HouseModal = ({ houseId, toggleHouseModalHandler }) => {
  return (
    <div className="modal__background app__flex">
      <ImageSlider slides={houseData[0].images}/>
      <div className="modal__content">
        House Modal
        <button
          onClick={() => {
            toggleHouseModalHandler();
          }}
        >
          Close Button
        </button>
      </div>
    </div>
  );
};

export default HouseModal;
