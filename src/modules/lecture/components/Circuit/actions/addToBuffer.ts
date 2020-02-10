import { Dispatch } from "redux";

export const addToBuffer = (data: any): any => (dispatch: Dispatch) => {
  dispatch({ type: "ADD_TO_BUFFER", data });
};
