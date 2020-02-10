import { Dispatch } from "redux";
import { popStackCircuit } from "../../../stackCircuit";

export const restore = (): any => (dispatch: Dispatch) => {
  const prevCircuit = popStackCircuit();

  dispatch({ type: "RESTORE", prevState: prevCircuit });
};
