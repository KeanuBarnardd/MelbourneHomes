import React from "react";
import { useState } from "react";

import "./ImageSlider.scss";

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [toggleArrows, setToggleArrows] = useState(false);

  // Functionality
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div
      onMouseLeave={() => setToggleArrows(false)}
      onMouseEnter={() => setToggleArrows(true)}
      className="image__slider"
      style={{ backgroundImage: `url(${slides[currentIndex]})` }}
    >
      <div onClick={goToPrevious} className={`left-arrow arrow ${toggleArrows ? "active" : ""}`}>
        <i className="fa-solid fa-caret-left"></i>
      </div>
      <div onClick={goToNext} className={`right-arrow arrow ${toggleArrows ? "active" : ""}`}>
        <i className="fa-solid fa-caret-right"></i>
      </div>

      <div className="image__count">
        <i className="fa-solid fa-camera"></i>
        <p> {currentIndex + 1}/{slides.length}</p>
      </div>
    </div>
  );
};

export default ImageSlider;
