import React from 'react';

const descriptionTile = ({ name, description, image }) => {
  return (
    <div className="Tile">
      <img src={image}></img>
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  )
};

export default descriptionTile;
