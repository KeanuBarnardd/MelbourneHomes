import React from "react";
import { useState } from "react";

import "./ImageSlider.scss";

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);


  

  return (
    <div
      className="image__slider"
      style={{ backgroundImage: `url(${slides[currentIndex]})` }}
    >
      <div className="left-arrow">Left</div>
      <div className="right-arrow">Right</div>
    </div>
  );
};

export default ImageSlider;
