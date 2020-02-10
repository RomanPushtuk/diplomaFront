import { Dispatch } from "redux";

export const changeProperty = (
  id: string,
  name: string,
  value: string | number
): any => (dispatch: Dispatch) => {
  dispatch({ type: "CHANGE_PROPERTY", id, name, value });
};
