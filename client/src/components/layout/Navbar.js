import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
import { ButtonContainer } from "../product/Button";

import logo from "./stickerdesign.png";

import CartButton from "./CartButton";

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <nav className="navbar navbar-expand-lg navbar">
      <div className="navbar-collapse collapse w-100 dual-collapse2 order-1 order-md-0">
        <ul className="navbar-nav ml-auto text-center">
          <li>
            {" "}
            <Link to="/dashboard">
              <span className="hide-sm">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
        </ul>
      </div>
      <div className="mx-auto my-2 order-0 order-md-1 position-relative">
        <a className="mx-auto" href="#">
          {" "}
        </a>
        <Link to="/home" className="nav-link">
          <img src={logo} alt="logo" style={{ width: 150 }} />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target=".dual-collapse2"
        >
          <span className="navbar-toggler-icon" />
        </button>
      </div>
      <div className="navbar-collapse collapse w-100 dual-collapse2 order-2 order-md-2">
        <ul className="navbar-nav mr-auto text-center">

          <li>
            <Link to="/products">Shop</Link>
          </li>
          <li>
            <a onClick={logout} href="#!">
              <i className="fas fa-sign-in-alt" /> Logout
            </a>
          </li>
          <li>
            <Link to="/cart" className="ml-auto">
              <ButtonContainer>
                <span>
                  <i className="fa fa-cart-arrow-down" />{" "}
                </span>
                Cart
              </ButtonContainer>
            </Link>
          </li>
        </ul>
      </div>
    </nav>

  );

  const guestLinks = (
    <nav className="navbar navbar-expand-lg navbar">
      <div className="navbar-collapse collapse w-100 dual-collapse2 order-1 order-md-0">
        <ul className="navbar-nav ml-auto text-center">
          <li className="nav-item">
            <Link to="/about">About Us</Link>
          </li>
          <li className="nav-item">
            <Link to="/products">Shop</Link>
          </li>
        </ul>
      </div>
      <div className="mx-auto my-2 order-0 order-md-1 position-relative">
        <a className="mx-auto" href="#" />
        <Link to="/home" className="nav-link">
          <img src={logo} alt="logo" style={{ width: 150 }} />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target=".dual-collapse2"
        >
          <span className="navbar-toggler-icon" />
        </button>
      </div>
      <div className="navbar-collapse collapse w-100 dual-collapse2 order-2 order-md-2">
        <ul className="navbar-nav mr-auto text-center">
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/login">
              <i className="fas fa-sign-in-alt" /> Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );

  return (
    <div>
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logout }
)(Navbar);
