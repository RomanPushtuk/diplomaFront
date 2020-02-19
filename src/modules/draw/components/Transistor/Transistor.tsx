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
        <svg x={x} y={y}>
          <Output1
            startDrawingLine={startDrawingLine}
            connectOutputs={connectOutputs}
            type="output1"
            cx={13}
            cy={10}
            r={10}
            fill="yellow"
          />
          <Output2
            startDrawingLine={startDrawingLine}
            connectOutputs={connectOutputs}
            type="output2"
            cx={13}
            cy={45}
            r={10}
            fill="yellow"
          />
          <Output3
            startDrawingLine={startDrawingLine}
            connectOutputs={connectOutputs}
            type="output2"
            cx={35}
            cy={28}
            r={10}
            fill="yellow"
          />
          <rect
            width={25}
            height={15}
            y={20}
            fill="#40E0D0"
            onMouseDown={this.handlerMouseDown}
          />
        </svg>
        s
      </g>
    );
  }
}
