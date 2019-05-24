import React, { Component } from "react";
import { Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import Private from "./pages/Private";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Form from "./components/Edit/Form";
import Discover from "./components/Discover/Discover";

import PrivateRoute from "./components/PrivateRoute";
import AnonRoute from "./components/AnonRoute";
import AuthProvider from "./lib/AuthProvider";

import '../src/pages/styles.css';

class App extends Component {
  render() {
    return (
     <div>
      <div class='form container'>
      <Form />
      </div>
      <Discover />
      <AuthProvider>
        <div className="container">
          <h1>Basic React Authentication</h1>
          <Navbar />
         <Switch>
            <AnonRoute path="/signup" component={Signup} />
            <AnonRoute path="/login" component={Login} />
            <PrivateRoute path="/private" component={Private} />
          </Switch> 
        </div>
      </AuthProvider>
      </div>
    );
  }
}

export default App;
