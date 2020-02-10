import { store } from "../../../redux";

export function getBuffer() {
  return store.getState().buffer;
}
