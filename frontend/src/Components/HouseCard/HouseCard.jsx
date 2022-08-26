import React from "react";
import "./HouseCard.scss";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import BedIcon from "@mui/icons-material/Bed";
import ShowerIcon from "@mui/icons-material/Shower";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

const HouseCard = ({
  price,
  title,
  location,
  square,
  beds,
  baths,
  image,
  totalImages,
  sellType,
  postedAgo,
  payType,
}) => {
  return (
    <div className="housecard__container">
      <div className="housecard__img" style={{ backgroundImage: `url(${image})` }}>
        <div className="image__top">
          <p>{postedAgo} Days Ago</p>
          <p>For {sellType}</p>
        </div>
        <div className="image__bottom">
          <p>
            <CameraAltIcon /> {totalImages}
          </p>
        </div>
      </div>
      <div className="housecard__container-top-row-details">
        <p className="price">
          $ {price}/{payType}
        </p>
        <div className="interactions__container">
          <button className="interaction__btn">
            <PhoneIcon />
          </button>
          <button className="interaction__btn">
            <FavoriteIcon />
          </button>
          <button className="interaction__btn">
            <EmailIcon />
          </button>
        </div>
        <h1>{title}</h1>
        <p>{location}</p>
        <div className="housecard__grid">
          <p>
            <SquareFootIcon /> {square}
          </p>
          <p>
            <BedIcon /> {beds}
          </p>
          <p>
            <ShowerIcon /> {baths}
          </p>
        </div>
        <div className="housecard__buttons-contain">
          <button>Request Info</button>
          <button>View Details</button>
        </div>
      </div>
    </div>
  );
};

export default HouseCard;
