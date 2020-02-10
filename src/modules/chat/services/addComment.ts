import { IComment } from "../../../common/interfaces";
import { Dispatch } from "redux";

export const addComment = (idLecture: number, comment: IComment): any => (
  dispatch: Dispatch
) => {
  dispatch({ type: "ADD_COMMENT", comment });
  // post.post(`${BASE_URL}lecture/${idLecture}/addcomment`, comment).then(() => {
  //   dispatch({ type: "ADD_LECTURE", lecture });
  // });
};
