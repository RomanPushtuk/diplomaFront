import React, { Component } from "react";
import classNames from "classnames/bind";
import styles from "./TopControlPure.module.css";

import back from "../../img/back.svg";
import forward from "../../img/forward.svg";
import zoom from "../../img/zoom-in.svg";

const cn = classNames.bind(styles);

export class TopControl extends Component<any, any> {
  handleBack = () => {};

  handleForward = () => {};

  handleChangeZoom = () => {};

  render() {
    return (
      <div className={cn("control")}>
        <div className={cn("section")}>
          <div className={cn("item")}>
            <img
              className={cn("icon-img")}
              alt="back-arrow"
              onClick={this.handleBack}
              src={back}
            />
          </div>
          <div className={cn("item")}>
            <img
              className={cn("icon-img")}
              alt="next-arrow"
              onClick={this.handleForward}
              src={forward}
            />
          </div>
          <div className={cn("item")}>
            <img className={cn("icon-img")} alt="zoom" src={zoom} />
            <span>200%</span>
          </div>
        </div>
      </div>
    );
  }
}
