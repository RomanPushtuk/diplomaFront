import React, { Component } from "react";
import classNames from "classnames/bind";
import styles from "./MenuItem.module.css";

const cn = classNames.bind(styles);

interface State {
  isMouseDown: boolean;
  isHover: boolean;
}

interface Props {
  isSelect: boolean;
  value: string;
  img: any;
  onSelect: (value: string) => void;
}

export class MenuItem extends Component<Props, State> {
  state = {
    isMouseDown: false,
    isHover: false
  };

  handleMouseDown = () => {
    this.setState({ isMouseDown: true });
  };

  handleMouseUp = () => {
    const { onSelect, value } = this.props;

    this.setState({ isMouseDown: false });
    onSelect(value);
  };

  handleMouseOver = () => {
    this.setState({ isHover: true });
  };

  handleMouseLeave = () => {
    this.setState({ isHover: false, isMouseDown: false });
  };

  render() {
    const { img, isSelect } = this.props;
    const { isMouseDown, isHover } = this.state;

    return (
      <div
        className={cn(
          "item",
          isSelect && "selected",
          isMouseDown && "down",
          isHover && "hover"
        )}
        onMouseLeave={this.handleMouseLeave}
        onMouseOver={this.handleMouseOver}
        onMouseDown={this.handleMouseDown}
        onMouseUp={this.handleMouseUp}
      >
        <span>
          <img className={cn("item-img")} src={img} draggable={false} />
        </span>
      </div>
    );
  }
}
