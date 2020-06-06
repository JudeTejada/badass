import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Sardines from "./layout-1";
import Chips from "./layout-3";
import Soda from "./layout-2";
import Nav from "./Nav";
import VendingMachine from "./VendingMachine";
function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/" component={VendingMachine} />
        <Route exact path="/layout1" component={Sardines} />
        <Route exact path="/layout2" component={Soda} />
        <Route exact path="/layout3" component={Chips} />
      </Switch>
    </div>
  );
}

export default App;
