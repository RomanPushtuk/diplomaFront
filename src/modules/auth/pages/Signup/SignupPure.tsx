import React, { Component, ChangeEvent } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "reactstrap";

import { BackToHome } from "../../components";

// import images
import user02 from "../../../../images/user/02.jpg";

interface Props {
  signUp: (data: any) => Promise<any>;
  history: any;
}

interface State {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
  isAgree: boolean;
  error: string;
}

export class SignupPure extends Component<Props, State> {
  state = {
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAgree: false,
    error: ""
  };

  handleSignUp = () => {
    const { signUp, history } = this.props;
    const { userName, email, password } = this.state;

    signUp({ userName, email, password })
      .then(() => {
        history.goBack();
      })
      .catch((err: any) => {
        console.log(err.message);
      });
  };

  handleInputUserName = (event: ChangeEvent<any>) => {
    const userName = event.target.value;

    this.setState({ userName });
  };

  handleInputEmail = (event: ChangeEvent<any>) => {
    const email = event.target.value;

    this.setState({ email });
  };

  handleInputPassword = (event: ChangeEvent<any>) => {
    const password = event.target.value;

    this.setState({ password });
  };

  handleInputConfirmPassword = (event: ChangeEvent<any>) => {
    const confirmPassword = event.target.value;

    this.setState({ confirmPassword });
  };

  handleCheckbox = (event: ChangeEvent<any>) => {
    const isAgree = event.target.checked;

    this.setState({ isAgree });
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
                      <div className="login_page">
                        <div className="text-center">
                          <h4 className="mb-4">Signup</h4>
                        </div>
                        <form className="login-form">
                          <Row>
                            <Col md={12}>
                              <div className="form-group position-relative">
                                <label>
                                  User Name{" "}
                                  <span className="text-danger">*</span>
                                </label>
                                <i className="mdi mdi-account ml-3 icons" />
                                <input
                                  onChange={this.handleInputUserName}
                                  type="text"
                                  className="form-control pl-5"
                                  placeholder="User Name"
                                  name="s"
                                />
                              </div>
                            </Col>

                            <Col md={12}>
                              <div className="form-group position-relative">
                                <label>
                                  Your Email{" "}
                                  <span className="text-danger">*</span>
                                </label>
                                <i className="mdi mdi-account ml-3 icons" />
                                <input
                                  onChange={this.handleInputEmail}
                                  type="email"
                                  className="form-control pl-5"
                                  placeholder="Email"
                                  name="email"
                                />
                              </div>
                            </Col>

                            <Col md={12}>
                              <div className="form-group position-relative">
                                <label>
                                  Password{" "}
                                  <span className="text-danger">*</span>
                                </label>
                                <i className="mdi mdi-key ml-3 icons" />
                                <input
                                  onChange={this.handleInputPassword}
                                  type="password"
                                  className="form-control pl-5"
                                  placeholder="Password"
                                />
                              </div>
                            </Col>

                            <Col md={12}>
                              <div className="form-group position-relative">
                                <label>
                                  Confirm Password{" "}
                                  <span className="text-danger">*</span>
                                </label>
                                <i className="mdi mdi-key ml-3 icons" />
                                <input
                                  onChange={this.handleInputConfirmPassword}
                                  type="password"
                                  className="form-control pl-5"
                                  placeholder="Confirm Password"
                                />
                              </div>
                            </Col>

                            <Col md={12}>
                              <div className="form-group">
                                <div className="custom-control custom-checkbox">
                                  <input
                                    onChange={this.handleCheckbox}
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="customCheck1"
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor="customCheck1"
                                  >
                                    I Accept{" "}
                                    <Link to="#" className="text-primary">
                                      Terms And Condition
                                    </Link>
                                  </label>
                                </div>
                              </div>
                            </Col>

                            <Col md={12}>
                              <button
                                type="button"
                                className="btn btn-primary w-100"
                                onClick={this.handleSignUp}
                              >
                                Register
                              </button>
                            </Col>

                            <Col lg={12} className="mt-4 text-center">
                              <h6>Or Signup With</h6>
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

                            <div className="mx-auto">
                              <p className="mb-0 mt-3">
                                <small className="text-dark mr-2">
                                  Already have an account ?
                                </small>{" "}
                                <Link
                                  to="/login"
                                  className="text-dark font-weight-bold"
                                >
                                  Sign in
                                </Link>
                              </p>
                            </div>
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
                style={{ backgroundImage: `url(${user02})` }}
              />
            </Row>
          </div>
        </section>
      </>
    );
  }
}
