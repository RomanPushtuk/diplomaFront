import { Output } from "../../modules/draw/components/Output";

interface IBuffer {
  type: string;
  output?: Output;
}

const initialState: IBuffer = {
  type: ""
};

export function bufferReducer(state = initialState, { type, data }: any) {
  switch (type) {
    case "ADD_TO_BUFFER":
      return { ...data };
    case "CLEAR_BUFFER":
      return {};
    default:
      return state;
  }
}
