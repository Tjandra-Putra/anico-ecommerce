import React from "react";
import { NavLink, Redirect, Link } from "react-router-dom";

// import classes from "./Navbar.module.css";
import "./Navbar.css";

import shoppingBagIcon from "../../../../assets/img/shopping-bag.png";
import userIcon from "../../../../assets/img/user.png";
import favouriteIcon from "../../../../assets/img/heart.png";

const navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                {/* <NavLink className={`navbar-brand ${classes.textRed}`} to="/">
                    Anico
                </NavLink> */}
                <NavLink className="navbar-brand" to="/">
                    Anico.
                </NavLink>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link pr-4" to="/products">
                                Products
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/support">
                                Support
                            </NavLink>
                        </li>
                    </ul>

                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/favourite">
                                <img
                                    src={favouriteIcon}
                                    className="img-fluid"
                                    alt="shopping bag"
                                    width="23"
                                />
                            </NavLink>
                        </li>
                        <li className="nav-item pl-1">
                            <div className="dropdown">
                                <div
                                    className="nav-link"
                                    type="button"
                                    id="dropdownMenuButton"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    <img
                                        src={userIcon}
                                        className="img-fluid"
                                        alt="shopping bag"
                                        width="23"
                                    />
                                    <div
                                        class="dropdown-menu"
                                        aria-labelledby="dropdownMenuButton"
                                    >
                                        <Link class="dropdown-item" to="/login">
                                            Login
                                        </Link>
                                        <div
                                            role="separator"
                                            class="dropdown-divider"
                                        ></div>

                                        <Link
                                            class="dropdown-item"
                                            to="/register"
                                        >
                                            Register
                                        </Link>
                                        <div
                                            role="separator"
                                            class="dropdown-divider"
                                        ></div>
                                        <NavLink class="dropdown-item" to="/">
                                            Order Status
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item pl-1">
                            <NavLink className="nav-link" to="/cart">
                                <img
                                    src={shoppingBagIcon}
                                    className="img-fluid"
                                    alt="shopping bag"
                                    width="23"
                                />
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default navbar;
