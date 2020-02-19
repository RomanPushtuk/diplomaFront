import React, { Component } from "react";
import { getByLocalStorage } from "../../common/servises";

interface Props {
  getUserInfo: () => void;
  history: any;
}

export class Profile extends Component<any, any> {
  componentDidMount() {
    const { getUserInfo, history } = this.props;

    getUserInfo()
      .then((userData: any) => {
        const { userName, progress } = userData;
      })
      .catch(history.push("/login"));
  }

  render() {
    return <h1>Profile</h1>;
  }
}
