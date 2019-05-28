import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home.js"
import Footer from "./components/Footer.js"
import Navbar from "./components/Navbar.js";
import Private from "./pages/Private";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Form from "./components/Edit/Form";
import Discover from "./components/Discover/Discover";
import Recipe from "./components/Detail/Recipe"
import FormEdit from "./components/Edit/FormEdit.js"

import PrivateRoute from "./components/PrivateRoute";
import AnonRoute from "./components/AnonRoute";
import AuthProvider from "./lib/AuthProvider";

import '../src/pages/styles.css';

class App extends Component {
  render() {
    return (
     <div>
      <AuthProvider>
        <div className="container">
         <Navbar />
         <Switch>
            
            <AnonRoute path="/signup" component={Signup} />
            <AnonRoute path="/login" component={Login} />
            <PrivateRoute path="/private" component={Private} />

            <PrivateRoute exact path='/add' component={Form}/>
            <PrivateRoute exact path='/recipes/' component={Discover}/>
            <PrivateRoute exact path='/recipes/:id' component={Recipe}/>
            <PrivateRoute exact path='/add/:id' component={FormEdit}/>
          </Switch> 
          <Footer className="footer" />
        </div>
      </AuthProvider>
      </div>
    );
  }
}

export default App;
