import React from 'react';
import './../../pages/styles.css'

const recipeCard = ({ name, description, image }) => {
  return (
    <div className="recipe-card">
      <img src={image}></img>
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  )
};

export default recipeCard;
