export function elementsReducer(state = {}, { type, element, prevState }: any) {
  switch (type) {
    case "ADD_ELEMENT":
      return { ...state, ...element };
    case "CHANGE_POSITION": {
      return { ...state, ...element };
    }
    case "RESTORE": {
      return { ...prevState };
    }
    default:
      return state;
  }
}
