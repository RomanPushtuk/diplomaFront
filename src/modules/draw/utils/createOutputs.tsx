import React, { createRef, MouseEvent, PureComponent } from "react";
import { getCenter } from ".";
import { CircuitModel } from "../../lecture/components/Circuit/CircuitModel";

const circuitModel = new CircuitModel();

export function createOutputs(outputs: { [k: string]: Array<string> }): any {
  return Object.keys(outputs).map((outputId: string, index: number) => {
    return class Output extends PureComponent<any> {
      constructor(props: any) {
        super(props);
        this.id = outputId;
      }

      componentDidMount(): void {
        const coord = getCenter(this.outputRef.current);

        circuitModel.setCoordOutput(this.id, coord);
        circuitModel.setTypeOutput(this.id, this.props.type);
      }

      handleMouseDown = (event: MouseEvent<any>) => {
        event.stopPropagation();
        this.props.startDrawingLine(event, this.id);
      };

      handleMouseUp = () => {
        this.props.connectOutputs(this.id);
      };

      id: string;

      outputRef = createRef<any>();

      render() {
        const { cx, cy, r, fill } = this.props;

        return (
          <g
            ref={this.outputRef}
            onMouseDown={this.handleMouseDown}
            onMouseUp={this.handleMouseUp}
          >
            <circle cx={cx} cy={cy} r={r} fill={fill} />
          </g>
        );
      }
    };
  });
}
