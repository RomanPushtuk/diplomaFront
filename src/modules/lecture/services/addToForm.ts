import { Dispatch } from "redux";

export const addToForm = (idElement: string, params: any): any => (
  dispatch: Dispatch
) => {
  dispatch({
    type: "ADD_TO_FORM",
    form: { id: idElement, params: { ...params } }
  });
};
