import React from "react";
import "./Home.scss";
import { images } from "../../Constants/index";
import SearchHeader from "./../../Components/SearchHeader/SearchHeader";
import ExploreGrid from "../ExploreGrid/ExploreGrid";
import { featuredHomes } from "../../Constants/homeData";
import { Link } from "react-router-dom";
import { HouseCard } from "../../Components";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
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
    <>
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
                <h2>2000+</h2>
                <p>Properties sold</p>
              </div>
              <div className="header__info-item">
                <h2>500+</h2>
                <p>Happy Customers</p>
              </div>
            </div>
          </div>
        </header>
        <div className="app__container-width">
          <div className="page__content">
            <div className="row">
              <div className="row__item">
                <h3 className="page__tag">Why choose to search with us</h3>
                <h1 className="head-text">Provide the most complete list of property</h1>
              </div>
              <div className="row__item">
                <p className="p-text">
                  Find the ideal property that is most suitable for you. Starting from houses for
                  sale that are minimalist, apartments for sale that are exclusive.
                </p>
              </div>
            </div>
            <div className="grid">
              <div className="list__grid-item">
                <AccountBalanceWalletOutlinedIcon className="grid__item-icon" />
                <h2>Smart feature rich</h2>
                <p className="p-text">
                  There are 100's of property ads. But you can explore everything you need here and
                  use smart features like our mortgage calculator.{" "}
                </p>
              </div>
              <div className="list__grid-item">
                <LibraryBooksOutlinedIcon className="grid__item-icon" />
                <h2>Find a place of business</h2>
                <p className="p-text">
                  Renting a place of business and buying and sellijng houses becomes easier. Meet
                  your business and investment needs faster.
                </p>
              </div>
              <div className="list__grid-item">
                <HomeOutlinedIcon className="grid__item-icon" />
                <h2>Find your dream house</h2>
                <p className="p-text">
                  Many ads for apartments and houses for sasle in various locations around
                  Melbourne. Check out what we have in store for you in our listings.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="app__flex bg-primary">
        <div className="app__container-width " >
          <div className="page__content">

          </div>
        </div>
      </div>
    </>
  );
};

export default Home;



/*

<div className="app__flex">
          <div className="app__container-width">
            <div className="page__content">
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
                    With MelbourneHomes you can be sure to work with the industries best. We come
                    with variety of services and products to help you find your dream home, and we
                    know that your dream home is only a search away.
                  </p>
                  <Link to="listings" className="link">
                    <button>Find your home</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

*/