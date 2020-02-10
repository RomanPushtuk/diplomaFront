import React, { Component } from "react";
import { getByLocalStorage } from "../../common/servises";

interface Props {
  getUserInfo: (token: any) => void;
}

export class Profile extends Component<any, any> {
  componentDidMount() {
    const { getUserInfo, history } = this.props;

    getByLocalStorage("TOKEN")
      .then((token: any) => {
        getUserInfo(token);
      })
      .catch(reason => history.push("/login"));
  }

  render() {
    return <h1>Profile</h1>;
  }
}
