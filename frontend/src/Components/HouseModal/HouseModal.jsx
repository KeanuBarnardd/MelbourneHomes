import React from "react";
import { useState } from "react";
import { ImageSlider } from "../index";
import { houseData } from "../../Constants/homeData";

import "./HouseModal.scss";

const HouseModal = ({ homeData, toggleHouseModalHandler, featureTags }) => {
  return (
    <div className="modal__background">
      <div className="modal__content">
        <ImageSlider slides={homeData.images} />
        <div className="modal__content-parent">
          <div className="top-row">
            <p className="modal-price">
              ${homeData.price.toLocaleString("en-US")}
              {homeData.sellType === "purchase" ? "" : "/Weekly"}
            </p>
            <p className="type-tag">
              {homeData.sellType === "purchase" ? "For sale" : "For lease"}
            </p>
          </div>
          <h1>
            {homeData.address} - <span>{homeData.area}</span>
          </h1>
          <div className="modal__details-container">
            <div>
              <p className="features-title">Details</p>
              <p className="p-text">{homeData.description}</p>
              <div className="details-bottom">
                <div className="features__container">
                  <p className="features-title">Features</p>
                  <div className="features__tag-parent">
                    {featureTags.map((tag) => {
                      return <p className="features__tag">{tag}</p>;
                    })}
                  </div>
                </div>
                <div className="features__container">
                  <p className="features-title">Property Type</p>
                  <p className="features__tag type">{homeData.type} </p>
                </div>
              </div>
            </div>

            <div className="modal__rooms-container">
              <p className="rooms-tag">
                <i className="fa-solid fa-ruler-combined"></i>
                {homeData.squareFeet} Square Feet
              </p>
              <p className="rooms-tag">
                <i className="fa-solid fa-bed"></i>
                {homeData.baths} Bed
              </p>
              <p className="rooms-tag">
                <i className="fa-solid fa-shower"></i>
                {homeData.baths} Bath
              </p>
              <p className="rooms-tag">
                <i className="fa-solid fa-car"></i>
                {homeData.baths} Garage
              </p>
              <p className="rooms-tag">
                <i className="fa-solid fa-couch"></i>
                {homeData.living} Living
              </p>
            </div>
          </div>
        </div>
        <div className="modal__bottom-row">
          <div className="modal__button-container">
            <button className="btn contact">Contact us</button>
            <button className="btn contact">Requst Info</button>
          </div>
          <button
            className="btn close"
            onClick={() => {
              toggleHouseModalHandler();
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default HouseModal;
