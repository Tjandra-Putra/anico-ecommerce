import React, { Component } from "react";
import Swal from "sweetalert2";
import axios from "axios";

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

  componentDidMount = () => {
    // fetch("/api/support/form-submit")
    //   .then((response) => response.json())
    //   .then((data) => console.log("This is your data", data));
    // axios.get("http://localhost:5000/api/support/form-submit").then((res) => {
    //   console.log(res.data);
    // });
  };

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

    // message must have minimum 20 characters
    if (fields["message"] && fields["message"].length < 20) {
      formIsValid = false;
      errors["message"] = "Please enter at least 20 characters";
    }

    this.setState({ errors: errors });
    return formIsValid;
  };

  // submit form
  submitFormHandler = (event) => {
    event.preventDefault();

    if (this.fieldValidationHandler()) {
      // dynamically enable components
      this.setState({ isFormValid: true, btnEnable: true });

      // passing to back-end
      axios
        .post(
          "http://localhost:5000/api/support/form-submit",
          this.state.fields
        )
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });

      // sweet alert modal
      this.sweetAlertModal();
    } else {
      console.log("Form has validation errors");
    }
  };

  // sweet alert animation
  sweetAlertModal = () => {
    Swal.fire({
      title: "Success",
      icon: "success",
      text: "Your message has been sent.",
      confirmButtonColor: "#000000",
    });
  };

  render() {
    return (
      <div className="support">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="title">How can we help you?</div>
              <div className="description">
                Want to get in touch? We'd love to hear from you. We will
                respond to your queries within three working days!
              </div>

              <div className="img-wrapper p-5">
                <img src={tentImage} alt={tentImage} className="img-fluid" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-wrapper">
                <form onSubmit={this.submitFormHandler}>
                  <div className="form-group">
                    <label htmlFor="name">
                      Name
                      <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={this.fieldChangeHandler.bind(this, "name")}
                      value={this.state.fields["name"]}
                    />
                    <small className="text-danger">
                      {this.state.errors["name"]}
                    </small>
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">
                      Email address
                      <span className="text-danger">*</span>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      onChange={this.fieldChangeHandler.bind(this, "email")}
                      value={this.state.fields["email"]}
                    />
                    <small className="text-danger">
                      {this.state.errors["email"]}
                    </small>
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">
                      Subject
                      <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={this.fieldChangeHandler.bind(this, "subject")}
                      value={this.state.fields["subject"]}
                    />
                    <small className="text-danger">
                      {this.state.errors["subject"]}
                    </small>
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">
                      Message
                      <span className="text-danger">*</span>
                    </label>
                    <textarea
                      type="text"
                      className="form-control text-area"
                      onChange={this.fieldChangeHandler.bind(this, "message")}
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
