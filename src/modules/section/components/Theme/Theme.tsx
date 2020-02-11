import React, { Component } from "react";
import { Link } from "react-router-dom";
import { LectureList } from "../LectureList";
import { ITheme } from "../../../../common/interfaces";

interface Props {
  theme: ITheme | null;
}

export class Theme extends Component<Props> {
  render() {
    const { theme } = this.props;

    if (theme) {
      const { title, description, lectures } = theme;

      return (
        <div className="ml-lg-4">
          <h5>{title}</h5>
          <p className="text-muted">{description}</p>
          <LectureList lectures={lectures} />
          <div className="mt-4">
            <Link to="/lecture/1" className="btn btn-outline-primary">
              Продолжить <i className="mdi mdi-send" />
            </Link>
          </div>
        </div>
      );
    }
    return null;
  }
}
