import React from "react";
import "./Home.scss";
import { images } from "../../Constants/index";
import SearchHeader from "./../../Components/SearchHeader/SearchHeader";
import ExploreGrid from "../ExploreGrid/ExploreGrid";
import { Link } from "react-router-dom";
import { HouseCard } from "../../Components";


const Home = () => {
  return (
    <div className="app__flex">
      <div className="app__container-width">
        <header className="header" style={{ backgroundImage: `url(${images.header1})` }}>
          <SearchHeader />
        </header>
        <div className="page__content">
          <h1 className="content-title">
            {" "}
            <span>Exploring</span> all things property
          </h1>
          <div className="explore__buttons-container">
            <button className="explore-btn active">Buying</button>
            <button className="explore-btn">Renting</button>
            <button className="explore-btn">Selling</button>
            <button className="explore-btn">Researching</button>
          </div>
          <ExploreGrid />
        </div>
        <div className="page__content">
          <div className="dreamhouse__container">
            <img src={images.dreamHomeImage} alt="" />
            <div className="dreamhouse__container-content">
              <h2>
                Melbourne<span>Homes</span>
              </h2>
              <h1>Your dream home is one search away.</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae autem nihil dolores
                in, itaque laudantium voluptate?{" "}
              </p>
              <Link to="listings" className="link">
                <button>Find your home</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="page__content">
          <h1 className="content-title">
            Top <span>Features</span> this week
          </h1>
          <div className="house__grid">
          <HouseCard postedAgo={"3"} sellType="Rent" title="13 Averson Road" price={500} payType="Week" image={images.house1_1} details="Beautiful water front city house with a dream view." square={5000} beds={2} baths={2}/>
          <HouseCard postedAgo={"3"} sellType="Rent" title="13 Averson Road" price={500} payType="Week" image={images.house1_2} details="Beautiful water front city house with a dream view." square={5000} beds={2} baths={2}/>
          <HouseCard postedAgo={"3"} sellType="Rent" title="13 Averson Road" price={500} payType="Week" image={images.house1_3} details="Beautiful water front city house with a dream view." square={5000} beds={2} baths={2}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
