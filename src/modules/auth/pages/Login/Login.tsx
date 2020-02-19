import { connect } from "react-redux";
import { Dispatch } from "redux";
import { login } from "../../actions";
import { LoginPure } from "./LoginPure";

interface DispatchProps {
  login: (data: any) => void;
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  login: (data: any) => dispatch(login(data))
});

export const Login = connect<any, DispatchProps, any>(
  undefined,
  mapDispatchToProps
)(LoginPure);
