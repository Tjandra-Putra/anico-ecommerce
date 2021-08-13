import React, { Component } from "react";

import "./Support.css";
import tentImage from "../../../../src/assets/img/tent.png";

class Support extends Component {
    constructor(props) {
        super(props);
        this.state = {
            btnEnable: false,
            fields: {},
            errors: {},
        };
    }

    dateHandler = () => {
        let newDate = new Date();
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();
        let time = newDate.toLocaleTimeString();

        return date + "/" + month + "/" + year + ", " + time;
    };

    fieldChangeHandler = (field, event) => {
        let fields = this.state.fields;
        fields[field] = event.target.value;
        this.setState({ fields });
    };

    fieldValidationHandler = () => {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        // name must not be empty
        if (!fields["name"]) {
            formIsValid = false;
            errors["name"] = "Please enter your name.";
        }

        // email must not be empty
        if (!fields["email"]) {
            formIsValid = false;
            errors["email"] = "Please enter your email.";
        }

        // email must be valid
        if (typeof fields["email"] !== "undefined") {
            let lastAtPos = fields["email"].lastIndexOf("@");
            let lastDotPos = fields["email"].lastIndexOf(".");

            if (
                !(
                    lastAtPos < lastDotPos &&
                    lastAtPos > 0 &&
                    fields["email"].indexOf("@@") === -1 &&
                    lastDotPos > 2 &&
                    fields["email"].length - lastDotPos > 2
                )
            ) {
                formIsValid = false;
                errors["email"] = "Email is not valid";
            }
        }

        // subject must not be empty
        if (!fields["subject"]) {
            formIsValid = false;
            errors["subject"] = "Please enter a subject.";
        }

        // message must not be empty
        if (!fields["message"]) {
            formIsValid = false;
            errors["message"] = "Please enter a message.";
        }

        if (fields["message"] && fields["message"].length < 20) {
            formIsValid = false;
            errors["message"] = "Please enter at least 20 characters";
        }

        console.log(typeof fields["message"]);

        this.setState({ errors: errors });
        return formIsValid;
    };

    submitFormHandler = (event) => {
        event.preventDefault();

        if (this.fieldValidationHandler()) {
            this.setState({ isFormValid: true, btnEnable: true });
        } else {
            console.log("Form has validation errors");
        }
    };

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
                                    alt={tentImage}
                                    className="img-fluid"
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-wrapper">
                                <form onSubmit={this.submitFormHandler}>
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
                                            onChange={this.fieldChangeHandler.bind(
                                                this,
                                                "name"
                                            )}
                                            value={this.state.fields["name"]}
                                        />
                                        <small className="text-danger">
                                            {this.state.errors["name"]}
                                        </small>
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
                                            onChange={this.fieldChangeHandler.bind(
                                                this,
                                                "email"
                                            )}
                                            value={this.state.fields["email"]}
                                        />
                                        <small className="text-danger">
                                            {this.state.errors["email"]}
                                        </small>
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
                                            onChange={this.fieldChangeHandler.bind(
                                                this,
                                                "subject"
                                            )}
                                            value={this.state.fields["subject"]}
                                        />
                                        <small className="text-danger">
                                            {this.state.errors["subject"]}
                                        </small>
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
                                            onChange={this.fieldChangeHandler.bind(
                                                this,
                                                "message"
                                            )}
                                            value={this.state.fields["message"]}
                                        />
                                        <small className="text-danger">
                                            {this.state.errors["message"]}
                                        </small>
                                    </div>

                                    <button
                                        className="btn btn-dark btn-lg btn-block"
                                        type="submit"
                                        disabled={this.state.btnEnable}
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
