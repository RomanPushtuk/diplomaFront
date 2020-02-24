import React, { Component } from "react";
import classNames from "classnames/bind";
import styles from "./TopControlPure.module.css";

import back from "../../img/back.svg";
import forward from "../../img/forward.svg";
import zoom from "../../img/zoom-in.svg";
import del from "../../img/delete.svg";
import turn from "../../img/turn.svg";

const cn = classNames.bind(styles);

interface Props {
  undo: () => void;
  turn: () => void;
  selectedElement?: any;
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
              onClick={this.props.undo}
              src={back}
              draggable={false}
            />
          </div>
          <div className={cn("item")}>
            <img
              className={cn("icon-img")}
              onClick={this.props.turn}
              src={forward}
              draggable={false}
            />
          </div>
          <div className={cn("item")}>
            <img
              className={cn("icon-img")}
              alt="zoom"
              src={zoom}
              draggable={false}
            />
            <span>200%</span>
          </div>
        </div>
        <div className={cn("section")}>
          <div className={cn("item")}>
            <img
              className={cn("icon-img")}
              onClick={this.props.undo}
              src={turn}
              draggable={false}
            />
          </div>
          <div className={cn("item")}>
            <img
              className={cn("icon-img")}
              onClick={this.props.turn}
              src={del}
              draggable={false}
            />
          </div>
        </div>
      </div>
    );
  }
}
