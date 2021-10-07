import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

// import classes from "./Navbar.module.css";
import "./Navbar.css";

import shoppingBagIcon from "../../../../assets/img/shopping-bag.png";
import userIcon from "../../../../assets/img/user.png";
import favouriteIcon from "../../../../assets/img/heart.png";

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white" id="navbar">
      <div className="container">
        {/* <NavLink className={`navbar-brand ${classes.textRed}`} to="/">
                    Anico
                </NavLink> */}
        <Link className="navbar-brand" to="/">
          anico.
        </Link>
        <button
          className="hamburger hamburger--collapse navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link pr-4" to="/products">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/support">
                Support
              </Link>
            </li>
          </ul>

          <ul className="navbar-nav ml-auto">
            <li className="nav-item  d-none d-sm-block">
              <Link className="nav-link" to="/favourite">
                <img
                  src={favouriteIcon}
                  className="img-fluid"
                  alt="shopping bag"
                  width="25"
                />
              </Link>
            </li>
            <li className="nav-item pl-1  d-none d-sm-block">
              <Link className="nav-link" to="/register">
                <img
                  src={userIcon}
                  className="img-fluid"
                  alt="userIcon"
                  width="25"
                />
              </Link>
            </li>
            <li className="nav-item pl-1  d-none d-sm-block">
              <Link className="nav-link" to="/cart">
                <img
                  src={shoppingBagIcon}
                  className="img-fluid d-inline"
                  alt="shopping bag"
                  width="25"
                />
                <div className="item-count">{props.itemCount}</div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

// REDUX SECTION

// STORE - Getting all the state from reducer.js
const mapStateToProps = (global_state) => {
  return {
    itemCount: global_state.myCart.length,
  };
};

// ACTION - returning value to the reducer.js for processing and computation
const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
