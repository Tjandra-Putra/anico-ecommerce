import { React, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Accordion } from "react-bootstrap";

import "./Product.css";

const Product = (props) => {
    // getting id from parameter url
    let { prodId } = useParams();

    const product = props.product_list.filter((item) => item.id === prodId);

    // state: form submit
    const [size, setSize] = useState("");

    // state: form error message
    const [sizeError, setSizeError] = useState("");

    const addToCartHandler = (e) => {
        e.preventDefault();

        if (size === "") {
            setSizeError("Please select a size.");
            return;
        } else {
            setSizeError("");
            alert("Added to cart");
        }
    };

    const addToFavouriteHandler = (e) => {
        e.preventDefault();
        alert("added to favourite");
    };

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
                            {product[0].name}
                        </li>
                    </ol>
                </nav>

                <div className="row">
                    <div className="col-md-6">
                        <img
                            src={product[0].imgUrl}
                            className="img-fluid carousel-img"
                            alt="product_1"
                            width="500"
                        />
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="product-tag">
                                    {product[0].tag}
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="product-price">
                                    S${product[0].price}
                                </div>
                            </div>
                        </div>
                        <div className="product-title">{product[0].name}</div>
                        <div className="product-description">
                            {product[0].desc}
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

                        <form onSubmit={addToCartHandler}>
                            <input
                                type="radio"
                                id="radio1"
                                name="radios"
                                value="XS"
                                onChange={(e) => setSize(e.target.value)}
                            />
                            <label htmlFor="radio1">XS</label>

                            <input
                                type="radio"
                                id="radio2"
                                name="radios"
                                value="S"
                                onChange={(e) => setSize(e.target.value)}
                            />
                            <label htmlFor="radio2">S</label>

                            <input
                                type="radio"
                                id="radio3"
                                name="radios"
                                value="M"
                                onChange={(e) => setSize(e.target.value)}
                            />
                            <label htmlFor="radio3">M</label>

                            <input
                                type="radio"
                                id="radio4"
                                name="radios"
                                value="L"
                                onChange={(e) => setSize(e.target.value)}
                            />
                            <label htmlFor="radio4">L</label>

                            <input
                                type="radio"
                                id="radio5"
                                name="radios"
                                value="XL"
                                onChange={(e) => setSize(e.target.value)}
                            />
                            <label htmlFor="radio5">XL</label>

                            <div className="text-danger">{sizeError}</div>

                            <button
                                className="btn btn-dark btn-block"
                                type="submit"
                            >
                                Add to Bag
                            </button>
                        </form>
                        <form onSubmit={addToFavouriteHandler}>
                            <button
                                className="btn btn-outline-dark btn-block"
                                type="submit"
                            >
                                Favourite <i className="far fa-heart"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;