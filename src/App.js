import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Private from "./pages/Private";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Form from "./components/Edit/Form";
import Discover from "./components/Discover/Discover";
import Recipe from "./components/Detail/Recipe"

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

            <Route exact path='/add' component={Form}/>
            <Route exact path='/recipes/' component={Discover}/>
            <Route exact path='/recipes/:id' component={Recipe}/>
          </Switch> 
        </div>
      </AuthProvider>
      </div>
    );
  }
}

export default App;
