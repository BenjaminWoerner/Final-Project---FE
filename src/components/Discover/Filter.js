import React, { Component } from 'react'
import { Link } from "react-router-dom";
import './../../pages/styles.css'

export default class Filter extends Component {
  render() {
    return (
      <div className="top-nav">
        <Link to="/add">
          <button className="add-button">
          Add Recipe!
          </button>
        </Link>
      </div>
    )
  }
}
