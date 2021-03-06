import React, { Component } from "react";

interface Props {
  tasks: Array<string>;
}

export class Tasks extends Component<Props> {
  render() {
    return (
      <div className="p-4 pt-2 container">
        <div className="">
          <h4 className="page-title">Задания </h4>
          <ul>
            {this.props.tasks.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
