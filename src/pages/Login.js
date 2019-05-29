import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import './styles.css';

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const { username, password } = this.state;
    this.props.login({ username, password });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { username, password } = this.state;
    return (
      <div className="home-box signup">
      <form onSubmit={this.handleFormSubmit}>
        <label>Username:</label><br />
        <input
          type="text"
          name="username"
          value={username}
          onChange={this.handleChange}
        /> <br /> <br />
        <label>Password:</label><br />
        <input
          type="password"
          name="password"
          value={password}
          onChange={this.handleChange}
        /><br />
        <input className="button" type="submit" value="Login" />
      </form>
      </div>
    );
  }
}

export default withAuth(Login);
