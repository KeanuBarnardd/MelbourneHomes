import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { Home, Contact, Listing, Services, Agents, Featured, About } from "./Containers/index";
import { Navbar, Footer } from "./Components/index";
import "./App.scss";

const App = () => {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(1800000);
  const [bedValue, setBedValue] = useState("all");
  const [bathValue, setBathValue] = useState("all");
  const [livingValue, setLivingValue] = useState("all");
  const [garageValue, setGarageValue] = useState("all");
  const [squareFoot, setSquareFoot] = useState(0);
  const [features, setFeatures] = useState([
    "Aircon",
    "Pool",
    "Study",
    "Dishwasher",
    "WIR",
    "Heating",
    "Solar",
    "Outdoor",
    "Balcony",
  ]);

  const resetFeatures = [
    "Aircon",
    "Pool",
    "Study",
    "Dishwasher",
    "WIR",
    "Heating",
    "Solar",
    "Outdoor",
    "Balcony",
  ];

  const [isBuying, setIsBuying] = useState(true);

  const getMinValueHandler = (e) => {
    setMinValue(e.target.value);
  };
  const getMaxValueHandler = (e) => {
    setMaxValue(e.target.value);
  };
  const getSquareFootHandler = (e) => {
    setSquareFoot(e.target.value);
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

  const resetFeaturesHandler = () => {
    setFeatures(resetFeatures);

    setMinValue(0);
    setMaxValue(1800000);
    setBedValue("all");
    setBathValue("all");
    setLivingValue("all");
    setGarageValue("all");
    setSquareFoot(0);

    console.log(
      `${minValue} ${maxValue} ${bedValue} ${bathValue} ${livingValue} ${garageValue} ${squareFoot}`
    );
  };

  return (
    <BrowserRouter>
      <Navbar resetFeaturesHandler={resetFeaturesHandler} />
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
                setIsBuying={setIsBuying}
                getSquareFootHandler={getSquareFootHandler}
              />
            }
          />
          <Route
            path="/listings"
            element={
              <Listing
                setIsBuying={setIsBuying}
                isBuying={isBuying}
                minValue={minValue}
                maxValue={maxValue}
                bedValue={bedValue}
                bathValue={bathValue}
                livingValue={livingValue}
                squareFoot={squareFoot}
                features={features}
                setFeatures={setFeatures}
                garageValue={garageValue}
                getMinValueHandler={getMinValueHandler}
                getMaxValueHandler={getMaxValueHandler}
                getBedHandler={getBedHandler}
                getBathHandler={getBathHandler}
                getGarageHandler={getGarageHandler}
                getLivingHandler={getLivingHandler}
                getSquareFootHandler={getSquareFootHandler}
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
