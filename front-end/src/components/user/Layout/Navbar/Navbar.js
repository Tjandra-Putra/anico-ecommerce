import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

// import classes from "./Navbar.module.css";
import "./Navbar.css";

import shoppingBagIcon from "../../../../assets/img/shopping-bag.png";
import userIcon from "../../../../assets/img/user.png";
import favouriteIcon from "../../../../assets/img/heart.png";

const Navbar = (props) => {
  return (
    <div className="navbar-master">
      {/* ======================= DESKTOP NAV ======================= */}
      <nav
        className="navbar navbar-expand-lg navbar-light bg-white d-none d-sm-block"
        id="navbar"
      >
        <div className="container">
          <Link className="navbar-brand" to="/">
            anico.
          </Link>
          {/* <button
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
          </button> */}

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link pr-4" to="/products">
                  Shop
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link pr-4" to="/products">
                  The Show Kit
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link pr-4" to="/products">
                  Exclusive
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link pr-4" to="/products">
                  Sale
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/support">
                  Support
                </Link>
              </li>
            </ul>

            <ul className="navbar-nav ml-auto">
              {props.sessionAuthData ? (
                <Link className="nav-link" to="/cart">
                  <li className="nav-item mr-2" style={{ marginTop: "1.2rem" }}>
                    welcome back &nbsp;
                    {props.sessionAuthData.email.substring(
                      0,
                      props.sessionAuthData.email.lastIndexOf("@")
                    )}
                  </li>
                </Link>
              ) : null}

              <li
                className="nav-item  d-none d-sm-block"
                style={{ marginTop: "1rem" }}
              >
                <Link className="nav-link" to="/favourite">
                  <img
                    src={favouriteIcon}
                    className="img-fluid"
                    alt="shopping bag"
                    width="25"
                  />
                </Link>
              </li>
              {!props.sessionAuthData ? (
                <li
                  className="nav-item pl-1  d-none d-sm-block"
                  style={{ marginTop: "1rem" }}
                >
                  <Link className="nav-link" to="/login">
                    <img
                      src={userIcon}
                      className="img-fluid"
                      alt="userIcon"
                      width="25"
                    />
                  </Link>
                </li>
              ) : null}
              <li
                className="nav-item pl-1  d-none d-sm-block"
                style={{ marginTop: "1rem" }}
              >
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
      {/* ======================= MOBILE NAV ======================= */}
      <nav
        className="navbar navbar-expand-lg navbar-light bg-white d-block d-sm-none"
        id="navbar"
      >
        <div class="d-flex flex-row">
          <div class="flex-item flex-hamburger">
            {/* <button
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
            </button> */}
            <button
              class="navbar-toggler mt-2 border-0 text-dark"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>
          <div class="flex-item flex-favourite">
            <Link className="nav-link" to="/favourite">
              <img src={favouriteIcon} alt="shopping bag" width="25" />
            </Link>
          </div>
          <div class="flex-item"></div>
          <div class="flex-item flex-brand">
            <div class="nav-mobile-flex-item-brand">
              <Link className="navbar-brand" to="/">
                anico.
              </Link>
            </div>
          </div>
          <div class="flex-item"></div>
          <div class="flex-item flex-user">
            {!props.sessionAuthData ? (
              <Link className="nav-link" to="/login">
                <img src={userIcon} alt="userIcon" width="25" />
              </Link>
            ) : null}
          </div>
          <div class="flex-item flex-cart">
            <Link className="nav-link" to="/cart">
              <img src={shoppingBagIcon} alt="shopping bag" width="25" />
              <div className="item-count">{props.itemCount}</div>
            </Link>
          </div>
        </div>

        <div className="container">
          <div
            className="collapse navbar-collapse"
            id="navbarNav"
            // data-toggle={isMobile ? "collapse" : ""}
            // data-target={isMobile ? "#navbarNav" : ""}
            data-toggle="collapse"
            data-target="#navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link pr-4" to="/products">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link pr-4" to="/products">
                  The Show Kit
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link pr-4" to="/products">
                  Exclusive
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link pr-4" to="/products">
                  Sale
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/support">
                  Support
                </Link>
              </li>
            </ul>

            <ul className="navbar-nav ml-auto">
              {props.sessionAuthData ? (
                <Link className="nav-link" to="/cart">
                  <li className="nav-item mr-2" style={{ marginTop: "1.2rem" }}>
                    welcome back &nbsp;
                    {props.sessionAuthData.email.substring(
                      0,
                      props.sessionAuthData.email.lastIndexOf("@")
                    )}
                  </li>
                </Link>
              ) : null}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

// REDUX SECTION

// STORE - Getting all the state from reducer.js
const mapStateToProps = (global_state) => {
  return {
    itemCount: global_state.myCart.length,
    sessionAuthData: global_state.sessionAuthData,
  };
};

// ACTION - returning value to the reducer.js for processing and computation
const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
