import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getBreadCrumbs } from "./utils";

interface Props {
  history: any;
}

export class BreadCrumbs extends Component<Props> {
  render() {
    const { history } = this.props;
    const breadCrumbs = getBreadCrumbs(history);

    return (
      <ul className="page-next d-inline-block bg-white shadow p-2 pl-4 pr-4 rounded mb-0">
        {breadCrumbs.map(({ title, url }, index: number) => {
          return (
            <li key={index}>
              <Link
                to={url}
                className="text-uppercase font-weight-bold text-dark"
              >
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }
}
