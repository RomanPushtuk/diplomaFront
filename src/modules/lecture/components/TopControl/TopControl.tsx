import { Dispatch } from "redux";
import { connect } from "react-redux";
import { TopControlPure } from "./TopControlPure";
import { restore } from "./actions";

interface DispatchProps {
  restore: () => void;
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  restore: () => dispatch(restore())
});

export const TopControl = connect<any, DispatchProps, any>(
  undefined,
  mapDispatchToProps
)(TopControlPure);
