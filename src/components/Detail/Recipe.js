import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Description from './Description';
import Ingredients from './Ingredients';
import Methods from './Methods';


class Recipe extends Component {
  constructor(props){
      super(props);
      this.state = {};
  }

  componentDidMount(){
      this.getSingleRecipe();
  }

  getSingleRecipe = () => {
    console.log("endering")  
    const { params } = this.props.match;
      axios.get(`http://localhost:5000/api/recipes/${params.id}`)
      .then( responseFromApi =>{
          const theRecipe= responseFromApi.data;
          this.setState(theRecipe);
      })
      .catch((err)=>{
          console.log(err)
      })
  }

  render(){
    return(
      <div>

      <Description name={this.state.name} description={this.state.description} image={this.state.image}/>
      
        <h1>{this.state.title}</h1>
        <p>{this.state.description}</p>
        <Link to={'/projects'}>Back to projects</Link>
      </div>
    )
  }
}

export default Recipe;