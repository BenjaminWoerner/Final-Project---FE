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
    
    const { _id, description, image, name, ingredients, methods} = this.state.theRecipe;
    
    const sectionStyle = {
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      height: "250px",
      backgroundImage: `url(${image? image : require("./../../74043937-fast-food-set-burger-fries-drink-and-sauce-retro-comic-book-style-pop-art-retro-illustration-color-v.jpg")})`
    }
    
    return(
      <div>
        
      <div className="top-nav">

      <Link to={`/recipes`}>
        <button><b>BACK </b></button>
        </Link>


        <Link to={`/add/${_id}`}> 
        <button><b>EDIT</b></button>
        </Link>

        
      </div>


        <section style={ sectionStyle} />
        <h2>{name}</h2>
        <p>{description}</p>
        <br /> <br />
        <h3>Ingredients</h3>
        <p>{ingredients}</p>
        <br /> <br />
        <h3>Method</h3>
        <p>{methods}</p>

        

      </div>
    )
  }
}

export default Recipe;