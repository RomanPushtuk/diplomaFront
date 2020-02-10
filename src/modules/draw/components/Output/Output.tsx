import React, { PureComponent, MouseEvent, createRef } from "react";
import { generateUniqueId } from "../../../../common/utils";

export class Output extends PureComponent<any> {
  constructor(props: any) {
    super(props);
    this.id = this.props.id;
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
}
