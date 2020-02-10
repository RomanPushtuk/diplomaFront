import { store } from "../../../../../redux";

export function addAnswer(answer: Array<string>) {
  store.dispatch({ type: "ADD_ANSWER", answer });
}
