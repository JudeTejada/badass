import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Layout-3.css";
class Chips extends Component {
  render() {
    return (
      <div className="Layout-3">
        <div className="Layout-3-flexend">
          <h2 className="Layout-3-title">
            You ARE
            <br></br>A Badass
            <br></br>
            Motherfucker
          </h2>
        </div>
        <div className="Layout-3-flexstart">
          <p className="Layout-3-paragraph">
            <blockquote>
              " What other people think about you has nothing to do with you and
              everything to do with them."
            </blockquote>
          </p>
          <p className="Layout-3-author">Jen Sincero</p>
          <button>
            <NavLink activeClassName="Navigation-active" exact to="/">
              Go Back
            </NavLink>
          </button>
        </div>
      </div>
    );
  }
}

export default Chips;
