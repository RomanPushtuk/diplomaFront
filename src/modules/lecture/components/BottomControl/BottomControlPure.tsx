import React, { Component } from "react";
import { Link, Router } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./BottomControl.module.css";

import start from "../../img/forward-continue.svg";
import pause from "../../img/pause.svg";

import { createBrowserHistory } from "history";

const customHistory = createBrowserHistory();

const cn = classNames.bind(styles);

interface Props {
  currentIdLecture: number;
  isSolved: boolean;
  history: any;
  getLecture: (id: number) => void;
}

export class BottomControlPure extends Component<Props> {
  handleStartSheme = () => {};

  handlePauseSheme = () => {};

  render() {
    return (
      <Router history={customHistory}>
        <div className="control">
          <div className="section">
            <div>
              <span>
                <img
                  className="icon-img"
                  alt="back-arrow"
                  onClick={this.handleStartSheme}
                  src={start}
                />
              </span>
            </div>
            <div>
              <span>
                <img
                  className="icon-img"
                  alt="next-arrow"
                  onClick={this.handlePauseSheme}
                  src={pause}
                />
              </span>
            </div>
          </div>
          {this.props.isSolved && (
            <a
              href=""
              onClick={() => {
                this.props.getLecture(this.props.currentIdLecture + 1);
                this.props.history.push(
                  `/lecture/${this.props.currentIdLecture + 1}`
                );
              }}
            >
              Перейти к следующей лекции
            </a>
          )}
        </div>
      </Router>
    );
  }
}
