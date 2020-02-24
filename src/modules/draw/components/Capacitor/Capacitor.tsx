import React, { Component, MouseEvent } from "react";
import { ICoord } from "../../../../common/interfaces";
import { createOutputs } from "../../utils";

interface Props {
  id: string;
  coord: ICoord;
  outputs: { [k: string]: any };
  startDragging: (id: string) => void;
  startDrawingLine: (event: MouseEvent, id: string) => void;
  connectOutputs: (id: string, event: MouseEvent<any>) => void;
}

export class Capacitor extends Component<Props, any> {
  constructor(props: any) {
    super(props);
    this.id = props.id;
    this.outputs = props.outputs;
  }

  handlerMouseDown = (event: MouseEvent<any>) => {
    event.stopPropagation();
    this.props.startDragging(this.id);
  };

  id: string;

  outputs: { [k: string]: Array<string> };

  render() {
    const { x, y } = this.props.coord;
    const { startDrawingLine, connectOutputs } = this.props;
    const [Output1, Output2] = createOutputs(this.outputs);

    return (
      <g>
        <svg x={x} y={y} onMouseDown={this.handlerMouseDown}>
          <line
            x1="12"
            y1="0"
            x2="12"
            y2="30"
            strokeWidth="5"
            stroke="#00bfff"
          />
          <line
            x1="12"
            y1="40"
            x2="12"
            y2="70"
            strokeWidth="5"
            stroke="#00bfff"
          />
          <line
            x1="0"
            y1="30"
            x2="25"
            y2="30"
            strokeWidth="5"
            stroke="#00bfff"
          />
          <line
            x1="0"
            y1="40"
            x2="25"
            y2="40"
            strokeWidth="5"
            stroke="#00bfff"
          />
          <Output1
            startDrawingLine={startDrawingLine}
            connectOutputs={connectOutputs}
            type="output1"
            cx={12}
            cy={4}
            fill="red"
          />
          <Output2
            startDrawingLine={startDrawingLine}
            connectOutputs={connectOutputs}
            type="output2"
            cx={12}
            cy={66}
            fill="red"
          />
        </svg>
      </g>
    );
  }
}
