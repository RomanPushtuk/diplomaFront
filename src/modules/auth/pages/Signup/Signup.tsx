import { Dispatch } from "redux";
import { connect } from "react-redux";
import { signUp } from "../../servises";
import { SignupPure } from "./SignupPure";

interface StateProps {}

interface DispatchProps {
  signUp: (data: any) => Promise<any>;
}

const mapStateToProps = (state: any): StateProps => ({});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  signUp: (data: any) => signUp(data)
});

export const Signup = connect<StateProps, DispatchProps, any>(
  mapStateToProps,
  mapDispatchToProps
)(SignupPure);
