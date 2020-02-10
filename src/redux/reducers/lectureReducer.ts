export function lectureReducer(
  state: any = {},
  { type, lecture, comment }: any
) {
  switch (type) {
    case "ADD_LECTURE":
      return { ...lecture };
    case "ADD_COMMENT":
      return { ...state, comments: [...state.comments, comment] };
    default:
      return state;
  }
}
