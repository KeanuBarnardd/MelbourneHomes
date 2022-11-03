import React, { useState } from "react";

import "./FeatureCheckBox.scss";

const FeatureCheckBox = ({ text, featureArray, feature }) => {
  const [toggleFeature, setToggleFeature] = useState(false);

  const addFeature = () => {
    // Add this to our Array
  };

  const removeFeature = () => {
    // Remove it from our Array
  };

  const toggleFeatureHandler = () => {
    toggleFeature ? setToggleFeature(false) : setToggleFeature(true);
  };

  return (
    <button
      className={`feature__check ${toggleFeature ? "active" : ""}`}
      onClick={toggleFeatureHandler}
    >
      {text}
    </button>
  );
};

export default FeatureCheckBox;
