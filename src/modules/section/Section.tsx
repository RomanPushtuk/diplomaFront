import { connect } from "react-redux";
import { SectionPure } from "./SectionPure";
import { Dispatch } from "react";
import { getSection, addTheme } from "./actions";
import { ITheme } from "./interfaces";

interface DispatchProps {
  getSection: (id: number) => any;
  addTheme: (theme: ITheme) => any;
}

const mapStateToProps = (state: any) => ({
  section: state.section,
  theme: state.section.currentTheme
});

const mapDispatchToProps = (dispatch: Dispatch<any>): DispatchProps => ({
  getSection: (id: number) => dispatch(getSection(id)),
  addTheme: (theme: ITheme) => dispatch(addTheme(theme))
});

export const Section = connect(
  mapStateToProps,
  mapDispatchToProps
)(SectionPure);
