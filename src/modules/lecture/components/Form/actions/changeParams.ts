import { Dispatch } from "redux";

export const changeParams = (params: any): any => (dispatch: Dispatch) => {
  dispatch({ type: "CHANGE_PARAMS", params });
};
