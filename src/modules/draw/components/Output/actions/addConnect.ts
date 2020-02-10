import { store } from "../../../../../redux";
import { Output } from "..";

export function addConnect(output1: Output, output2: Output) {
  store.dispatch({ type: "ADD_CONNECT", output1, output2 });
}
