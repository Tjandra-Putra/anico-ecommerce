import React, { Component } from "react";
import "./Support.css";

import tentImage from "../../../../src/assets/img/tent.png";

class Support extends Component {
    render() {
        return (
            <div className="support">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="title">How can we help you?</div>
                            <div className="description">
                                Want to get in touch? We'd love to hear from
                                you. We will respond to your queries within
                                three working days!
                            </div>

                            <div className="img-wrapper p-5">
                                <img
                                    src={tentImage}
                                    alt=""
                                    className="img-fluid"
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-wrapper">
                                <form action="">
                                    <div class="form-group">
                                        <label for="name">
                                            Name
                                            <span className="text-danger">
                                                *
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            required
                                        />
                                    </div>
                                    <div class="form-group">
                                        <label for="email">
                                            Email address
                                            <span className="text-danger">
                                                *
                                            </span>
                                        </label>
                                        <input
                                            type="email"
                                            class="form-control"
                                            required
                                        />
                                    </div>
                                    <div class="form-group">
                                        <label for="name">
                                            Subject
                                            <span className="text-danger">
                                                *
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            required
                                        />
                                    </div>
                                    <div class="form-group">
                                        <label for="message">
                                            Message
                                            <span className="text-danger">
                                                *
                                            </span>
                                        </label>
                                        <textarea
                                            type="text"
                                            class="form-control text-area"
                                            required
                                        />
                                    </div>

                                    <button
                                        className="btn btn-dark btn-lg btn-block"
                                        type="submit"
                                    >
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Support;
