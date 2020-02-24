import React, { Component } from "react";
import { getByLocalStorage } from "../../common/servises";
import Cookies from "js-cookie";

interface Props {
  getUserInfo: () => void;
  history: any;
}

export class Profile extends Component<any, any> {
  componentDidMount() {
    const login = Cookies.get("login");
    const password = Cookies.get("password");

    if (login && password) {
      getByLocalStorage("THEMES_PROGRESS").then(themesProgress => {
        console.log(themesProgress);
      });
    } else {
      this.props.history.push("/login");
    }
  }

  render() {
    return <h1>Profile</h1>;
  }
}
