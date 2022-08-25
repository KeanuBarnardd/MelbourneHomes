import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar, Home, Contact, Listing, Services, Agents } from "./Containers/index";
const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route to="/" element={<Home/>} />
        <Route to="/listing" element={<Listing/>} />
        <Route to="/contact" element={<Contact/>} />
        <Route to="/services" element={<Services/>} />
        <Route to="/agents" element={<Agents/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
