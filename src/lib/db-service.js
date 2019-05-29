import axios from "axios";

class DB {
  constructor() {
    this.data = axios.create({
     // baseURL: "http://localhost:5000",
     baseURL: `${process.env.REACT_APP_API_URL}`,
     
    });
  }



  getAllRecipes = () =>{
    return this.data.get(`/api/recipes`)
        .then(( data ) => data);
    }


  getSingleRecipe = (id) => { 
       return  this.data.get(`/api/recipes/${id}`)
        .then(({ data }) => data);
    }



  postRecipe = (data) => {
    console.log(data)
    return this.data.post(`/api/add`, {data})
      .then(( data ) => data);
  };

  updateRecipe = (id, data) => {
    const {name, description, image, ingredients, methods} = data; 
     return this.data.put(`/api/add/${id}`, { name, description, image, ingredients, methods })
      .then(response => response.data);
  };


  deleteRecipe = (id) => {
    return this.data.delete(`/api/add/${id}`).then(response => response.data);
  }
}


const data = new DB();

export default data;
