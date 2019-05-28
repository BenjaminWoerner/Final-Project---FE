import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
import './../pages/styles.css';

class Footer extends Component {
  render() {
    const { user, logout, isLoggedin } = this.props;
    return (
      <div className="footer">
        {isLoggedin ? (
          <>
            
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <>
      
          </>
        )}
      </div>
    );
  }
}

export default withAuth(Footer);
