import React from "react";

import "./Cart.css";

const cart = () => {
    return (
        <div className="cart">
            <div className="container">
                <div
                    class="alert alert-light alert-dismissible fade show"
                    role="alert"
                >
                    <strong style={{ fontWeight: "600" }}>
                        HAVE A PROMO CODE?
                    </strong>{" "}
                    You will be able to apply it on the payment page during
                    checkout.
                    <button
                        type="button"
                        class="close"
                        data-dismiss="alert"
                        aria-label="Close"
                    >
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>

                <div className="row">
                    <div className="col-md-8">
                        <table className="table borderless table-responsive">
                            <thead>
                                <tr>
                                    <th scope="col"></th>
                                    <th scope="col">Product</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Sub Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="row-box">
                                    <td>
                                        <i class="fas fa-times ml-3 icon-delete"></i>
                                    </td>
                                    <td>
                                        <div class="d-flex flex-row">
                                            <div class="p-2">
                                                <img
                                                    src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2ae375f6-ac20-4cc0-92ff-ce0e307fb801/dri-fit-indy-zip-front-light-support-padded-sports-bra-K7ZvFg.png"
                                                    alt=""
                                                    className="img-fluid"
                                                />
                                            </div>
                                            <div class="p-2">
                                                <div className="product-info">
                                                    <div className="product-name">
                                                        Neux Extra
                                                    </div>
                                                    <div className="product-price">
                                                        S$24.99
                                                    </div>
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
                                        <div class="d-flex flex-row">
                                            <div class="p-2">
                                                <button className="btn btn-light btn-decrease">
                                                    -
                                                </button>
                                            </div>
                                            <div class="p-2">
                                                <input
                                                    type="number"
                                                    name=""
                                                    id=""
                                                    className="form-control input-quantity"
                                                />
                                            </div>
                                            <div class="p-2">
                                                <button className="btn btn-increase">
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="sub-total">S$20.59</div>
                                    </td>
                                </tr>{" "}
                                <tr className="row-box">
                                    <td>
                                        <i class="fas fa-times ml-3 icon-delete"></i>
                                    </td>
                                    <td>
                                        <div class="d-flex flex-row">
                                            <div class="p-2">
                                                <img
                                                    src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2ae375f6-ac20-4cc0-92ff-ce0e307fb801/dri-fit-indy-zip-front-light-support-padded-sports-bra-K7ZvFg.png"
                                                    alt=""
                                                    className="img-fluid"
                                                />
                                            </div>
                                            <div class="p-2">
                                                <div className="product-info">
                                                    <div className="product-name">
                                                        Summer Special Jacket
                                                        Lorem ipsum dolor sit
                                                        amet.
                                                    </div>
                                                    <div className="product-price">
                                                        S$24.99
                                                    </div>
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
                                        <div class="d-flex flex-row">
                                            <div class="p-2">
                                                <button className="btn btn-light btn-decrease">
                                                    -
                                                </button>
                                            </div>
                                            <div class="p-2">
                                                <input
                                                    type="number"
                                                    name=""
                                                    id=""
                                                    className="form-control input-quantity"
                                                />
                                            </div>
                                            <div class="p-2">
                                                <button className="btn btn-increase">
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="sub-total">S$20.59</div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col-md-4">
                        <div className="summary">
                            <div className="text-summary">Summary</div>
                            <div className="summary-info">
                                <div className="summary-box">
                                    <div className="sub-total-wrapper">
                                        <div class="d-flex justify-content-between">
                                            <div class="pr-2">
                                                <div className="sub-total">
                                                    Sub Total
                                                </div>
                                            </div>
                                            <div class="pl-2">S$125</div>
                                        </div>
                                    </div>
                                    <div className="additional-fee-wrapper">
                                        <div class="d-flex justify-content-between">
                                            <div class="pr-2">
                                                <div className="sub-total">
                                                    Estimated Delivery &
                                                    Handling
                                                </div>
                                            </div>
                                            <div class="pl-2">
                                                <div className="text-free">
                                                    Free
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="total-fee-wrapper">
                                        <div class="d-flex justify-content-between">
                                            <div class="pr-2">
                                                <div className="sub-total">
                                                    Total
                                                </div>
                                            </div>
                                            <div class="pl-2">
                                                <div className="text-total">
                                                    S$129
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                    <button className="btn btn-dark btn-block btn-checkout">
                                        Checkout
                                    </button>
                                    <button className="btn btn-secondary btn-block btn-checkout" disabled>
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

export default cart;
