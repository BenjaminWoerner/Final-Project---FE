import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";

class Home extends Component {





  render() {
    const { user, logout, isLoggedin } = this.props;
    return (
      <div className="home-box">
        {isLoggedin ? (
          <>
            <p>Welcome, {user.username}</p>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <>

        <p>Welcome to Recipease! To continue, please <Link to="/login">login</Link></p>
        <p>Not yet part of the community?<Link to="/signup"> Signup </Link>here!</p>
          </>
        )}
      </div>
    );
  }
}

export default withAuth(Home);
