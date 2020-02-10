import { Dispatch } from "redux";
import { ITheme } from "../interfaces";

export const addTheme = (theme: ITheme) => (dispatch: Dispatch) => {
  dispatch({ type: "ADD_THEME", theme });
};
