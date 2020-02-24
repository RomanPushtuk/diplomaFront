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

export class Battery extends Component<Props, any> {
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
            x1="17"
            y1="0"
            x2="17"
            y2="30"
            stroke="#00bfff"
            strokeWidth="5"
          />
          <line
            x1="0"
            y1="30"
            x2="34"
            y2="30"
            stroke="#00bfff"
            strokeWidth="2"
          />
          <line
            x1="5"
            y1="38"
            x2="29"
            y2="38"
            stroke="#00bfff"
            strokeWidth="6"
          />
          <line
            x1="17"
            y1="40"
            x2="17"
            y2="70"
            stroke="#00bfff"
            strokeWidth="5"
          />
          <Output1
            startDrawingLine={startDrawingLine}
            connectOutputs={connectOutputs}
            type="output1"
            cx={17}
            cy={3}
            fill="red"
          />
          <Output2
            startDrawingLine={startDrawingLine}
            connectOutputs={connectOutputs}
            type="output2"
            cx={17}
            cy={67}
            fill="red"
          />
        </svg>
        s
      </g>
    );
  }
}
