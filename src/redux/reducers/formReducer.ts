export function formReducer(state = [], { type, properties }: any) {
  switch (type) {
    case "ADD_TO_FORM":
      return [...properties];
    default:
      return state;
  }
}
