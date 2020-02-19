import { connect } from "react-redux";
import { Dispatch } from "react";
import { getLecture } from "./actions";
import { LecturePure } from "./LecturePure";

interface DispatchProps {
  getLecture: (id: number) => any;
}

interface StateProps {
  lecture: any;
}

const mapStateToProps = (state: any): StateProps => ({
  lecture: state.lecture
});

const mapDispatchToProps = (dispatch: Dispatch<any>): DispatchProps => ({
  getLecture: (id: number) => dispatch(getLecture(id))
});

export const Lecture = connect<StateProps, DispatchProps, any>(
  mapStateToProps,
  mapDispatchToProps
)(LecturePure);
