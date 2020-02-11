import { Dispatch } from "redux";
import { connect } from "react-redux";
import { FormPure } from "./FormPure";
import { changeParams } from "./actions";

interface StateProps {
  form: any;
}

interface DispatchProps {
  changeParams: (params: any) => void;
}

const mapStateToProps = (state: any): StateProps => ({
  form: state.form
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  changeParams: (params: any) => dispatch(changeParams(params))
});

export const Form = connect<StateProps, DispatchProps, any>(
  mapStateToProps,
  mapDispatchToProps
)(FormPure);
