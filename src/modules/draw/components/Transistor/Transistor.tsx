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

export class Transistor extends Component<Props, any> {
  constructor(props: Props) {
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
    const [Output1, Output2, Output3] = createOutputs(this.outputs);

    return (
      <g>
        <svg x={x} y={y} onMouseDown={this.handlerMouseDown}>
          <line
            x1="40"
            y1="0"
            x2="40"
            y2="20"
            stroke="#00bfff"
            strokeWidth="5"
          />
          <line
            x1="0"
            y1="35"
            x2="20"
            y2="35"
            stroke="#00bfff"
            strokeWidth="5"
          />

          <line
            x1="20"
            y1="30"
            x2="40"
            y2="18"
            stroke="#00bfff"
            strokeWidth="3"
          />
          <line
            x1="20"
            y1="23"
            x2="20"
            y2="47"
            stroke="#00bfff"
            strokeWidth="3"
          />
          <line
            x1="20"
            y1="40"
            x2="40"
            y2="53"
            stroke="#00bfff"
            strokeWidth="3"
          />

          <polygon points="26,50 20,40 32,40" fill="#00bfff" strokeWidth="1" />

          <circle
            r="25"
            cx="35"
            cy="35"
            fill="none"
            stroke="#00bfff"
            strokeWidth="5"
          />
          <line
            x1="40"
            y1="50"
            x2="40"
            y2="70"
            stroke="#00bfff"
            strokeWidth="5"
          />

          <Output1
            startDrawingLine={startDrawingLine}
            connectOutputs={connectOutputs}
            type="output1"
            cx={40}
            cy={3}
            fill="red"
          />
          <Output2
            startDrawingLine={startDrawingLine}
            connectOutputs={connectOutputs}
            type="output2"
            cx={3}
            cy={35}
            fill="red"
          />
          <Output3
            startDrawingLine={startDrawingLine}
            connectOutputs={connectOutputs}
            type="output2"
            cx={40}
            cy={67}
            fill="red"
          />
        </svg>
        s
      </g>
    );
  }
}
