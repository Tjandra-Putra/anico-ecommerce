import React from "react";
import { Link } from "react-router-dom";

import "./Product.css";

import Product_1 from "../../../../assets/img/itam.jpg";

const product = (props) => {
    return (
        <div className="product">
            <div className="container">
                <div className="mb-1"></div>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <Link to="/" className="text-dark">
                                Home
                            </Link>
                        </li>
                        <li className="breadcrumb-item">
                            <Link to="/products" className="text-dark">
                                Products
                            </Link>
                        </li>
                        <li
                            className="breadcrumb-item text-muted"
                            aria-current="page"
                        >
                            Nexa Lanite Dress
                        </li>
                    </ol>
                </nav>

                <div className="row">
                    <div className="col-md-6">
                        <img
                            src={Product_1}
                            className="img-fluid carousel-img"
                            alt="product_1"
                            width="500"
                        />
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="product-tag">
                                    Summer Clothing
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="product-price">S$65</div>
                            </div>
                        </div>
                        <div className="product-title">Nexa Lanite Dress</div>
                        <div className="product-description">
                            The Nike Dri-FIT Indy Zip-Front Sports Bra takes the
                            lightweight design to the next level, with fabric
                            made from at least 50% recycled polyester
                            fibres.It's easy to get on and off, and it's extra
                            cool at the back with breathable mesh.Thin,
                            adjustable straps let you get the perfect fit. The
                            recycled polyester used in Nike products begins as
                            recycled plastic bottles, which are cleaned
                        </div>
                        <div className="d-flex justify-content-between">
                            <div className="bd-highlight">
                                <div className="product-size">Select Size</div>
                            </div>
                            <div className="bd-highlight">
                                <div className="product-size-guide">
                                    <div className="product-size">
                                        Size Guide
                                    </div>
                                </div>
                            </div>
                        </div>

                        <form action="">
                            <input
                                type="radio"
                                id="radio1"
                                name="radios"
                                value="XS"
                                required
                            />
                            <label for="radio1">XS</label>

                            <input
                                type="radio"
                                id="radio2"
                                name="radios"
                                value="S"
                            />
                            <label for="radio2">S</label>

                            <input
                                type="radio"
                                id="radio3"
                                name="radios"
                                value="M"
                            />
                            <label for="radio3">M</label>

                            <input
                                type="radio"
                                id="radio4"
                                name="radios"
                                value="L"
                            />
                            <label for="radio4">L</label>

                            <input
                                type="radio"
                                id="radio5"
                                name="radios"
                                value="XL"
                            />
                            <label for="radio5">XL</label>

                            <button className="btn btn-dark btn-block">
                                Add to Bag
                            </button>
                            <button className="btn btn-outline-dark btn-block">
                                Favourite <i className="far fa-heart"></i>
                            </button>
                        </form>

                        <div className="more-detail">
                            <button className="accordion">Size & Fit</button>
                            <div className="panel">
                                <p className="pt-3">
                                    <ul>
                                        <li>Model is wearing size S</li>
                                        <li>
                                            Model height: 5'6" (168cm approx.)
                                        </li>
                                        <li>Model bust: 32" (81cm approx.)</li>{" "}
                                        <li>
                                            Tight fit for a body-hugging feel
                                            Light support
                                        </li>
                                        <li>Size Guide</li>
                                    </ul>
                                </p>
                            </div>

                            <button className="accordion">
                                Free Delivery and Returns
                            </button>
                            <div className="panel">
                                <p className="pt-3">
                                    Your order of S$75 or more gets free
                                    standard delivery.
                                </p>
                                <p>Standard delivered 1-3 Business Days</p>
                                <p>Express delivered 0-2 Business Days</p>
                                <p>
                                    Orders are processed and delivered
                                    Monday-Friday (excluding public holidays).
                                </p>
                            </div>

                            <button className="accordion">Reviews (0)</button>
                            <div className="panel">
                                <p className="pt-3">
                                    Have your say. Be the first to review the
                                    Nike Dri-FIT Indy Zip-Front.
                                </p>
                                <p className="text-primary">
                                    Write a review.
                                    <i class="fas fa-arrow-right pl-2"></i>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default product;
