import React, { Component } from 'react'
import axios from 'axios';
import '../../pages/styles.css';
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import db from '../../lib/db-service.js';

export default class FormEdit extends Component {
  constructor(props){
    super(props);
    this.state = {
      theRecipe: {},
        loading: true,
    };
  }
  
  componentDidMount(){
    this.getSingleRecipe();
}

  getSingleRecipe = () => { 
    const { params } = this.props.match;
    const {id} = params;
    db.getSingleRecipe(id)
      .then( responseFromApi =>{
        const theRecipe= responseFromApi;
          
        this.setState({theRecipe, loading: false});
      })
      .catch((err)=>{
          console.log(err)
      })
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { id } = this.props.match.params;
    db.updateRecipe(id, this.state)
      

    .then( (body) => {
        this.setState({
          theRecipe: {},
        loading: true,
        });

      
          this.props.history.push(`/recipes/${id}`)
        
        
    })
    .catch( error => console.log(error) )
  }
  
  handleChange = (event) => {  
      const {name, value} = event.target;
      this.setState({[name]: value});
  };
  
  deleteRecipe = (id) => {
    db.deleteRecipe(id)
    .then( responseFromApi =>{
        console.log(responseFromApi);
        this.props.history.push('/recipes'); // !!!         
    })
    .catch((err)=>{
        console.log(err)
    })
  }

  
  render() {
    console.log(this.props);
    const { _id, description, image, name, ingredients, methods} = this.state.theRecipe;
    return (
   <div>
   
   <div className="top-nav">
      <Link to={`/recipes/${this.state.theRecipe._id}`}>
        <button>BACK</button>
      </Link>
    </div>
    
   
    <div className="signup home-box form">
      <form onSubmit={this.handleFormSubmit}>
       



        <label>Name:</label><br />
        <input type="text" name="name" value={name} onChange={ e => this.handleChange(e)}/><br />
        
        <label>Description:</label><br />
        <textarea  type="text" name="description" value={description} onChange={ e => this.handleChange(e)} /><br />
        
        <label>image:</label><br />
        <input  type="text" name="image" value={this.state.image} onChange={ e => this.handleChange(e)} /><br />
   
   
        <label>Ingredients:</label><br />
        <textarea type="text" name="ingredients" value={ingredients} onChange={ e => this.handleChange(e)}/><br />

        <label>Methods:</label><br />
        <textarea type="text" name="methods" value={this.state.methods} onChange={ e => this.handleChange(e)}/><br />

        <input className="button" type="submit" value="Submit" /><br />
        
        
       
      
      </form>
        <button className="button" onClick={() => this.deleteRecipe(_id)}>Delete</button>
    </div>

    </div>
    )
  }
}
