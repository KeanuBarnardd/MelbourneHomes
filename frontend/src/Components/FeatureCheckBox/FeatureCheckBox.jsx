import React, { useState } from "react";

import "./FeatureCheckBox.scss";

const FeatureCheckBox = ({ text, feature, features, setFeatures }) => {
  const [toggleFeature, setToggleFeature] = useState(true);
  const [featureType, setFeatureType] = useState(feature);

  const addFeature = () => {
    console.log("Add Feature");
    // Add this to our Array
    if (toggleFeature === false) {
      setFeatures([...features, feature]);
    }
    console.log(features);
  };

  const removeFeature = () => {
    if (toggleFeature === true) {
      // Remove Item from Array
      let index = features.findIndex((f) => {
        return f === feature;
      });
      if (index !== -1) {
        console.log(`${feature} is at index [${index}]`);
        // Remove Feature from list...
        let newList = features;
        newList.splice(index, 1);
        setFeatures([...newList]);
      } else {
        return console.warn("Cannot find feature type index");
      }
    }
    console.log(features);
  };

  const toggleFeatureHandler = () => {
    if (toggleFeature) {
      setToggleFeature(false);
      removeFeature();
    } else {
      setToggleFeature(true);
      addFeature();
    }
  };

  const hello = () => {
    toggleFeature ? setToggleFeature(false) : setToggleFeature(true);
    addFeature();
    console.log(features);
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
