import React, { Component, MouseEvent } from "react";
import classNames from "classnames/bind";
import styles from "./Pull.module.css";

const cn = classNames.bind(styles);

interface Props {
  type: string;
  puller: (type: string) => void;
}

export class Pull extends Component<Props> {
  handleMouseDown = () => {
    const { type, puller } = this.props;

    puller(type);
  };

  render() {
    return <div onMouseDown={this.handleMouseDown} className={cn("pull")} />;
  }
}
