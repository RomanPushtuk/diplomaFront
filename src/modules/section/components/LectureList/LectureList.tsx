import React, { Component } from "react";
import { LectureItem } from "../LectureItem";
import { ILecture } from "../../interfaces";

interface Props {
  lectures: Array<ILecture>;
}

export class LectureList extends Component<Props> {
  render() {
    const { lectures } = this.props;

    return (
      <ul className="list-unstyled">
        {lectures.map((lecture, index: number) => {
          return <LectureItem key={index} lecture={lecture} />;
        })}
      </ul>
    );
  }
}
