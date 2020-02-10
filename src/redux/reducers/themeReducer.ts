import { ITheme } from "../../modules/section/interfaces";

const initialState: ITheme = {
  id: 0,
  title: "",
  description: "",
  lectures: []
};

export function themeReducer(state = initialState, { type, theme }: any) {
  switch (type) {
    case "ADD_THEME":
      return { ...theme };
    default:
      return state;
  }
}
