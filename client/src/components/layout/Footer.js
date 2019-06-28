import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./footer.css";
export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footcont">
          <div className="row">
            <div className="col-lg-5 col-xs-12 about-company">
              <h2>More info</h2>
              <p className="">Find us on Social Media! </p>
              {/* pr-5 text-white-50 */}
              <p>
                <a href="https://www.facebook.com/littleshopofsoil/?__tn__=%2Cd%2CP-R&eid=ARDcTveAqyHbOQWEMmKHGGh0TGweLDRnwNTrsJftIXad5HIYCwxFMYeXa78AbH8YdB4wQjVFXgSMDYi3">
                  <i className="fa fa-facebook-square mr-1" />
                </a>
                <a href="#">
                  <i className="fa fa-linkedin-square" />
                </a>
                <a href="https://www.yelp.com/biz/little-shop-of-soil-brooklyn">
                  <i className="fa fa-yelp" />
                </a>
              </p>
              <h2>Opening Times</h2>
              <br />
              <ul style={{ "font-size": "small" }}>
                <li>MONDAY - CLOSED</li>
                <li>TUESDAY - CLOSED</li>
                <li>WEDNESDAY - CLOSED</li>
                <li>THURSDAY - CLOSED</li>
                <li>FRIDAY - CLOSED</li>
                <li>SATURDAY - 11am to 6pm</li>
                <li>SUNDAY - 11am to 6pm</li>
              </ul>
            </div>
            <div className="col-lg-3 col-xs-12 links">
              <h4 className="mt-lg-0 mt-sm-3">Links</h4>
              <ul className="m-0 p-0">
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-xs-12 location">
              <h4 className="mt-lg-0 mt-sm-4">Location</h4>
              <p>1311 Myrtle Ave, Enter on, Dekalb Ave, Brooklyn, NY 11221</p>
              <p className="mb-0">
                <i className="fa fa-phone mr-3" />
                (917) 740-8014
              </p>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col copyright" style={{ "text-align": "center" }}>
              <p className="">
                <small className="text-white-50">
                  © 2019. All Rights Reserved.
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
