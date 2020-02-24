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

export class Inductance extends Component<Props, any> {
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
            x1="10"
            y1="0"
            x2="10"
            y2="11.4"
            stroke="#00bfff"
            strokeWidth="5"
          />
          <path
            d="M10,10 C 30,10 30,26.6 10,26.6"
            stroke="#00bfff"
            strokeWidth="5"
            fill="transparent"
          />
          <path
            d="M10,26.6 C 30,26.6 30,43.2 10,43.2"
            stroke="#00bfff"
            strokeWidth="5"
            fill="transparent"
          />
          <path
            d="M10,43.2 C 30,43.2 30,59.8 10,59.8"
            stroke="#00bfff"
            strokeWidth="5"
            fill="transparent"
          />
          <line
            x1="10"
            y1="58"
            x2="10"
            y2="70"
            stroke="#00bfff"
            strokeWidth="5"
          />
          <Output1
            startDrawingLine={startDrawingLine}
            connectOutputs={connectOutputs}
            type="output1"
            cx={10}
            cy={3}
            fill="red"
          />
          <Output2
            startDrawingLine={startDrawingLine}
            connectOutputs={connectOutputs}
            type="output2"
            cx={10}
            cy={67}
            fill="red"
          />
        </svg>
      </g>
    );
  }
}
