import React, { Component } from "react";
import classNames from "classnames/bind";
import styles from "./ThemeItem.module.css";

const cn = classNames.bind(styles);

interface Props {
  onSelect: (idTheme: number) => void;
  theme: any;
}

export class ThemeItem extends Component<Props> {
  handleClick = () => {
    const { onSelect } = this.props;

    onSelect(this.props.theme.id);
  };

  render() {
    const { title, progress } = this.props.theme;

    return (
      <div className={cn("widget")} onClick={this.handleClick}>
        <h4 className={cn("widget-title")}>{title}</h4>
        <p className={cn("text-success")}>{progress}</p>
      </div>
    );
  }
}
