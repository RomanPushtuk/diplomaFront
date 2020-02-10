import React, { Component } from "react";
import classNames from "classnames/bind";
import { ITheme } from "../../interfaces";
import styles from "./ThemeItem.module.css";

const cn = classNames.bind(styles);

interface Props {
  onSelect: (theme: ITheme) => void;
  theme: ITheme;
}

export class ThemeItem extends Component<Props> {
  render() {
    const { theme, onSelect } = this.props;
    const { title, progress } = theme;

    return (
      <div className={cn("widget")} onClick={() => onSelect(theme)}>
        <h4 className={cn("widget-title")}>{title}</h4>
        <p className={cn("text-success")}>{progress}</p>
      </div>
    );
  }
}
