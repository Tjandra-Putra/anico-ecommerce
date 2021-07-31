import React from "react";
import { Link } from "react-router-dom";

// import classes from "./Navbar.module.css";
import "./Navbar.css";

import shoppingBagIcon from "../../../../assets/img/shopping-bag.png";
import userIcon from "../../../../assets/img/user.png";
import favouriteIcon from "../../../../assets/img/heart.png";

const navbar = () => {
    return (
        <nav
            className="navbar navbar-expand-lg navbar-light bg-white"
            id="navbar"
        >
            <div className="container">
                {/* <NavLink className={`navbar-brand ${classes.textRed}`} to="/">
                    Anico
                </NavLink> */}
                <Link className="navbar-brand" to="/">
                    anico.
                </Link>
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
                        <li className="nav-item">
                            <Link className="nav-link" to="/favourite">
                                <img
                                    src={favouriteIcon}
                                    className="img-fluid"
                                    alt="shopping bag"
                                    width="23"
                                />
                            </Link>
                        </li>
                        <li className="nav-item pl-1">
                            <Link className="nav-link" to="/login">
                                <img
                                    src={userIcon}
                                    className="img-fluid"
                                    alt="shopping bag"
                                    width="23"
                                />
                            </Link>
                        </li>
                        <li className="nav-item pl-1">
                            <Link className="nav-link" to="/cart">
                                <img
                                    src={shoppingBagIcon}
                                    className="img-fluid"
                                    alt="shopping bag"
                                    width="23"
                                />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default navbar;
