import React, { Component } from "react";
import classNames from "classnames/bind";
import styles from "./TopControlPure.module.css";

import back from "../../img/back.svg";
import forward from "../../img/forward.svg";
import zoom from "../../img/zoom-in.svg";

const cn = classNames.bind(styles);

interface Props {
  undo: () => void;
  turn: () => void;
}

export class TopControl extends Component<Props, any> {
  handleChangeZoom = () => {};

  render() {
    return (
      <div className={cn("control")}>
        <div className={cn("section")}>
          <div className={cn("item")}>
            <img
              className={cn("icon-img")}
              alt="back-arrow"
              onClick={this.props.undo}
              src={back}
            />
          </div>
          <div className={cn("item")}>
            <img
              className={cn("icon-img")}
              alt="next-arrow"
              onClick={this.props.turn}
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
