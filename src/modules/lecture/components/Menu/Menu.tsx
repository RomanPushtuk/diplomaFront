import React, { Component } from "react";
import classNames from "classnames/bind";
import { MenuItem } from "../MenuItem";
import styles from "./Menu.module.css";
import { MENU_ITEMS } from "../../constant";

const cn = classNames.bind(styles);

interface Props {
  onSelect: (value: string) => void;
}

interface State {
  value: string;
}

export class Menu extends Component<Props, State> {
  state = {
    value: "lecture"
  };

  handleOnSelect = (value: string) => {
    this.props.onSelect(value);
    this.setState({ value });
  };

  render() {
    return (
      <div className={cn("lecture-menu")}>
        {MENU_ITEMS.map(({ value, img }, index) => {
          const isSelect = this.state.value === value;

          return (
            <MenuItem
              key={index}
              isSelect={isSelect}
              onSelect={this.handleOnSelect}
              value={value}
              img={img}
            />
          );
        })}
      </div>
    );
  }
}
