import { Dispatch } from "redux";
import { store } from "../../../../../redux/store";
import { pushStackCircuit } from "../../../stackCircuit";

export const addElement = (element: Element): any => (dispatch: Dispatch) => {
  const mapElement = {};

  pushStackCircuit({ ...store.getState().elements });
  // @ts-ignore
  mapElement[element.id] = element;
  dispatch({ type: "ADD_ELEMENT", element: mapElement });
  dispatch({ type: "CLEAR_BUFFER" });
};
