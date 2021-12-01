import React, { useState, useEffect } from "react";
import "./Products.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Products = (props) => {
  return (
    <div className="products">
      <div className="container">
        <div className="filter-nav">
          <div className="row">
            <div className="col-md-6">
              <div className="title">Collections</div>
            </div>
            <div className="col-md-6">
              <div className="text-right">
                <p className="text-secondary d-inline pr-3">
                  {props.product_list.length} Results
                </p>
                <div className="dropdown d-inline">
                  <button
                    className="btn btn-outline-dark dropdown-toggle px-3"
                    style={{
                      borderRadius: "2px",
                      border: "1.5px solid #000000",
                    }}
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Sort By
                  </button>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <div className="dropdown-item" href="#">
                      Price (low -high)
                    </div>
                    <div className="dropdown-item" href="#">
                      Newest
                    </div>
                    <div className="dropdown-item" href="#">
                      Top Sellers
                    </div>
                    <div className="dropdown-item" href="#">
                      Price (high - low)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="products-wrapper mt-4">
          <div className="row">
            {props.product_list.map((product) => (
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
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
