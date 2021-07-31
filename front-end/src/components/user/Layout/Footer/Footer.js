import React from "react";

import "./Footer.css";

const footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="title">
                            Explore{" "}
                            <span style={{ fontFamily: "var(--font-poppins)" }}>
                                anico.
                            </span>
                        </div>
                    </div>
                    <div className="col-md-4 text-right">
                        <a href="#navbar" className="text-white">
                            <i class="fas fa-arrow-up"></i>
                        </a>
                    </div>
                </div>
                <div className="row info">
                    <div className="col-md-3 p-3">
                        <div className="info-wrapper">
                            <div className="info-title">About the store</div>
                            <div className="info-sub">
                                <p className="text-justify">
                                    There are many variations of passages of Lor
                                    available, but the majority have suffered
                                    alteration in some form.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 p-3">
                        <div className="info-wrapper">
                            <div className="info-title">Customer service</div>
                            <div className="info-sub">
                                <p>Contact Us</p>
                                <p>Return & Refund</p>
                                <p>Terms & Conditions</p>
                                <p>Online Store</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 p-3">
                        <div className="info-wrapper">
                            <div className="info-title">Profile</div>
                            <div className="info-sub">
                                <p>My Account</p>
                                <p>Check Out</p>
                                <p>Help</p>
                                <p>Support</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 p-3">
                        <div className="info-wrapper">
                            <div className="info-title">Connect with us</div>
                            <div className="info-sub">
                                <div class="d-flex justify-content-between">
                                    <div class="p-2">
                                        <i class="fab fa-instagram footer-icon"></i>
                                    </div>
                                    <div class="p-2">
                                        <i class="fab fa-facebook-square footer-icon"></i>
                                    </div>
                                    <div class="p-2">
                                        <i class="fab fa-twitter-square footer-icon"></i>
                                    </div>
                                    <div class="p-2">
                                        <i class="fas fa-envelope-open footer-icon"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="line" />

                <div className="row legal-rights">
                    <div className="col-md-6">
                        © 2021 anico. All Rights Reserved
                    </div>

                    <div className="col-md-6">
                        <div class="d-flex justify-content-end">
                            <div class="pl-4">
                                <p>Guides</p>
                            </div>
                            <div class="pl-4">
                                <p>Terms of Sales</p>
                            </div>
                            <div class="pl-4">
                                <p>Terms of Use</p>
                            </div>
                            <div class="pl-4">
                                <p>anico Privacy Policy</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default footer;
