import React, { Component, MouseEvent, ChangeEvent } from "react";
import { Row, Col } from "reactstrap";

interface Props {
  addComment: (idLecture: number, comment: any) => void;
}

interface State {
  text: string;
}

export class PostBoxPure extends Component<Props, State> {
  state = {
    text: ""
  };

  handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    this.setState({ text: event.target.value });
  };

  handleClick = (event: MouseEvent<any>) => {
    event.preventDefault();
    this.props.addComment(1, {
      id: 4,
      author: "Новый автор",
      date: "Новая дата",
      text: this.state.text
    });
  };

  render() {
    return (
      <div className="mt-4 pt-2 p-4 ">
        <h4 className="page-title pb-3">Оставить комментарий :</h4>
        <form>
          <Row>
            <Col md={12}>
              <div className="form-group position-relative">
                <label>Ваш комментарий</label>
                <i className="mdi mdi-comment-outline ml-3 icons" />
                <textarea
                  id="message"
                  placeholder="Your Comment"
                  rows={5}
                  name="message"
                  className="form-control pl-5"
                  required
                  onChange={this.handleChange}
                />
              </div>
            </Col>

            <Col md={12}>
              <div className="send">
                <button
                  onClick={this.handleClick}
                  type="submit"
                  className="btn btn-primary w-100"
                >
                  Отправить
                </button>
              </div>
            </Col>
          </Row>
        </form>
      </div>
    );
  }
}
