import React from "react";
import { useState } from "react";
import { ImageSlider } from "../index";
import { houseData } from "../../Constants/homeData";
import { Link } from "react-router-dom";
import "./HouseModal.scss";

const HouseModal = ({
  homeData,
  toggleHouseModalHandler,
  toggleAgentModalHandler,
  featureTags,
}) => {
  return (
    <div className="modal__background">
      <div className="modal__content">
        <ImageSlider
          daysPosted={homeData.listedTime}
          slides={homeData.images}
          sellType={homeData.sellType}
        />
        <div className="modal__content-parent">
          <div className="top-row">
            <div className="features__container">
              <div className="features__tag-parent">
                {featureTags.map((tag, index) => {
                  return (
                    <p className="features__tag" key={index}>
                      {tag}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
          <p className="modal-price">
            ${homeData.price.toLocaleString("en-US")}
            {homeData.sellType === "purchase" ? "" : "/Weekly"}
          </p>
          <h1>
            {homeData.address} - <span>{homeData.area}</span>
          </h1>
          <div className="modal__details-container">
            <div>
              <p className="p-text">{homeData.description}</p>
              <div className="details-bottom">
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

            <div className="modal__rooms-container"></div>
          </div>
        </div>
        <div className="modal__bottom-row">
          <div className="modal__button-container">
            <Link className="btn contact" to="/contact">
              Contact us
            </Link>

            <button
              className="btn contact"
              onClick={() => {
                toggleAgentModalHandler();
              }}
            >
              Requst Info
            </button>
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
