import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
import './../pages/styles.css';

class Navbar extends Component {
  render() {
    const { user, logout, isLoggedin } = this.props;
    return (
      <div>
        {isLoggedin ? (
          <>
          </>
        ) : (
          <>
            <div className="home-box">
            <h2 >Welcome to Recipal!</h2>
            <img src={require("./../206269-200.png")} alt="logo" />
            <h3 >To start organising your recipes, please <Link to="/login">Login</Link> or <Link to="/signup">Signup</Link></h3>
            </div>
          </>
        )}
      </div>
    );
  }
}



export default withAuth(Navbar);
