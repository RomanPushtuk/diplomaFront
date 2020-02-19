import { Dispatch } from "redux";
import { connect } from "react-redux";
import { PostBoxPure } from "./PostBoxPure";
import { addComment } from "../../actions";

interface StateProps {}

interface DispatchProps {
  addComment: (comment: any) => any;
}

const mapStateToProps = (state: any): StateProps => ({});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  addComment: (comment: any) => dispatch(addComment(comment))
});

export const PostBox = connect<StateProps, DispatchProps, any>(
  mapStateToProps,
  mapDispatchToProps
)(PostBoxPure);
