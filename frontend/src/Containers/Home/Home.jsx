import React from "react";
import "./Home.scss";
import { images } from "../../Constants/index";
import SearchHeader from "./../../Components/SearchHeader/SearchHeader";
import { ExploreCard } from "../../Components";

const Home = () => {
  return (
    <div className="app__flex">
      <div className="app__container-width">
        <header className="header" style={{ backgroundImage: `url(${images.header1})` }}>
          <SearchHeader />
        </header>
        <div className="page__content">
          <h1 className="content-title"> <span>Exploring</span>  all things property</h1>
          <div className="explore__buttons-container">
            <button className="explore-btn active">Buying</button>
            <button className="explore-btn">Renting</button>
            <button className="explore-btn">Selling</button>
            <button className="explore-btn">Researching</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
