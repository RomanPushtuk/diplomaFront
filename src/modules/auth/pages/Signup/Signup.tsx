import { Dispatch } from "redux";
import { connect } from "react-redux";
import { register } from "../../actions";
import { SignupPure } from "./SignupPure";

interface StateProps {}

interface DispatchProps {
  register: (data: any) => Promise<any>;
}

const mapStateToProps = (state: any): StateProps => ({});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  register: (data: any) => dispatch(register(data))
});

export const Signup = connect<StateProps, DispatchProps, any>(
  mapStateToProps,
  mapDispatchToProps
)(SignupPure);
