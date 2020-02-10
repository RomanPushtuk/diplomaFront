import React, { Component } from "react";

interface Props {
  title: string;
}

export class Sidebar extends Component<Props> {
  render() {
    const { title, children } = this.props;

    return (
      <div className="sidebar rounded shadow">
        <div className="widget border-bottom p-4">
          <h5 className="mb-0">{title}</h5>
        </div>

        <div className="p-4">{children}</div>
      </div>
    );
  }
}
