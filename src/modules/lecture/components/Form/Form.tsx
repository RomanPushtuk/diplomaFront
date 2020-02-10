import { Dispatch } from "redux";
import { connect } from "react-redux";
import { FormPure } from "./FormPure";
import { changeProperty } from "./actions";

interface StateProps {
  form: any;
}

interface DispatchProps {
  changeProperty: (id: string, name: string, value: string | number) => void;
}

const mapStateToProps = (state: any): StateProps => ({
  form: state.form
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  changeProperty: (id: string, name: string, value: string | number) =>
    dispatch(changeProperty(id, name, value))
});

export const Form = connect<StateProps, DispatchProps, any>(
  mapStateToProps,
  mapDispatchToProps
)(FormPure);
