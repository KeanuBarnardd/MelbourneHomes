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
    features: [],
  });

  const [location, setLocation] = useState("");
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(1800000);
  const [bedValue, setBedValue] = useState("all");
  const [bathValue, setBathValue] = useState("all");
  const [livingValue, setLivingValue] = useState("all");
  const [garageValue, setGarageValue] = useState("all");
  const [squareFoot, setSquareFoot] = useState(0);
  const [features, setFeatures] = useState([]);

  // Location, Min Max, Bed, Bath, Garage, Living , SquareFoot, House Type, Features

  const getMinValueHandler = (e) => {
    setMinValue(e.target.value);
  };

  const getMaxValueHandler = (e) => {
    setMaxValue(e.target.value);
  };

  const getSquareFootHandler = (e) => {
    setSquareFoot(e.target.value);
    console.log(squareFoot);
  };

  const getBedHandler = (e) => {
    e.target.value !== "all" ? setBedValue(parseInt(e.target.value)) : setBedValue("all");
  };

  const getBathHandler = (e) => {
    e.target.value !== "all" ? setBathValue(parseInt(e.target.value)) : setBathValue("all");
  };

  const getGarageHandler = (e) => {
    e.target.value !== "all" ? setGarageValue(parseInt(e.target.value)) : setGarageValue("all");
  };

  const getLivingHandler = (e) => {
    e.target.value !== "all" ? setLivingValue(parseInt(e.target.value)) : setLivingValue("all");
  };

  const submitSearch = () => {
    // Update all the info on Submit
    console.log("Search is being Submitted");
    console.log(bathValue);
  };

  return (
    <BrowserRouter>
      <div className="portal"></div>
      <button
        onClick={() => {
          console.log(squareFoot);
        }}
      >
        Test button
      </button>
      <Navbar />
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <Home
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
                features={features}
                garageValue={garageValue}
                getMinValueHandler={getMinValueHandler}
                getMaxValueHandler={getMaxValueHandler}
                getBedHandler={getBedHandler}
                getBathHandler={getBathHandler}
                getGarageHandler={getGarageHandler}
                getLivingHandler={getLivingHandler}
                getSquareFootHandler={getSquareFootHandler}
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
