import React, { Component } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import { ILecture } from "../../../../common/interfaces";
import styles from "./LectureItem.module.css";

const cn = classNames.bind(styles);

interface Props {
  lecture: ILecture;
}

export class LectureItem extends Component<Props> {
  render() {
    const { lecture } = this.props;
    const { id, title } = lecture;
    const to = `/lecture/${id}`;

    return (
      <li className={cn("item")}>
        <Link className={cn("text")} to={to}>
          <i className="mdi mdi-pan-right text-success mdi-18px mr-2" />
          {title}
        </Link>
      </li>
    );
  }
}
