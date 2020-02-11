import { connect } from "react-redux";
import { SectionPure } from "./SectionPure";
import { Dispatch } from "react";
import { getSection } from "./actions";

interface DispatchProps {
  getSection: (id: number) => any;
}

const mapStateToProps = (state: any) => ({
  section: state.section
});

const mapDispatchToProps = (dispatch: Dispatch<any>): DispatchProps => ({
  getSection: (id: number) => dispatch(getSection(id))
});

export const Section = connect(
  mapStateToProps,
  mapDispatchToProps
)(SectionPure);
