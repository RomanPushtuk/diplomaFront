import { store } from "../../../../../redux";

export function addToBuffer(data: any) {
  store.dispatch({ type: "ADD_TO_BUFFER", data });
}
