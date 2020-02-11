export function formReducer(
  state = { params: {} },
  { type, form, params }: any
) {
  switch (type) {
    case "ADD_TO_FORM":
      return { ...form };
    case "CHANGE_PARAMS":
      return { ...state, params: { ...params } };
    default:
      return state;
  }
}
