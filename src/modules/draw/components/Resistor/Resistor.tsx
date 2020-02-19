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

export class Resistor extends Component<Props, any> {
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
        <svg x={x} y={y}>
          <Output1
            startDrawingLine={startDrawingLine}
            connectOutputs={connectOutputs}
            type="output1"
            cx={13}
            cy={10}
            r={10}
            fill="red"
          />
          <line
            x1="13"
            y1="0"
            x2="13"
            y2="20"
            stroke="violet"
            strokeWidth="5"
          />
          <rect
            width="15"
            height="30"
            x="5"
            y="20"
            fill="none"
            stroke="violet"
            strokeWidth="5"
            onMouseDown={this.handlerMouseDown}
          />
          <line
            x1="13"
            y1="50"
            x2="13"
            y2="70"
            stroke="violet"
            strokeWidth="5"
          />
          {/*<rect*/}
          {/*  width={25}*/}
          {/*  height={15}*/}
          {/*  y={20}*/}
          {/*  fill="#40E0D0"*/}
          {/*  onMouseDown={this.handlerMouseDown}*/}
          {/*/>*/}
          <Output2
            startDrawingLine={startDrawingLine}
            connectOutputs={connectOutputs}
            type="output2"
            cx={13}
            cy={45}
            r={10}
            fill="red"
          />
        </svg>
        s
      </g>
    );
  }
}
