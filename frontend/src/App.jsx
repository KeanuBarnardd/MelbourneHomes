import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Contact, Listing, Services, Agents, Featured } from "./Containers/index";
import { Navbar } from "./Components/index";
import "./App.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listings" element={<Listing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/agents" element={<Agents />} />
          <Route path="/featured" element={<Featured />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
