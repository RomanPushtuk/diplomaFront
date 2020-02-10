import React, { Component } from "react";

export class Line extends Component<any, any> {
  render() {
    const { startCoord, endCoord } = this.props;

    return startCoord && endCoord ? (
      <svg>
        <line
          x1={startCoord.x}
          y1={startCoord.y}
          x2={endCoord.x}
          y2={endCoord.y}
          strokeWidth="5"
          stroke="violet"
        />
      </svg>
    ) : null;
  }
}
