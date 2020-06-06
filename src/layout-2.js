import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./layout-2.css";
class Soda extends Component {
  render() {
    return (
      <div className="layout-2">
        <h1 className="layout-2-title">
          You are loved. Massively. Ferociously. Unconditionally. The Universe
          is totally freaking out about how awesome you are. It’s got you
          wrapped in a warm gorilla hug of adoration. It wants to give you
          everything you desire. It wants you to be happy. It wants you to see
          what it sees in you.
        </h1>
        <br></br>
        <br></br>
        <h2 className="layout-2-title">
          Our thoughts become our words, our words become our beliefs, our
          beliefs become our actions, our actions become our habits, and our
          habits become our realities.
        </h2>
        <button>
          <NavLink activeClassName="Navigation-active" exact to="/">
            Go Back
          </NavLink>
        </button>
      </div>
    );
  }
}

export default Soda;
