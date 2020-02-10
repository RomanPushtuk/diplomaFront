import React, { Component } from "react";

interface Props {
  text: string;
}

export class Lecture extends Component<Props> {
  render() {
    return <div className="p-4 pt-2 container">{this.props.text}</div>;
  }
}
