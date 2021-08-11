import { React, useState } from "react";
import { connect } from "react-redux";
import * as actionTypes from "../../../store/actions";
import { Link } from "react-router-dom";

import cartImage from "../../../assets/img/online-shopping.png";
import "./Cart.css";

const Cart = (props) => {
    // Variables
    let setBtnCheckOut = false;

    // init
    let loadedCart = props.loadedMyCart.map((item, index) => (
        <tr className="row-box" key={index}>
            <td>
                <i
                    className="fas fa-times ml-3 icon-delete"
                    onClick={() => props.removeCartItemHandler(index)}
                ></i>
            </td>
            <td>
                <div className="d-flex flex-row">
                    <div className="p-2">
                        <img src={item.imgUrl} alt="" className="img-fluid" />
                    </div>
                    <div className="p-2">
                        <div className="product-info">
                            <div className="product-name">{item.name}</div>
                            <div className="product-price">S${item.price}</div>
                            <div className="product-size">Size {item.size}</div>
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-row">
                    <div className="text-move-to-favourite">
                        Move to Favourite
                    </div>
                </div>
            </td>
            <td>
                <div className="d-flex flex-row">
                    <div className="p-2">
                        <button
                            className="btn btn-light btn-decrease btn-quantity"
                            onClick={() =>
                                props.decreaseCartQuantityHandler(
                                    item.id,
                                    item.quantity
                                )
                            }
                        >
                            -
                        </button>
                    </div>
                    <div className="p-2">
                        <input
                            type="number"
                            name=""
                            id=""
                            className="form-control input-quantity"
                            value={item.quantity}
                        />
                    </div>
                    <div className="p-2">
                        <button
                            className="btn btn-increase btn-quantity"
                            onClick={() =>
                                props.increaseCartQuantityHandler(
                                    item.id,
                                    item.quantity
                                )
                            }
                        >
                            +
                        </button>
                    </div>
                </div>
            </td>
            <td>
                <div className="sub-total">S${item.price}</div>
            </td>
        </tr>
    ));

    let loadedCartHead = (
        <thead>
            <tr>
                <th scope="col"></th>
                <th scope="col">Product</th>
                <th scope="col">Quantity</th>
                <th scope="col">Sub Total</th>
            </tr>
        </thead>
    );

    if (loadedCart.length === 0) {
        loadedCart = (
            <div className="cart-empty-wrapper">
                <img src={cartImage} alt="" className="img-fluid" width="100" />
                <h4>There are no items in your bag!</h4>
                <Link to="/products">
                    <button className="btn btn-outline-dark btn-continue-shopping">
                        Continue Shopping
                    </button>
                </Link>
            </div>
        );
        loadedCartHead = null;
        setBtnCheckOut = true;
    }

    return (
        <div className="cart">
            <div className="container">
                <div
                    className="alert alert-light alert-dismissible fade show"
                    role="alert"
                >
                    <strong
                        style={{ fontWeight: "600", paddingRight: "0.3rem" }}
                    >
                        HAVE A PROMO CODE?
                    </strong>
                    You will be able to apply it on the payment page during
                    checkout.
                    <button
                        type="button"
                        className="close"
                        data-dismiss="alert"
                        aria-label="Close"
                    >
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>

                <div className="row">
                    <div className="col-md-8">
                        <table className="table borderless table-responsive">
                            {loadedCartHead}
                            <tbody>{loadedCart}</tbody>
                        </table>
                    </div>
                    <div className="col-md-4">
                        <div className="summary">
                            <div className="text-summary">Order Summary</div>
                            <div className="summary-info">
                                <div className="summary-box">
                                    <div className="total-item-wrapper">
                                        <div className="d-flex justify-content-between">
                                            <div className="pr-2">
                                                <div className="sub-total">
                                                    Item(s) x
                                                    {props.loadedMyCart.length}
                                                </div>
                                            </div>
                                            <div className="pl-2">S$125.00</div>
                                        </div>
                                    </div>

                                    <div className="additional-fee-wrapper">
                                        <div className="d-flex justify-content-between">
                                            <div className="pr-2">
                                                <div className="sub-total">
                                                    Estimated Delivery &
                                                    Handling
                                                </div>
                                            </div>
                                            <div className="pl-2">
                                                <div className="text-shipping">
                                                    S$4.00
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <hr />

                                    <div className="total-fee-wrapper">
                                        <div className="d-flex justify-content-between">
                                            <div className="pr-2">
                                                <div className="total">
                                                    Total
                                                </div>
                                            </div>
                                            <div className="pl-2">
                                                <div className="text-total">
                                                    S$129.00
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                    <button
                                        className="btn btn-dark btn-block btn-checkout"
                                        disabled={setBtnCheckOut}
                                    >
                                        Checkout
                                    </button>
                                    <button
                                        className="btn btn-secondary btn-block btn-checkout"
                                        disabled
                                    >
                                        Pay Later
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// REDUX SECTION

// STORE - Getting all the state from reducer.js
const mapStateToProps = (global_state) => {
    return {
        loadedMyCart: global_state.myCart,
    };
};

// ACTION - returning value to the reducer.js for processing and computation
const mapDispatchToProps = (dispatch) => {
    return {
        increaseCartQuantityHandler: (itemId, itemQuantity) =>
            dispatch({
                type: actionTypes.INCREASE_CART_QUANTITY,
                itemId: itemId,
                currentQuantity: itemQuantity,
            }),
        decreaseCartQuantityHandler: (itemId, itemQuantity) =>
            dispatch({
                type: actionTypes.DECREASE_CART_QUANTITY,
                itemId: itemId,
                currentQuantity: itemQuantity,
            }),
        removeCartItemHandler: (index) =>
            dispatch({ type: actionTypes.REMOVE_CART_ITEM, index: index }),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
