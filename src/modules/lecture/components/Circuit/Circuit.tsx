import { Dispatch } from "redux";
import { connect } from "react-redux";
import { addToForm } from "../../services";
import { CircuitPure } from "./CircuitPure";

interface StateProps {}

interface DispatchProps {
  addToForm: (idElement: string, name: string, params: any) => any;
}

const mapStateToProps = (state: any): StateProps => ({
  lecture: state.lecture
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  addToForm: (idElement: string, name: string, params: any) =>
    dispatch(addToForm(idElement, name, params))
});

export const Circuit = connect<StateProps, DispatchProps, any>(
  mapStateToProps,
  mapDispatchToProps
)(CircuitPure);
