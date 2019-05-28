import React, { Component } from 'react';
import RecipeCard from './RecipeCard';
import Filter from "./Filter.js"
import './../../pages/styles.css'
import data from '../../lib/db-service.js';

import { Link } from 'react-router-dom';
import recipeCard from './RecipeCard';

class DiscoverView extends Component {
  state = { allRecipes: [] }
  

  getRecipes = () =>{

    data.getAllRecipes()
      .then((responseFromApi) => {
    this.setState({
      allRecipes: responseFromApi.data
    })
  })
  .catch((err) => console.log(err))
    
  }

  componentDidMount = () =>  {
   this.getRecipes()
  }

  render() {
    return (
      <div>
      <Filter />
      <div className="card-grid">
        {this.state.allRecipes.map((oneRecipe, index) => {
          return (
            <div key={oneRecipe._id}>
            <Link to={`/recipes/${oneRecipe._id}`} style={{ textDecoration: 'none' }}> 
            <RecipeCard key={index} {...oneRecipe} />
            </Link> 
            </div>  
          )})}
      </div>
       
       
      </div>
    );
  }
}

export default DiscoverView;




