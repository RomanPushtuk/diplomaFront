import React, { Component } from "react";
import { match } from "react-router-dom";
import { ILecture } from "../section/interfaces";
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
    const { id, tasks, text, answer, comments } = this.props.lecture;

    return (
      <div className="lecture">
        <Menu onSelect={this.handleSelect} />
        {modalContent === "editor" && <Editor answer={answer} />}
        {modalContent === "lecture" && <Lecture text={text} />}
        {modalContent === "tasks" && <Tasks tasks={tasks} />}
        {modalContent === "chat" && <Chat idLecture={id} comments={comments} />}
      </div>
    );
  }
}
