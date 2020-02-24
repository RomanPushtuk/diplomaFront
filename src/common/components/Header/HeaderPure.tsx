import React, { Component } from "react";
import { debounce } from "lodash";
import Cookies from "js-cookie";
import { Submenu } from "../../../modules/links/Submenu/Submenu";
import classNames from "classnames/bind";
import { PATHS } from "./constants";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { getByLocalStorage } from "../../servises";

const cn = classNames.bind(styles);

interface Props {
  user: any;
  onExit: () => void;
  history: any;
}

export class HeaderPure extends Component<Props> {
  state = {
    userName: "",
    isAuthorized: false,
    isActiveSubmenu: false
  };

  componentDidMount() {
    const login = Cookies.get("login");
    const password = Cookies.get("password");

    if (login && password) {
      getByLocalStorage("USER_NAME").then(userName => {
        this.setState({ isAuthorized: true, userName });
      });
    } else {
      this.setState({ isAuthorized: false });
    }
  }

  handleOnMouseOver = () => {
    this.setState({ isActiveSubmenu: true });
  };

  handleOnMouseLeave = debounce(() => {
    this.setState({ isActiveSubmenu: false });
  }, 200);

  renderNotAuthorized() {
    return (
      <p className={cn("signIn")}>
        <Link to="/login">Войти</Link>
      </p>
    );
  }

  handleHandle = (value: string) => {
    if (value === "exit") {
      Cookies.remove("login");
      Cookies.remove("password");
      this.setState({ isAuthorized: false });
      this.props.history.push("/");
    }
  };

  renderAuthorized() {
    const { userName } = this.state;

    return (
      <>
        <p
          className={cn("signIn", "dropDown")}
          onMouseOver={this.handleOnMouseOver}
          onMouseLeave={this.handleOnMouseLeave}
        >
          <Link to="/profile">{userName}</Link>
        </p>
        <Submenu
          paths={PATHS}
          isActive={this.state.isActiveSubmenu}
          onSelect={this.handleHandle}
        />
      </>
    );
  }

  render() {
    const { isAuthorized } = this.state;

    return (
      <div className={cn("headerMain")}>
        <div className={cn("header")}>
          <div className={cn("basis")}>
            <h4 className={cn("logo")}>
              <Link to="/">LearnElectronic.</Link>
            </h4>
          </div>
          <div>
            {isAuthorized
              ? this.renderAuthorized()
              : this.renderNotAuthorized()}
          </div>
        </div>
      </div>
    );
  }
}
