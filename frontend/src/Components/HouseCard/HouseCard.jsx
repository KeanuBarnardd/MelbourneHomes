import React from "react";
import "./HouseCard.scss";

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
      <img src={image} alt="">
        <div className="image__top">
          <p>{postedAgo} Days Ago</p>
          <p>For {sellType}</p>
        </div>
        <div className="image__bottom">
          <p>{postedAgo} Days Ago</p>
          <p>For {sellType}</p>
        </div>
      </img>
      <div className="housecard__container-top-row-details">
        <p className="price">
          $ {price}/{payType}
        </p>
        <div className="interactions__container">
          <button className="interaction__btn"></button>
          <button className="interaction__btn"></button>
          <button className="interaction__btn"></button>
        </div>
      </div>
    </div>
  );
};

export default HouseCard;
