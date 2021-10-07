import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./Register.css";
import backPack from "../../../../src/assets/img/backpack.png";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      btnEnable: false,
      fields: {},
      errorMsg: {},
      isValid: false,
    };
  }

  fieldChangeHandler = (field, event) => {
    let fields = this.state.fields;
    fields[field] = event.target.value;
    this.setState({ fields });
  };

  submitFormHandler = (event) => {
    event.preventDefault();

    // pass form to back-end, back-end returns a response
    axios
      .post("http://localhost:5000/api/register/form-submit", this.state.fields)
      .then((res) => {
        console.log(res);
        this.setState({
          errorMsg: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });

    let invalidFieldCounter = 1;
    for (const [key, value] of Object.entries(this.state.errorMsg)) {
      if (value == "") {
        invalidFieldCounter++;
      }
    }

    if (invalidFieldCounter == 4) {
      this.setState({
        btnEnable: "disabled",
      });
    }

    console.log(invalidFieldCounter);
  };

  render() {
    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="title">Let's Get Started</div>
              <div className="description">
                Create your anico Member profile and get first access to the
                very best of our products, inspiration and community.
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
                  {this.state.errorMsg["email"] == "" ? (
                    <small className="text-success">Looks good!</small>
                  ) : (
                    <small className="text-danger">
                      {this.state.errorMsg["email"]}
                    </small>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Contact Number</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="+65"
                    onChange={this.fieldChangeHandler.bind(this, "phone")}
                    value={this.state.fields["phone"]}
                  />
                  {this.state.errorMsg["phone"] == "" ? (
                    <small className="text-success">Looks good!</small>
                  ) : (
                    <small className="text-danger">
                      {this.state.errorMsg["phone"]}
                    </small>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    onChange={this.fieldChangeHandler.bind(this, "password")}
                    value={this.state.fields["password"]}
                  />
                  {this.state.errorMsg["password"] == "" ? (
                    <small className="text-success">Looks good!</small>
                  ) : (
                    <small className="text-danger">
                      {this.state.errorMsg["password"]}
                    </small>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="confirm_password">Confirm Password</label>
                  <input
                    type="password"
                    className="form-control"
                    onChange={this.fieldChangeHandler.bind(
                      this,
                      "password_confirm"
                    )}
                    value={this.state.fields["password_confirm"]}
                  />
                  {this.state.errorMsg["password_confirm"] == "" ? (
                    <small className="text-success">Looks good!</small>
                  ) : (
                    <small className="text-danger">
                      {this.state.errorMsg["password_confirm"]}
                    </small>
                  )}
                </div>

                <button
                  className="btn btn-dark btn-lg btn-block mb-3"
                  type="submit"
                  disabled={this.state.btnEnable}
                >
                  Create Account
                </button>
              </form>

              <small>
                Already have an account? <Link to="/login">Login</Link>
              </small>
            </div>
            <div className="col-md-6">
              <div className="img-wrapper">
                <img
                  src={backPack}
                  alt={backPack}
                  className="img-fluid mx-auto d-block"
                  width="400"
                  style={{ marginTop: "5em" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
