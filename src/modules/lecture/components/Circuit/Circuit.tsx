import { Dispatch } from "redux";
import { connect } from "react-redux";
import { CircuitPure } from "./CircuitPure";
import { addElement, addToBuffer } from "./actions";

interface StateProps {
  buffer: any;
}

interface DispatchProps {
  addElement: (element: any) => void;
  addToBuffer: (data: any) => void;
  clearBuffer: () => any;
}

const mapStateToProps = (state: any): StateProps => ({
  buffer: state.buffer
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  addElement: (element: Element) => dispatch(addElement(element)),
  clearBuffer: () => dispatch({ type: "CLEAR_BUFFER" }),
  addToBuffer: (data: any) => dispatch(addToBuffer(data))
});

export const Circuit = connect<StateProps, DispatchProps, any>(
  mapStateToProps,
  mapDispatchToProps
)(CircuitPure);
