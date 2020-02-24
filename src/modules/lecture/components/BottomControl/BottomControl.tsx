import { Dispatch } from "redux";
import { connect } from "react-redux";
import { BottomControlPure } from "./BottomControlPure";
import { getLecture } from "../../actions";

interface DispatchProps {
  getLecture: (id: number) => void;
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  // @ts-ignore
  getLecture: (id: number) => dispatch(getLecture(id))
});

export const BottomControl = connect<any, DispatchProps, any>(
  undefined,
  mapDispatchToProps
)(BottomControlPure);
