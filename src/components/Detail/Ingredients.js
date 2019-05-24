import React from 'react';

const ingredientsTile = ({ ingredients }) => {
  return (
    <div className="Tile">
      <h2>Ingredients</h2>
      <p>{ingredients}</p>
    </div>
  )
};

export default ingredientsTile;
