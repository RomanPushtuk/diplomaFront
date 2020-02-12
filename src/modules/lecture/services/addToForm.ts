import { Dispatch } from "redux";

export const addToForm = (
  idElement: string,
  name: string,
  params: any
): any => (dispatch: Dispatch) => {
  dispatch({
    type: "ADD_TO_FORM",
    form: { id: idElement, name, params: { ...params } }
  });
};
