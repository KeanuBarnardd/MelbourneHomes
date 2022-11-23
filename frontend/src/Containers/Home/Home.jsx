import React from "react";
import "./Home.scss";
import { images } from "../../Constants/index";
import SearchHeader from "./../../Components/SearchHeader/SearchHeader";
import ExploreGrid from "../ExploreGrid/ExploreGrid";
import { featuredHomes } from "../../Constants/homeData";
import { Link } from "react-router-dom";
import { HouseCard } from "../../Components";

const Home = ({
  getLocationHandler,
  getMinValueHandler,
  getMaxValueHandler,
  getBedHandler,
  getBathHandler,
  getGarageHandler,
  submitSearch,
  setIsBuying,
  getSquareFootHandler,
}) => {
  return (
    <div className="app__flex home">
      <header className="header app__flex" style={{ backgroundImage: `url(${images.header1})` }}>
        <div className="header__content app__container-width">
          <h1>Discover a place you will love to live. </h1>
          <p className="p-text">
            Connect with our experts to find the right home in Melbourne. We are the best real
            estate agents in Melbourne and have the best platform to find your place to live.
          </p>

          <SearchHeader
            getLocationHandler={getLocationHandler}
            getMinValueHandler={getMinValueHandler}
            getMaxValueHandler={getMaxValueHandler}
            getBedHandler={getBedHandler}
            getBathHandler={getBathHandler}
            getGarageHandler={getGarageHandler}
            submitSearch={submitSearch}
            setIsBuying={setIsBuying}
            getSquareFootHandler={getSquareFootHandler}
          />

          <div className="header__info-container">
            <div className="header__info-item">
              <h2>1500+</h2>
              <p>Property Ready</p>
            </div>
            <div className="header__info-item">
              <h2>500+</h2>
              <p>Happy Customers</p>
            </div>
          </div>
        </div>

        {/* <SearchHeader
          getLocationHandler={getLocationHandler}
          getMinValueHandler={getMinValueHandler}
          getMaxValueHandler={getMaxValueHandler}
          getBedHandler={getBedHandler}
          getBathHandler={getBathHandler}
          getGarageHandler={getGarageHandler}
          submitSearch={submitSearch}
          setIsBuying={setIsBuying}
          getSquareFootHandler={getSquareFootHandler}
        /> */}
      </header>
      <div className="app__container-width">
        <div className="page__content">
          <h1 className="content-title">
            Top <span>Features</span> this week
          </h1>
          <div className="house__grid">
            {featuredHomes.map((home, index) => {
              return (
                <HouseCard
                  homeData={home}
                  agentData={home.agent}
                  title={home.address}
                  image={home.images[0]}
                  postedAgo={home.listedTime}
                  price={home.price}
                  beds={home.beds}
                  baths={home.baths}
                  sellType={home.sellType}
                  square={home.squareFeet}
                  totalImages={home.images.length}
                  details={home.description}
                  key={`${index}-${home.address}`}
                  listProperties={3}
                />
              );
            })}
          </div>
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
                With MelbourneHomes you can be sure to work with the industries best. We come with
                variety of services and products to help you find your dream home, and we know that
                your dream home is only a search away.
              </p>
              <Link to="listings" className="link">
                <button>Find your home</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="page__content">
          <ExploreGrid />
        </div>
      </div>
    </div>
  );
};

export default Home;
