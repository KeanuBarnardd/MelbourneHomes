import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Contact, Listing, Services, Agents, Featured, About } from "./Containers/index";
import { Navbar, Footer } from "./Components/index";
import "./App.scss";

const App = () => {
  return (
    <BrowserRouter>
    <div className="portal"></div>
      <Navbar />
      <div >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listings" element={<Listing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/agents" element={<Agents />} />
          <Route path="/featured" element={<Featured />} />
          <Route path="/about" element={<About/>}/>
        </Routes>
      </div>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
