import React, { useState } from "react";
import "./Products.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import BarLoader from "react-spinners/BarLoader";
import { css } from "@emotion/react";

const Products = (props) => {
  // filter component
  let [category, setCategory] = useState("Recommended");
  let loadedProduct;

  const categoryHandler = (event) => {
    setCategory(event.target.value);
  };

  console.log(category);

  // ensures product are rendered
  if (props.product_list.length !== 0) {
    if (category === "Recommended") {
      loadedProduct = props.product_list.map((product) => (
        <div className="col-md-4 mb-5" key={product.id}>
          <div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
            <div className="product-wrapper">
              <Link
                to={"/products/" + product.id}
                style={{
                  textDecoration: "none",
                  color: "unset",
                }}
              >
                <div className="img-wrapper">
                  <div className="content">
                    <div className="content-overlay"></div>
                    <img
                      src={
                        require(`../../../assets/products/${product.imgUrl}`)
                          .default
                      }
                      alt={product.name}
                      className="img-fluid content-image"
                      style={{ borderRadius: "2px" }}
                    />
                    <div className="content-details fadeIn-bottom">
                      <h3>{product.name}</h3>
                      <p>
                        View
                        <i className="fas fa-arrow-right pl-2"></i>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="product-tag">{product.tag}</div>
                <div className="product-name">{product.name}</div>
                <div className="product-price">S${product.price}</div>
              </Link>
            </div>
          </div>
        </div>
      ));
    }

    // filter: price low to high
    if (category === "Price (low - high)") {
      loadedProduct = props.product_list
        .sort((a, b) => a.price - b.price)
        .map((product) => (
          <div className="col-md-4 mb-5" key={product.id}>
            <div className="product-wrapper">
              <Link
                to={"/products/" + product.id}
                style={{
                  textDecoration: "none",
                  color: "unset",
                }}
              >
                <div className="img-wrapper">
                  <div className="content">
                    <div className="content-overlay"></div>
                    <img
                      src={
                        require(`../../../assets/products/${product.imgUrl}`)
                          .default
                      }
                      alt={product.name}
                      className="img-fluid content-image"
                      style={{ borderRadius: "2px" }}
                    />
                    <div className="content-details fadeIn-bottom">
                      <h3>{product.name}</h3>
                      <p>
                        View
                        <i className="fas fa-arrow-right pl-2"></i>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="product-tag">{product.tag}</div>
                <div className="product-name">{product.name}</div>
                <div className="product-price">S${product.price}</div>
              </Link>
            </div>
          </div>
        ));
    }

    // filter: price high to low
    if (category === "Price (high - low)") {
      loadedProduct = props.product_list
        .sort((a, b) => b.price - a.price)
        .map((product) => (
          <div className="col-md-4 mb-5" key={product.id}>
            <div className="product-wrapper">
              <Link
                to={"/products/" + product.id}
                style={{
                  textDecoration: "none",
                  color: "unset",
                }}
              >
                <div className="img-wrapper">
                  <div className="content">
                    <div className="content-overlay"></div>
                    <img
                      src={
                        require(`../../../assets/products/${product.imgUrl}`)
                          .default
                      }
                      alt={product.name}
                      className="img-fluid content-image"
                      style={{ borderRadius: "2px" }}
                    />
                    <div className="content-details fadeIn-bottom">
                      <h3>{product.name}</h3>
                      <p>
                        View
                        <i className="fas fa-arrow-right pl-2"></i>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="product-tag">{product.tag}</div>
                <div className="product-name">{product.name}</div>
                <div className="product-price">S${product.price}</div>
              </Link>
            </div>
          </div>
        ));
    }
  } else {
    loadedProduct = (
      <div className="container">
        <div className="loadedWrapper">
          <BarLoader loading={true} size={50} />
        </div>
      </div>
    );
  }

  return (
    <div className="products">
      <div className="container">
        <div className="filter-nav">
          <div className="row">
            <div className="col-md-6">
              <div className="title">Collections</div>
            </div>
            <div className="col-md-6">
              <div className="d-flex flex-row float-right">
                <div className="px-2 my-auto ">
                  <div className="results text-secondary d-inline">
                    {props.product_list.length} Results
                  </div>
                </div>
                <div className="px-2 my-auto">
                  <form
                    as="select"
                    value={category}
                    onChange={(event) => {
                      categoryHandler(event);
                    }}
                  >
                    <div className="text-right">
                      <div className="custom-selector">
                        <select>
                          <option>Recommended</option>
                          <option>Price (low - high)</option>
                          <option>Price (high - low)</option>
                        </select>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="products-wrapper mt-4">
          <div className="row">{loadedProduct}</div>
        </div>
      </div>
    </div>
  );
};

// STORE - Getting all the state from reducer.js
const mapStateToProps = (global_state) => {
  return {
    product_list: global_state.allProducts,
  };
};

export default connect(mapStateToProps, null)(Products);
