import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./layout-1.css";
class Sardines extends Component {
  render() {
    return (
      <div className="layout-1">
        <div className="layout-1-container">
          <h1>READ THIS MOTHERFUCKER</h1>
          <div className="layout-1-grid">
            <div className="layout-1-quote quote-1">
              If you’re serious about changing your life, you’ll find a way. If
              you’re not, you’ll find an excuse.
            </div>

            <div className="layout-1-quote quote-2">
              Never apologize for who you are. It lets the whole world down.
            </div>

            <div className="layout-1-quote quote-3">
              The only failure is quitting. Everything else is just gathering
              information.
            </div>
          </div>

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

export default Sardines;
