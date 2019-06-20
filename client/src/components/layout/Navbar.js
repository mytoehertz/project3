import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
import { ButtonContainer } from "../product/Button";

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul>
      <li className="fas fa-user">{" "}
        <Link to="/dashboard">
          
          
      
          <span className="hide-sm">Dashboard</span>
        </Link>
        </li>
        <li>
        <Link to='/posts'>Posts</Link>
      </li>
      
      <li className="nav-item ml-5">
        <Link to="/products" className="nav-link">
          Shop
        </Link>
      </li>
      <li>

        <Link to="/about">About Us</Link>
      </li>
      <li>
        <Link to="/contact">Contact Us</Link>
      </li>
      <li>
        <a onClick={logout} href='#!'>
          <i className='fas fa-sign-out-alt' />{' '}
          <span className='hide-sm'>Logout</span>

        </a>
      </li>
      <Link to="/cart" className="ml-auto">
        <ButtonContainer>
          <span>
            <i className="fa fa-cart-arrow-down" />{" "}
          </span>
          Cart
        </ButtonContainer>
      </Link>
    </ul>
  );

  const guestLinks = (
    <ul>

      <li className="nav-item ml-5">
          <Link to="/products" className="nav-link">Shop</Link>

      </li>
    
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">
          <i className="fas fa-sign-in-alt" /> Login
        </Link>
      </li>
      <li>
        <Link to="/about">About Us</Link>
      </li>
      <li>
        <Link to="/contact">Contact Us</Link>
      </li>
    </ul>
  );

  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/">
          <i className="fas fa-leaf" /> Little Shop of Soil
        </Link>
      </h1>
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logout }
)(Navbar);
