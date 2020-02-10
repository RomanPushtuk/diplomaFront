import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "reactstrap";

import { BackToHome } from "../../components";

// import images
import user02 from "../../../../images/user/02.jpg";

interface Props {
  signUp: (data: any) => Promise<any>;
}

interface State {
  email: "";
  password: "";
  error: "";
}

export class Signup extends Component<any, State> {
  handleSignUp = () => {
    // @ts-ignore
    const { signUp, history } = this.props;
    const { email, password } = this.state;

    signUp({ email, password })
      .then(() => {
        history.goBack();
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
                      <div className="login_page">
                        <div className="text-center">
                          <h4 className="mb-4">Signup</h4>
                        </div>
                        <form className="login-form">
                          <Row>
                            <Col md={6}>
                              <div className="form-group position-relative">
                                <label>
                                  First name{" "}
                                  <span className="text-danger">*</span>
                                </label>
                                <i className="mdi mdi-account ml-3 icons" />
                                <input
                                  type="text"
                                  className="form-control pl-5"
                                  placeholder="First Name"
                                  name="s"
                                />
                              </div>
                            </Col>

                            <Col md={6}>
                              <div className="form-group position-relative">
                                <label>
                                  Last name{" "}
                                  <span className="text-danger">*</span>
                                </label>
                                <i className="mdi mdi-account ml-3 icons" />
                                <input
                                  type="text"
                                  className="form-control pl-5"
                                  placeholder="Last Name"
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
