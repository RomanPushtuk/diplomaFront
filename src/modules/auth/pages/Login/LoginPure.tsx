import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "reactstrap";

import { BackToHome, FieldInput } from "../../components";

import user01 from "../../../../images/user/01.jpg";

interface State {
  email: string;
  password: string;
  error: string;
}

export class LoginPure extends Component<any, State> {
  state = {
    email: "",
    password: "",
    error: ""
  };

  handleEmailChange = (event: any) => {
    this.setState({ email: event.target.value });
  };

  handlePasswordChange = (event: any) => {
    this.setState({ password: event.target.value });
  };

  handleSignIn = () => {
    const { signIn, history } = this.props;
    const { email, password } = this.state;

    signIn({ email, password })
      .then(() => {
        history.push("/");
      })
      .catch((err: any) => {
        this.setState({ error: err.message });
      });
  };

  render() {
    return (
      <>
        <BackToHome />
        <section className="cover-user bg-white">
          <div className="container-fluid">
            <Row className="position-relative">
              <Col lg={4} className="cover-my-30 order-2">
                <div className="cover-user-img d-flex align-items-center">
                  <Row>
                    <Col>
                      <div className="login-page position-relative">
                        <div className="text-center">
                          <h4 className="mb-4">Login</h4>
                        </div>
                        <form className="login-form">
                          <Row>
                            <Col lg={12}>
                              <FieldInput
                                label="Your Email"
                                placeholder="Email"
                                type="text"
                                isRequired
                                onChange={this.handleEmailChange}
                              />
                            </Col>

                            <Col lg={12}>
                              <FieldInput
                                label="Password"
                                placeholder="Password"
                                type="password"
                                isRequired
                                onChange={this.handlePasswordChange}
                              />
                            </Col>

                            <Col lg={12}>
                              <p className="float-right forgot-pass">
                                <a
                                  href="page-cover-re-password"
                                  className="text-dark font-weight-bold"
                                >
                                  Forgot password ?
                                </a>
                              </p>
                              <div className="form-group">
                                <div className="custom-control custom-checkbox">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="customCheck1"
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor="customCheck1"
                                  >
                                    Remember me
                                  </label>
                                </div>
                              </div>
                            </Col>
                            <Col lg={12} className="mb-0">
                              <h4>{this.state.error}</h4>
                            </Col>
                            <Col lg={12} className="mb-0">
                              <button
                                type="button"
                                className="btn btn-primary w-100"
                                onClick={this.handleSignIn}
                              >
                                Sign in
                              </button>
                            </Col>

                            <Col lg={12} className="mt-4 text-center">
                              <h6>Or Login With</h6>
                              <ul className="list-unstyled social-icon mb-0 mt-3">
                                <li className="list-inline-item">
                                  <Link to="#" className="rounded mr-1">
                                    <i
                                      className="mdi mdi-facebook"
                                      title="Facebook"
                                    />
                                  </Link>
                                </li>
                                <li className="list-inline-item">
                                  <Link to="#" className="rounded mr-1">
                                    <i
                                      className="mdi mdi-google-plus"
                                      title="Google"
                                    />
                                  </Link>
                                </li>
                                <li className="list-inline-item">
                                  <Link to="#" className="rounded">
                                    <i
                                      className="mdi mdi-github-circle"
                                      title="Github"
                                    />
                                  </Link>
                                </li>
                              </ul>
                            </Col>

                            <Col className="text-center">
                              <p className="mb-0 mt-3">
                                <small className="text-dark mr-2">
                                  Don't have an account ?
                                </small>{" "}
                                <Link
                                  to="/signup"
                                  className="text-dark font-weight-bold"
                                >
                                  Sign Up
                                </Link>
                              </p>
                            </Col>
                          </Row>
                        </form>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col
                lg={8}
                className="offset-lg-4 padding-less img order-1"
                style={{ backgroundImage: `url(${user01})` }}
              />
            </Row>
          </div>
        </section>
      </>
    );
  }
}
