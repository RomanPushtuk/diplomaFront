import React, { Component } from "react";
import classNames from "classnames/bind";
import styles from "./MenuItem.module.css";

const cn = classNames.bind(styles);

interface Props {
  isSelect: boolean;
  value: string;
  img: any;
  onSelect: (value: string) => void;
}

export class MenuItem extends Component<Props> {
  handleSelect = () => {
    const { onSelect, value } = this.props;

    onSelect(value);
  };

  render() {
    const { img, isSelect } = this.props;

    return (
      <div
        className={cn("item", isSelect && "selected")}
        onClick={this.handleSelect}
      >
        <span>
          <img className={cn("item-img")} src={img} />
        </span>
      </div>
    );
  }
}
