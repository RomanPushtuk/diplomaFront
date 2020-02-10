import { connect } from "react-redux";
import { Dispatch } from "redux";
import { signIn } from "../../actions";
import { LoginPure } from "./LoginPure";

interface DispatchProps {
  signIn: (data: any) => void;
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  signIn: (data: any) => dispatch(signIn(data))
});

export const Login = connect<any, DispatchProps, any>(
  undefined,
  mapDispatchToProps
)(LoginPure);
