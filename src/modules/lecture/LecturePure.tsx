import React, { Component } from "react";
import { match } from "react-router-dom";
import { ILecture } from "../../common/interfaces";
import { Menu } from "./components/Menu";
import { Lecture } from "./components/Lecture";
import { Editor } from "./components/Editor";
import { Tasks } from "./components/Tasks";
import { Chat } from "../chat";

interface Props {
  match: match<any>;
  getLecture: (id: number) => void;
  lecture: ILecture;
}

interface State {
  modalContent: string;
}

export class LecturePure extends Component<Props, State> {
  state = {
    modalContent: "lecture"
  };

  componentDidMount() {
    const { getLecture, match } = this.props;
    const id = Number(match.params.lectureId);

    getLecture(id);
  }

  handleSelect = (value: string) => {
    this.setState({ modalContent: value });
  };

  render() {
    const { modalContent } = this.state;
    const {
      id,
      tasks,
      content,
      solution,
      comments
    } = this.props.lecture;

    return (
      <div className="lecture">
        <Menu onSelect={this.handleSelect} />
        {modalContent === "editor" && <Editor answer={solution} />}
        {modalContent === "lecture" && <Lecture text={content} />}
        {modalContent === "tasks" && <Tasks tasks={tasks} />}
        {modalContent === "chat" && <Chat idLecture={id} comments={comments} />}
      </div>
    );
  }
}
