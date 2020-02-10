import React, { Component } from "react";

export class Rect extends Component<any, any> {
  render() {
    const { startCoord, endCoord } = this.props;

    if (startCoord && endCoord) {
      let { x, y } = startCoord;
      const width = endCoord.x - x;
      const height = endCoord.y - y;

      if (width < 0) {
        x -= Math.abs(width);
      }

      if (height < 0) {
        y -= Math.abs(height);
      }

      return (
        <svg>
          <rect x={x} y={y} width={Math.abs(width)} height={Math.abs(height)} />
        </svg>
      );
    }
    return null;
  }
}
