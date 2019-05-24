import React from 'react';

const recipeCard = ({ name, description, image }) => {
  return (
    <div className="recipeCard">
      <img src={image}></img>
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  )
};

export default recipeCard;
