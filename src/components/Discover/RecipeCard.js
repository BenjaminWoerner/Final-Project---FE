import React from 'react';
import './../../pages/styles.css'

const recipeCard = ({ name, description, image }) => {
  return (
    <div>
    <div className="recipe-card">
      <img src={image} alt="no image :("></img>
      <div className="cardText">
      <h2>{name}</h2>
      </div>
      </div>
    </div>
  )
};

export default recipeCard;
