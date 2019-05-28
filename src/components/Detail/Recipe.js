import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import Description from './Description';
import data from '../../lib/db-service.js';
import './../../pages/styles.css'

class Recipe extends Component {

      state = {
        theRecipe: {},
        loading: true,
      }
  

  componentDidMount(){
      this.getSingleRecipe();
  }

  getSingleRecipe = () => { 
    const { params } = this.props.match;
    const {id} = params;
    data.getSingleRecipe(id)
      .then( responseFromApi =>{
          const theRecipe= responseFromApi;
          
          this.setState({theRecipe, loading: false});
      })
      .catch((err)=>{
          console.log(err)
      })
  }

  render(){
    console.log(this.state);
    const { _id, description, image, name, ingredients, methods} = this.state.theRecipe;
    return(
      <div>
        
      <div className="top-nav">

      <Link to={`/recipes`}>
        <button>BACK</button>
        </Link>


        <Link to={`/add/${_id}`}> 
        <button>EDIT</button>
        </Link>

        
      </div>



        <h2>{name}</h2>
        <p>{description}</p>
        <h3>Ingredients</h3>
        <p>{ingredients}</p>
        <h3>Method</h3>
        <p>{methods}</p>

        

      </div>
    )
  }
}

export default Recipe;