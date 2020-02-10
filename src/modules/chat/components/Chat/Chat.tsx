import React, { Component } from "react";
import { Comments } from "../Comments";
import { PostBox } from "../PostBox";

interface Props {
  idLecture: number;
  comments: Array<any>;
}

export class Chat extends Component<Props, any> {
  render() {
    return (
      <div className="container">
        <Comments comments={this.props.comments} />
        <PostBox />
      </div>
    );
  }
}
