import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";
class Nav extends Component {
  render() {
    return (
      <nav className="Navigation-bar">
        <ul className="Navigation-ul">
          <li className="Navigation-link">
            <NavLink activeClassName="Navigation-active" exact to="/">
              Main
            </NavLink>
          </li>
          <li className="Navigation-link">
            <NavLink activeClassName="Navigation-active" exact to="/layout1">
              layout1
            </NavLink>
          </li>
          <li className="Navigation-link">
            <NavLink activeClassName="Navigation-active" exact to="/layout2">
              layout2
            </NavLink>
          </li>

          <li className="Navigation-link">
            <NavLink activeClassName="Navigation-active" exact to="/layout3">
              layout3
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
