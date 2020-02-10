import React, { Component, MouseEvent } from "react";
import { createElement } from "./utils";

interface Props {
  circuit: { [k: string]: any };
  startDragging: (id: string) => void;
  startDrawingLine: (event: MouseEvent, id: string) => void;
  connectOutputs: (id: string) => void;
}

export class Elements extends Component<Props, any> {
  render() {
    const { circuit } = this.props;

    return Object.keys(circuit).map(key => {
      const { id, type, coord, outputs } = circuit[key];
      const Element = createElement(id, type, coord, outputs);

      return (
        <Element
          key={id}
          startDragging={this.props.startDragging}
          startDrawingLine={this.props.startDrawingLine}
          connectOutputs={this.props.connectOutputs}
        />
      );
    });
  }
}
