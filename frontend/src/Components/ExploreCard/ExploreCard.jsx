import React from 'react'
import './ExploreCard.scss';


const ExploreCard = ({image,title,description,linkDesc,link}) => {
  return (
    <div className="explore__card">
      <img src={image} alt="" />
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={link}>{linkDesc}</a>
    </div>
  )
}

export default ExploreCard