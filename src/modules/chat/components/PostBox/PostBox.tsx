import { Dispatch } from "redux";
import { connect } from "react-redux";
import { PostBoxPure } from "./PostBoxPure";
import { addComment } from "../../services";

interface StateProps {}

interface DispatchProps {
  addComment: (idLecture: number, comment: any) => any;
}

const mapStateToProps = (state: any): StateProps => ({});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  addComment: (idLecture: number, comment: any) =>
    dispatch(addComment(idLecture, comment))
});

export const PostBox = connect<StateProps, DispatchProps, any>(
  mapStateToProps,
  mapDispatchToProps
)(PostBoxPure);
