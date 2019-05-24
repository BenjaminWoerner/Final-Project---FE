import React, { Component } from 'react';
import RecipeCard from './RecipeCard';

import axios from 'axios';
import { Link } from 'react-router-dom';

class DiscoverView extends Component {
  constructor(){
      super();
      this.state = { allRecipes: [] };
  }

  getAllRecipes = () =>{
    axios.get(`http://localhost:5000/api/recipes`)
    .then(responseFromApi => {
      this.setState({
        allRecipes: responseFromApi.data
      })
    })
  }

  componentDidMount() {
    this.getAllRecipes();
  }

  render() {
    return (
      <div>
      {
        this.state.allRecipes.map((oneRecipe, index) => {
          return <RecipeCard key={index} {...oneRecipe} />
        })
      }
    </div>
    );
  }
}

export default DiscoverView;




