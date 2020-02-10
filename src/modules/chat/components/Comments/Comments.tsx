import React, { Component } from "react";
import { Comment } from "../Comment";

interface Props {
  comments: Array<any>;
}

export class Comments extends Component<Props, any> {
  render() {
    return (
      <div>
        <div className="p-4 pt-2">
          <h4 className="page-title pb-3">Комментарии :</h4>
          <ul className="media-list list-unstyled mb-0">
            {this.props.comments.map(comment => {
              const { id, author, text, date } = comment;

              return (
                <Comment key={id} author={author} text={text} date={date} />
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}
