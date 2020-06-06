import React, { Component } from "react";

import "./Main.css";
class VendingMachine extends Component {
  render() {
    return (
      <div className="Main">
        <div className="Main-container">
          <div className="Main-flex">
            <div className="col-1">
              <h3 className="Main-subtitle">What is this</h3>
              <p className="Main-paragraph bold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                voluptatum hic reprehenderit voluptatem cupiditate quo
                aspernatur consectetur corrupti sunt perferendis.
              </p>
              <br></br>
              <p className="Main-paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                voluptatum hic reprehenderit voluptatem cupiditate quo
                aspernatur consectetur corrupti sunt perferendis.
              </p>
              <br></br>
              <p className="Main-paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                voluptatum hic reprehenderit voluptatem cupiditate quo
                aspernatur consectetur corrupti sunt perferendis.
              </p>
            </div>

            <div className="col-2">
              <h1 className="Main-title">
                GET
                <br></br>
                some
                <br></br>
                FUCKING
                <br></br>
                inspiration
              </h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default VendingMachine;
