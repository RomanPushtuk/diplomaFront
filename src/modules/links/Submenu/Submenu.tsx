import React, { Component } from "react";
import { Router } from "react-router";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import { createBrowserHistory } from "history";
import styles from "./Submenu.module.css";

const cn = classNames.bind(styles);
const history = createBrowserHistory();

interface State {
  isActive: boolean;
}

interface Props {
  /* Массив путей */
  paths: Array<any>;
  isActive: boolean;
  onSelect: (value: string) => void;
}

export class Submenu extends Component<Props, State> {
  state = {
    isActive: false
  };

  handleMouseOver = () => {
    this.setState({ isActive: true });
  };

  handleMouseLeave = () => {
    this.setState({ isActive: false });
  };

  renderListLinks = () =>
    this.props.paths.map((path, index) => {
      return (
        <li key={index} className={cn("item")}>
          <Link
            to={path.to}
            className={cn("link")}
            onClick={() => this.props.onSelect(path.value)}
          >
            <img src={path.img} className={cn("icon")} /> {path.name}
          </Link>
        </li>
      );
    });

  render() {
    return (
      (this.props.isActive || this.state.isActive) && (
        <Router history={history}>
          <ul
            className={cn("submenu")}
            onMouseOver={this.handleMouseOver}
            onMouseLeave={this.handleMouseLeave}
          >
            {this.renderListLinks()}
          </ul>
        </Router>
      )
    );
  }
}
