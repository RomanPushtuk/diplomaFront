import React, { Component } from "react";
import { Line } from "../../../draw";

interface Props {
  connects: Array<any>;
}

export class Lines extends Component<Props> {
  render() {
    const { connects } = this.props;

    return connects.map(({ startCoord, endCoord }: any, index: number) => {
      return (
        <Line key={index} startCoord={startCoord} endCoord={endCoord} />
      );
    });
  }
}
