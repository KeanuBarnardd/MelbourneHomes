import React from "react";

import { ImageSlider } from "../index";
import { houseData } from "../../Constants/homeData";

import "./HouseModal.scss";

const HouseModal = ({ address, toggleHouseModalHandler }) => {
  const data = houseData[0];

  return (
    <div className="modal__background">
      <div className="modal__content">
        <ImageSlider slides={data.images} />
        <div className="modal__content-parent">
          <div className="modal__details-container">
            <h2 className="price">${data.price}</h2>
            <h1>{data.address}</h1>
            <p className="p-text">{data.description}</p>
          </div>
          <div className="modal__filters-container">
            <p className="filter-tag">Aircon</p>
            <p className="filter-tag">Helo</p>
            <p className="filter-tag">Beef</p>
            <p className="filter-tag">Chicken</p>
            <p className="filter-tag">Aircon</p>
            <p className="filter-tag">Aircon</p>
            <p className="filter-tag">Im fat</p>
            <p className="filter-tag">Aircon</p>
            <p className="filter-tag">Aircon</p>
            <p className="filter-tag">Aircon</p>
          </div>
        </div>

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
