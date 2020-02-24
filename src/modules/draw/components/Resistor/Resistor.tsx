import React, { Component, createRef, MouseEvent } from "react";
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

  componentDidMount(): void {
    const coord = {
      x: this.resistorRef.current.getBBox().width / 2,
      y: this.resistorRef.current.getBBox().height / 2
    };

    console.log(coord);
  }

  handlerMouseDown = (event: MouseEvent<any>) => {
    event.stopPropagation();
    this.props.startDragging(this.id);
  };

  resistorRef: any = createRef();

  id: string;

  outputs: { [k: string]: Array<string> };

  render() {
    const { x, y } = this.props.coord;
    const { startDrawingLine, connectOutputs } = this.props;
    const [Output1, Output2] = createOutputs(this.outputs);

    return (
      <g onMouseDown={this.handlerMouseDown}>
        <svg
          x={x}
          y={y}
          onMouseDown={this.handlerMouseDown}
          ref={this.resistorRef}
        >
          <g>
            <line
              x1="13"
              y1="0"
              x2="13"
              y2="20"
              stroke="#00bfff"
              strokeWidth="6"
            />
            <rect
              width="15"
              height="30"
              x="5"
              y="20"
              fill="#3c4858"
              stroke="#00bfff"
              strokeWidth="6"
            />
            <line
              x1="13"
              y1="50"
              x2="13"
              y2="70"
              stroke="#00bfff"
              strokeWidth="6"
            />
            <Output1
              startDrawingLine={startDrawingLine}
              connectOutputs={connectOutputs}
              type="output1"
              cx={13}
              cy={3}
              fill="red"
            />
            <Output2
              startDrawingLine={startDrawingLine}
              connectOutputs={connectOutputs}
              type="output2"
              cx={13}
              cy={67}
              fill="red"
            />
          </g>
        </svg>
      </g>
    );
  }
}
