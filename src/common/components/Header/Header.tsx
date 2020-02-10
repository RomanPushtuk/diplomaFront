import React, { Component } from "react";
import classNames from "classnames/bind";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

const cn = classNames.bind(styles);

interface Props {
  isAuthorized: boolean;
}

export class Header extends Component<Props> {
  render() {
    // return this.props.isAuthorized ? (
    //   <h3>Вы авторизованы</h3>
    // ) : (
    //   <h3>Вы неавторизованы</h3>
    // );

    return (
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
