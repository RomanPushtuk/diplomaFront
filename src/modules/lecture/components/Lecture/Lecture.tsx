import React, { Component } from "react";
import ReactMarkdown from "react-markdown";

interface Props {
  text: string;
}

export class Lecture extends Component<Props> {
  render() {
    return (
      <div className="p-4 pt-2 container">
        <ReactMarkdown source={this.props.text} />
      </div>
    );
  }
}
