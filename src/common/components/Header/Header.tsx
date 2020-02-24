import { connect } from "react-redux";
import { HeaderPure } from "./HeaderPure";

interface StateProps {
  user: any;
}

const mapStateToProps = (state: any): StateProps => ({
  user: state.user
});

export const Header = connect<StateProps, any, any>(mapStateToProps)(HeaderPure);
