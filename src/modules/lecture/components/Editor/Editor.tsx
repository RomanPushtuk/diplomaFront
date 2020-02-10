import { connect } from "react-redux";
import { EditorPure } from "./EditorPure";

interface StateProps {
  userAnswer: Array<string>;
}

const mapStateToProps = (state: any): StateProps => ({
  userAnswer: state.answer
});

export const Editor = connect<StateProps, any, any>(
  mapStateToProps,
  undefined
)(EditorPure);
