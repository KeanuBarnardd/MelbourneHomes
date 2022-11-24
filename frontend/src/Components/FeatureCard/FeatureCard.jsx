import React from "react";
import { Link } from "react-router-dom";
import "./FeatureCard.scss";
import BedIcon from "@mui/icons-material/Bed";
import ShowerIcon from "@mui/icons-material/Shower";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';


const FeatureCard = ({ image, address, price, beds, baths, type, area }) => {
  return (
    <Link to="/listings" className="feature__container">
      <div style={{ backgroundImage: `url(${image})` }} className="image__container">
        <VisibilityOutlinedIcon className="image__container-view" />
      </div>
      <div className="tags__container">
        <span>
          <p>{type}</p>
        </span>
        <span>
          <p>{area}</p>
        </span>
      </div>
      <h2>${price.toLocaleString("en-US")}</h2>
      <p className="feature__address">{address}</p>
      <hr />
      <div className="tags__container">
        <div className="feature__tag">
          <span className="feature__icon">
            <BedIcon />
          </span>

          <p>{beds} Bedroom</p>
        </div>
        <div className="feature__tag">
          <span className="feature__icon">
            <ShowerIcon />
          </span>
          <p>{baths} Bathroom</p>
        </div>
      </div>
    </Link>
  );
};

export default FeatureCard;
