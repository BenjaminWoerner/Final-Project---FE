import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
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
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
            </div>
          </>
        )}
      </div>
    );
  }
}

export default withAuth(Navbar);
