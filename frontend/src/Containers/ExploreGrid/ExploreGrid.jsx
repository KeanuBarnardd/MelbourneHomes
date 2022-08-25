import React from 'react'
import './ExploreGrid.scss';
import { ExploreCard } from '../../Components';
import { images } from '../../Constants';
const ExploreGrid = () => {
  return (
    <div className="explore__grid">
    <ExploreCard
      title="Explore suburb profiles"
      image={images.exploreCard4}
      description="Check out different suburb profiles and find one thats right for you."
      linkDesc={"Research Suburbs"}
    />
    <ExploreCard
      title="Explore suburb profiles"
      image={images.exploreCard2}
      description="Check out different suburb profiles and find one thats right for you."
      linkDesc={"Research Suburbs"}
    />
    <ExploreCard
      title="Explore suburb profiles"
      image={images.exploreCard6}
      description="Check out different suburb profiles and find one thats right for you."
      linkDesc={"Research Suburbs"}
    />
  </div>
  )
}

export default ExploreGrid