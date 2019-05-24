import React, { Component } from 'react'
import axios from 'axios';
import '../../pages/styles.css';

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
    event.preventDefault();
    
    const {name, description, image, ingredients, methods} = this.state; 
    axios.post("http://localhost:5000/api/add", { name, description, image, ingredients, methods })
   
    .then( () => {
        // this.props.getData();
        this.setState({
          name: "", 
          description: "", 
          image: "", 
          ingredients: "",
          methods: ""
        });
    })
    .catch( error => console.log(error) )
  }
  
  handleChange = (event) => {  
      const {name, value} = event.target;
      this.setState({[name]: value});
  };
  
  
  render() {
    return (
    <div className="recipe-form">
      <form onSubmit={this.handleFormSubmit}>
       
        <label>Name:</label><br />
        <input type="text" name="name" value={this.state.name} onChange={ e => this.handleChange(e)}/><br />
        
        <label>Description:</label><br />
        <input  type="text" name="description" value={this.state.description} onChange={ e => this.handleChange(e)} /><br />
        
        <label>image:</label><br />
   
        <label>Ingredients:</label><br />
        <input type="text" name="ingredients" value={this.state.ingredients} onChange={ e => this.handleChange(e)}/><br />

        <label>Methods:</label><br />
        <input type="text" name="methods" value={this.state.methods} onChange={ e => this.handleChange(e)}/><br />

        <input type="submit" value="Submit" /><br />
      
      </form>
    </div>
    )
  }
}
