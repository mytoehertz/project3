import React, { Component } from "react";
import MapGoogle from "./Map";
import "./about.css";
import outside from "./outside.jpg";
import img1 from "./img1.PNG";
import img2 from "./img2.jpg";
import img3 from "./img3.JPG";
import img4 from "./img4.JPG";
import img5 from "./img5.jpg";
import img6 from "./img6.PNG";
import img7 from "./img7.JPG";
import img8 from "./img8.JPG";

export default class About extends Component {
  render() {
    return (
      <div className="mainDiv">
        <div className="firstDiv row section">
          <h1 className="col-lg-12 title">ABOUT US</h1>
        </div>
        <div className="secDiv container section">
          <div className="row">
            <h3>Our little story</h3>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <p>
                Plants are mainly multicellular, predominantly photosynthetic
                eukaryotes of the kingdom Plantae. Historically, plants were
                treated as one of two kingdoms including all living things that
                were not animals, and all algae and fungi were treated as
                plants. However, all current definitions of Plantae exclude the
                fungi and some algae, as well as the prokaryotes (the archaea
                and bacteria). By one definition, plants form the clade
                Viridiplantae (Latin name for "green plants"), a group that
                includes the flowering plants, conifers and other gymnosperms,
                ferns and their allies, hornworts, liverworts, mosses and the
                green algae, but excludes the red and brown algae. Green plants
                obtain most of their energy from sunlight via photosynthesis by
                primary chloroplasts that are derived from endosymbiosis with
                cyanobacteria. Their chloroplasts contain chlorophylls a and b,
                which gives them their green color.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div class="column">
                  <img src={img1} />
                  <img src={img2} />
                  <img src={img7} />
                </div>
                <div class="column">
                  <img src={img3} />
                  <img src={img4} />
                  <img src={img8} />
                </div>
                <div class="column">
                  <img src={img5} />
                  <img src={img6} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <h3>The Founders</h3>
        </div>

        <div className="thirdDiv row section">
          <div className="col-lg-8 textDiv">
            <div className="row">
              <div className="col-md-4" />
              <div className="col-md-8 text">
                <h3>Alissa</h3>
                <p>Description of person 1</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 alissaphotoDiv" />
        </div>

        <div className="fourthDiv row section">
          <div className="col-md-4 adamphotoDiv" />
          <div className="col-lg-8 textDiv">
            <div className="row">
              <div className="col-md-8 text2">
                <h3>Adam</h3>
                <p>Description of person 1</p>
              </div>
              <div className="col-md-4" />
            </div>
          </div>
        </div>
        <div className="fifthDiv container">
          <h3>Visit us at the store</h3>
          <br />
          <div className="row">
            <div className="col-md-6">
              <img src={outside} alt="logo" style={{ width: "28vw" }} />
            </div>
            <div className="col-md-6">
              <MapGoogle />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
