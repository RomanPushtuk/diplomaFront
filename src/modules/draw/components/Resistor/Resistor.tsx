import React, { Component, MouseEvent } from "react";
import { ICoord } from "../../../../common/interfaces";
import { createOutputs } from "../../utils";

interface Props {
  startDragging: (id: string) => void;
  startDrawingLine: (event: MouseEvent, id: string) => void;
  connectOutputs: (id: string, event: MouseEvent<any>) => void;
}

export const Resistor = (
  id: string,
  coord: ICoord,
  outputs: { [k: string]: any }
) => {
  return class extends Component<Props, any> {
    constructor(props: any) {
      super(props);
      this.id = id;
      this.coord = coord;
      this.outputs = outputs;
    }

    handlerMouseDown = (event: MouseEvent<any>) => {
      event.stopPropagation();
      this.props.startDragging(id);
    };

    id: string;

    coord: ICoord;

    outputs: { [k: string]: Array<string> };

    render() {
      const { x, y } = this.coord;
      const { startDrawingLine, connectOutputs } = this.props;
      const [Output1, Output2] = createOutputs(this.outputs);

      return (
        <g>
          <svg x={x} y={y}>
            <Output1
              startDrawingLine={startDrawingLine}
              connectOutputs={connectOutputs}
              cx={13}
              cy={10}
              r={10}
              fill="red"
            />
            <rect
              width={25}
              height={15}
              y={20}
              fill="#40E0D0"
              onMouseDown={this.handlerMouseDown}
            />
            <Output2
              startDrawingLine={startDrawingLine}
              connectOutputs={connectOutputs}
              cx={13}
              cy={45}
              r={10}
              fill="red"
            />
          </svg>
        </g>
      );
    }
  };
};
