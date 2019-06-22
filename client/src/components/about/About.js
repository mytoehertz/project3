import React, { Component } from "react";
import MapGoogle from "./Map";
import "./about.css";
export default class About extends Component {
  render() {
    return (
      <div className="mainDiv">
        <div className="firstDiv row section">
          <h1 className="col-lg-12">ABOUT US</h1>
        </div>
        <div className="secDiv row section">
          <div className="row">
            <h3>Our little story</h3>
          </div>
          <div className="row">
            <p>Lorem lorem</p>
          </div>
        </div>

        <div className="thirdDiv row section">
          <h3>First Person</h3>
        </div>
        <div className="fourthDiv row section">
          <h3>Second Person</h3>
        </div>
        <div>
          <MapGoogle />
        </div>
      </div>
    );
  }
}
