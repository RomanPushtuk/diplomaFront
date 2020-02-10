import React, { Component } from "react";
import { Link } from "react-router-dom";
import client1 from "../../../../images/client/01.jpg";

interface Props {
  author: string;
  text: string;
  date: string;
}

export class Comment extends Component<Props, any> {
  render() {
    const { author, text, date } = this.props;

    return (
      <li className="comment-desk mt-4">
        <Link to="#" className="float-right text-muted">
          <i className="mdi mdi-reply" />
          &nbsp; Reply
        </Link>
        <div className="commentor">
          <Link className="float-left pr-3" to="#">
            <img
              className="d-block mx-auto shadow rounded-circle img-fluid"
              src={client1}
              alt="img"
            />
          </Link>
          <div className="overflow-hidden d-block">
            <h4 className="media-heading mb-0">
              <Link to="#" className="text-dark">
                {author}
              </Link>
            </h4>
            <small className="text-muted">{date}</small>
          </div>
        </div>
        <div className="mt-3">
          <p className="text-muted font-italic p-3 bg-light rounded">{text}</p>
        </div>
      </li>
    );
  }
}
