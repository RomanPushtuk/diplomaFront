import React, { Component } from "react";

import start from "../../img/forward-continue.svg";
import pause from "../../img/pause.svg";

interface Props {
  isSolved: boolean;
}

export class BottomControl extends Component<Props> {
  handleStartSheme = () => {};

  handlePauseSheme = () => {};

  render() {
    return (
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
        <div>
          {this.props.isSolved && (
            <a className="badge badge-success mr-2 mb-2" href="/components">
              Success
            </a>
          )}
        </div>
      </div>
    );
  }
}
