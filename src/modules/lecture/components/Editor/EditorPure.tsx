import React, { Component } from "react";
import { TopControl } from "../TopControl";
import { BottomControl } from "../BottomControl";
import { ElementList } from "../ElementList";
import { Circuit } from "../Circuit";
import { Form } from "../Form";

function checkAnswer(ans1: Array<string>, ans2: Array<string>): boolean {
  if (ans1.length === ans2.length) {
    let count = 0;

    ans1.sort();
    ans2.sort();

    ans1.forEach((item, index) => {
      if (item === ans2[index]) {
        count++;
      }
    });

    return count === ans1.length;
  }
  return false;
}

interface Props {
  answer: string;
  userAnswer: Array<string>;
}

interface State {
  isSolved: boolean;
}

export class EditorPure extends Component<Props, State> {
  state = {
    isSolved: false
  };

  handleChange = (userAnswer: Array<string>) => {
    const answer = JSON.parse(this.props.answer);

    this.setState({ isSolved: checkAnswer(answer, userAnswer) });
  };

  render() {
    return (
      <div className="editor">
        <TopControl />
        <div className="draw-area">
          <ElementList />
          <Circuit onChange={this.handleChange} />
          <Form />
        </div>
        <BottomControl isSolved={this.state.isSolved} />
      </div>
    );
  }
}
