import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { Home, Contact, Listing, Services, Agents, Featured, About } from "./Containers/index";
import { Navbar, Footer } from "./Components/index";
import "./App.scss";

const App = () => {
  const [searchData, setSearchData] = useState({
    // Default State of our Search Data so when we search it will come up with results matching these...
    location: "",
    minValue: 100000,
    maxValue: 500000,
    bed: 3,
    bath: 2,
    garage: 1,
    living: 1,
    squareFoot: 4000,
    houseType: "house",
    features: [""],
  });

  const [location, setLocation] = useState("");
  const [minValue, setMinValue] = useState(100000);
  const [maxValue, setMaxValue] = useState(500000);
  const [bedValue, setBedValue] = useState(3);
  const [bathValue, setBathValue] = useState(2);
  const [livingValue, setLivingValue] = useState(1);
  const [squareFoot, setSquareFoot] = useState(4000);
  const [houseType, setHouseType] = useState("house");
  const [features, setFeatures] = useState([]);
  const [garageValue, setGarageValue] = useState(1);

  // Location, Min Max, Bed, Bath, Garage, Living , SquareFoot, House Type, Features

  const getLocationHandler = (e) => {
    setLocation(e.target.value);
  };

  const getMinValueHandler = (e) => {
    setMinValue(e.target.value);
  };

  const getMaxValueHandler = (e) => {
    setMaxValue(e.target.value);
  };

  const getBedHandler = (e) => {
    setBedValue(parseInt(e.target.value));
    console.log("Bed Handler");
  };

  const getBathHandler = (e) => {
    setBathValue(parseInt(e.target.value));
    console.log("Bath Handler");
  };

  const getGarageHandler = (e) => {
    setGarageValue(parseInt(e.target.value));
    console.log(e.target.value);
  };

  const getLivingHandler = (e) => {
    setLivingValue(parseInt(e.target.value ))
    
    console.log(e.target.value);
  };

  const getSquareFootHandler = (e) => {
    console.log(e.target.value);
  };

  const getHouseTypeHandler = (e) => {
    console.log(e.target.value);
  };

  const getFeaturesHandler = () => {};

  const submitSearch = () => {
    console.log("Search is being Submitted");
    console.log(bathValue);
  };

  return (
    <BrowserRouter>
      <div className="portal"></div>
      <Navbar />
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                getLocationHandler={getLocationHandler}
                getMinValueHandler={getMinValueHandler}
                getMaxValueHandler={getMaxValueHandler}
                getBedHandler={getBedHandler}
                getBathHandler={getBathHandler}
                getGarageHandler={getGarageHandler}
                submitSearch={submitSearch}
              />
            }
          />
          <Route
            path="/listings"
            element={
              <Listing
                location={location}
                minValue={minValue}
                maxValue={maxValue}
                bedValue={bedValue}
                bathValue={bathValue}
                livingValue={livingValue}
                squareFoot={squareFoot}
                houseType={houseType}
                features={features}
                garageValue={garageValue}
                getLocationHandler={getLocationHandler}
                getMinValueHandler={getMinValueHandler}
                getMaxValueHandler={getMaxValueHandler}
                getBedHandler={getBedHandler}
                getBathHandler={getBathHandler}
                getGarageHandler={getGarageHandler}
                getLivingHandler={getLivingHandler}
                submitSearch={submitSearch}
              />
            }
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/agents" element={<Agents />} />
          <Route path="/featured" element={<Featured />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
