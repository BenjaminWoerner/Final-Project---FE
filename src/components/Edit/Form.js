import React, { Component } from 'react'
import axios from 'axios';
import '../../pages/styles.css';
import { Redirect, Link} from "react-router-dom";
import db from '../../lib/db-service.js';

export default class Form extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: "", 
      description: "", 
      image: "", 
      ingredients: "",
      methods: ""
    }
  }
  
  

  handleFormSubmit = (event) => {
    console.log(this.state);
    event.preventDefault();
    const {name, description, image, ingredients, methods} = this.state; 
    db.postRecipe({name, description, image, ingredients, methods})
    

    .then( (body) => {
        this.setState({
          name: "", 
          description: "", 
          image: "", 
          ingredients: "",
          methods: ""
        });
        console.log(body);
        const {_id} = body.data;
        this.props.history.push(`/recipes/${_id}`)
        
    })
    .catch( error => console.log(error) )
  }
  
  handleChange = (event) => {  
      const {name, value} = event.target;
      this.setState({[name]: value});
  };
  
  
  render() {
    console.log(this.state)
    return (
    
    <div>

    <div className="top-nav">

<Link to={`/recipes`}>
  <button> <b>BACK</b></button>
  </Link>

  
</div>
    
    
    
    
    <div className="signup home-box form">
      <form onSubmit={this.handleFormSubmit}>
       
        <label>Name:</label><br />
        <input type="text" name="name" value={this.state.name} onChange={ e => this.handleChange(e)}/><br />
        
        <br /><label>Description:</label><br />
        <textarea  type="text" name="description" value={this.state.description} onChange={ e => this.handleChange(e)} /><br />
        
        <br /><label>Image:</label><br />
        <input  type="text" name="image" value={this.state.image} onChange={ e => this.handleChange(e)} /><br />
   
        <br /><label>Ingredients:</label><br />
        <textarea type="text" name="ingredients" value={this.state.ingredients} onChange={ e => this.handleChange(e)}/><br />

        <br /><label>Methods:</label><br />
        <textarea type="text" name="methods" value={this.state.methods} onChange={ e => this.handleChange(e)}/><br />

        <input className="button" type="submit" value="Submit" /><br />
      
      </form>
    </div>
    </div>
    )
  }
}
