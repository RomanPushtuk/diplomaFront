import React, { Component } from "react";
import Cookies from "js-cookie";
import classNames from "classnames/bind";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

const cn = classNames.bind(styles);

interface Props {
  isAuthorized: boolean;
  userName: string;
}

export class Header extends Component<Props> {
  render() {
    const login = Cookies.get("login");
    const password = Cookies.get("password");

    const isAutorized = !!(this.props.isAuthorized || (login && password));

    return isAutorized ? (
      <div className={cn("headerMain")}>
        <div className={cn("header")}>
          <div className={cn("basis")}>
            <h4 className={cn("logo")}>
              <Link to="/">LearnElectronic.</Link>
            </h4>
          </div>
          <div className={cn("headerMenu")}>
            <p className={cn("signIn")}>
              <Link to="/login">
                <img className={cn("logoImg")} /> {this.props.userName}
              </Link>
            </p>
          </div>
        </div>
      </div>
    ) : (
      <div className={cn("headerMain")}>
        <div className={cn("header")}>
          <div className={cn("basis")}>
            <h4 className={cn("logo")}>
              <Link to="/">LearnElectronic.</Link>
            </h4>
          </div>
          <div>
            <p className={cn("signIn")}>
              <Link to="/login">Войти</Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
