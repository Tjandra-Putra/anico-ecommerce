import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { Redirect } from "react-router-dom";

import "./Login.css";
import boot from "../../../../src/assets/img/boot.png";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      btnEnable: false,
      fields: {},
      errorMsg: {},
      redirect: null,
    };
  }

  // toast component
  notify_success = () => toast.success("Login Successfully!");
  notify_error = () => toast.error("Incorrect email or password.");

  // binding Fields
  fieldChangeHandler = (field, event) => {
    let fields = this.state.fields;
    fields[field] = event.target.value;
    this.setState({ fields });
  };

  // form handler
  submitFormHandler = (event) => {
    event.preventDefault();

    // pass form to back-end, back-end returns a response
    axios
      .post("http://localhost:5000/api/login/form-submit", this.state.fields)
      .then((res) => {
        console.log(res);
        this.setState({
          errorMsg: res.data,
        });

        if (!this.state.errorMsg.hasOwnProperty("isValid")) {
          this.notify_error();
        }

        if (this.state.errorMsg["isValid"] === "valid") {
          this.notify_success();

          setTimeout(() => {
            this.setState({ redirect: <Redirect to="/product" /> });
          }, 3000);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="login">
        <Toaster />
        {this.state.redirect}

        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="title">Login</div>
              <div className="description">
                By logging in, you agree to anico's Privacy Policy and Terms of
                Use.
              </div>

              <form onSubmit={this.submitFormHandler}>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={this.fieldChangeHandler.bind(this, "email")}
                    value={this.state.fields["email"]}
                  />
                  {/* {this.state.errorMsg["email"] === "" ? (
                    <small className="text-success"></small>
                  ) : (
                    <small className="text-danger">
                      {this.state.errorMsg["email"]}
                    </small>
                  )} */}
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    onChange={this.fieldChangeHandler.bind(this, "password")}
                    value={this.state.fields["password"]}
                  />
                  {/* {this.state.errorMsg["password"] === "" ? (
                    <small className="text-success">Looks good!</small>
                  ) : (
                    <small className="text-danger">
                      {this.state.errorMsg["password"]}
                    </small>
                  )} */}
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div class="form-group form-check">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="exampleCheck1"
                      />
                      <label
                        class="form-check-label text-muted"
                        for="exampleCheck1"
                        style={{ textTransform: "none", fontWeight: "400" }}
                      >
                        Keep me signed in
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <label
                      class="form-check-label text-muted float-right"
                      style={{ textTransform: "none", fontWeight: "400" }}
                    >
                      Forgotten your password?
                    </label>
                  </div>
                </div>

                {this.state.errorMsg["isValid"] === "valid" ? (
                  <button
                    className="btn btn-dark btn-lg btn-block mb-3"
                    type="submit"
                    disabled="disabled"
                  >
                    Login
                  </button>
                ) : (
                  <button
                    className="btn btn-dark btn-lg btn-block mb-3"
                    type="submit"
                  >
                    Login
                  </button>
                )}
              </form>

              <small>
                Not a member? <Link to="/register">Join us</Link>
              </small>
            </div>
            <div className="col-md-6">
              <div className="img-wrapper">
                <img
                  src={boot}
                  alt={boot}
                  className="img-fluid mx-auto d-block"
                  width="400"
                  style={{ marginTop: "2em" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
