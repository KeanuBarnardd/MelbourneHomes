import React from "react";
import "./Home.scss";
import { Link } from "react-router-dom";
import { images } from "../../Constants/index";
import SearchHeader from "./../../Components/SearchHeader/SearchHeader";
import ExploreGrid from "../ExploreGrid/ExploreGrid";
import { featuredHomes } from "../../Constants/homeData";
import { HouseCard, FeatureCard, Banner } from "../../Components";
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
        <div className="app__container-width ">
          <div className="page__content">
            <div className="row">
              <div className="row__item">
                <h3 className="page__tag">Featured Homes</h3>
                <h1 className="head-text">Properties throughout Melbourne</h1>
                <p className="p-text">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum quis blanditiis
                  sunt facere perferendis sit nisi hic esse dolor harum.
                </p>
              </div>

              <Link className="page__content-link" to="/listings">
                View homes <i className="fa-solid fa-chevron-right"></i>{" "}
              </Link>
            </div>
            <div className="house__grid">
              {featuredHomes.map((house, index) => {
                return (
                  <FeatureCard
                    key={index}
                    image={house.images[0]}
                    address={house.address}
                    price={house.price}
                    beds={house.beds}
                    baths={house.baths}
                    area={house.area}
                    type={house.type}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Banner
        subTitle={"Find Home With Us"}
        title={"Find the right house over 500 properties."}
        text={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt nesciunt minus consectetur maxime facilis cum sed tempore fugit maiores expedita?"
        }
        button={"Find Now"}
        link={"/listings"}
        image={images.spareHeader}
      />

      <div className="app__flex">
        <div className="app__container-width">
          <div className="page__content">
            <div className="row">
              <div className="row__item">
                <h3 className="page__tag">Information</h3>
                <h1 className="head-text">We are the right team for any job</h1>
                <p className="p-text">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum quis blanditiis
                  sunt facere perferendis sit nisi hic esse dolor harum.
                </p>
              </div>

              <Link className="page__content-link" to="/about">
                More About Us <i className="fa-solid fa-chevron-right"></i>{" "}
              </Link>
            </div>
            <ExploreGrid />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

/*

<div className="app__flex">
          
        </div>

*/
