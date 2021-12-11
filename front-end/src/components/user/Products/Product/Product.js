import { React, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { connect } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import HashLoader from "react-spinners/HashLoader";
import { css } from "@emotion/react";

import * as actionTypes from "../../../../store/actions";
import "./Product.css";

const Product = (props) => {
  // state
  const [addToBagText, setAddToBagText] = useState("Add To Bag");
  const [productImageUrl, setProductImageUrl] = useState([]);
  let [color, setColor] = useState("#000000");

  // Can be a string as well. Need to ensure each key-value pair ends with ;
  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;

  // toast component
  const notify_success = () =>
    toast.success(product[0].name + " has been added to cart.", {
      duration: 2400,
      style: {
        // border: "1px solid #000000",
        padding: "16px",
        color: "#000000",
      },
      iconTheme: {
        primary: "#50c878",
        secondary: "#FFFAEE",
      },
      position: "top-center",
    });

  // getting id from parameter url
  let { prodId } = useParams();

  const product = props.product_list.filter((item) => item.id === prodId);

  // Getting the images based on id from server
  useEffect(() => {
    // Auto restore scroll position after page renders
    window.scrollTo(0, 0);

    axios
      .post("http://localhost:5000/api/products/get-product-image", {
        product_id: prodId,
      })
      .then((res) => {
        let productImageUrlArray = res.data["product_image_url"];

        productImageUrlArray.map((item) => {
          setProductImageUrl((productImageUrl) => [...productImageUrl, item]);
        });
      })
      .catch((err) => {
        console.log(err, "==========");
      });
  }, []);

  // state: form submit
  const [size, setSize] = useState("");

  // state: form error message
  const [sizeError, setSizeError] = useState("");

  // form: add to cart handler
  const addToCartHandler = (e) => {
    e.preventDefault();

    if (size === "") {
      setSizeError("Please select a size.");
      return;
    } else {
      // removes error message
      setSizeError("");

      // redux: adding to cart
      var tempProduct = [...product];
      tempProduct[0].size = size;
      props.addToCart(tempProduct[0]);

      // toast component
      notify_success();

      //   setAddToBagText("Added To Cart ✓");
    }
  };

  // form: add to favourite handler
  const addToFavouriteHandler = (e) => {
    e.preventDefault();
    alert("added to favourite");
  };

  // making sure data is loaded before rendering to avoid errors
  let loadedData = null;

  if (product.length !== 0 && productImageUrl.length !== 0) {
    loadedData = (
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
            <li className="breadcrumb-item text-muted" aria-current="page">
              {product[0].name}
            </li>
          </ol>
        </nav>

        <div className="row">
          <div className="col-md-6">
            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                {productImageUrl.map((item, index) =>
                  index === 0 ? (
                    <div className="carousel-item active" key={index}>
                      <img
                        className="d-block w-100"
                        src={
                          require(`../../../../assets/products/${item}`).default
                        }
                        alt="First slide"
                      />
                    </div>
                  ) : (
                    <div className="carousel-item" key={index}>
                      <img
                        className="d-block w-100"
                        src={
                          require(`../../../../assets/products/${item}`).default
                        }
                        alt="First slide"
                      />
                    </div>
                  )
                )}
              </div>
              {productImageUrl.length > 1 ? (
                <div>
                  <a
                    className="carousel-control-prev"
                    href="#carouselExampleControls"
                    role="button"
                    data-slide="prev"
                  >
                    <i className="fas fa-arrow-left"></i>

                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#carouselExampleControls"
                    role="button"
                    data-slide="next"
                  >
                    <i className="fas fa-arrow-right"></i>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              ) : null}
            </div>
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-6">
                <div className="product-tag">{product[0].tag}</div>
              </div>
              <div className="col-md-6">
                <div className="product-price">
                  S${product[0].price.toFixed(2)}
                </div>
              </div>
            </div>
            <div className="product-title">{product[0].name}</div>
            <div className="product-description">{product[0].desc}</div>
            <div className="d-flex justify-content-between">
              <div className="bd-highlight">
                <div className="product-size">Select Size</div>
              </div>
              <div className="bd-highlight">
                <div className="product-size-guide">
                  <div className="product-size">Size Guide</div>
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

              {(() => {
                if (product[0].stock === 0)
                  return <div className="product-stock">out of stock</div>;
                if (product[0].stock <= 20)
                  return (
                    <div className="product-stock">
                      Only {product[0].stock} left in stock
                    </div>
                  );
                else
                  return (
                    <div className="product-stock">
                      {product[0].stock} in stock
                    </div>
                  );
              })()}

              <div className="text-danger">{sizeError}</div>

              {product[0].stock === 0 ? (
                <button
                  className="btn btn-dark btn-block"
                  type="submit"
                  disabled
                >
                  {addToBagText}
                </button>
              ) : (
                <button className="btn btn-dark btn-block" type="submit">
                  {addToBagText}
                </button>
              )}
            </form>
            <form onSubmit={addToFavouriteHandler}>
              <button className="btn btn-outline-dark btn-block" type="submit">
                Favourite <i className="far fa-heart"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  } else {
    loadedData = (
      <div className="container">
        <div className="loadedWrapper">
          <HashLoader loading={true} size={50} css={override} color={color} />
        </div>
      </div>
    );
  }

  return (
    <div className="product">
      <Toaster position="top-right" reverseOrder={false} />

      {loadedData}
    </div>
  );
};

// REDUX SECTION

// STORE - Getting all the state from reducer.js
const mapStateToProps = (global_state) => {
  return {
    product_list: global_state.allProducts,
  };
};

// ACTION - returning value to the reducer.js for processing and computation
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (item) =>
      dispatch({
        type: actionTypes.ADD_TO_CART,
        product: item,
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
