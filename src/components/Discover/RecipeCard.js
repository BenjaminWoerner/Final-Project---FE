import React from 'react';
import './../../pages/styles.css'

const recipeCard = ({ name, description, image }) => {
  return (
    <div>
    <div className="recipe-card">
      <img src={image? image : require("./../../74043937-fast-food-set-burger-fries-drink-and-sauce-retro-comic-book-style-pop-art-retro-illustration-color-v.jpg")}></img>
      <div className="cardText">
      <h2>{name}</h2>
      </div>
      </div>
    </div>
  )
};

export default recipeCard;
