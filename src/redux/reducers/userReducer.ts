const initialState: any = {
  isAuthorized: false
};

export function userReducer(state = initialState, { type, user }: any) {
  switch (type) {
    case "ADD_USER":
      return { ...user };
    default:
      return state;
  }
}
