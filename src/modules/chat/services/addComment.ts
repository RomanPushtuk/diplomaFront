import axios from "axios";
import { BASE_URL } from "../../../constants";
import { IComment } from "../../../common/interfaces";
import { Dispatch } from "redux";

export const addComment = (idLecture: number, comment: IComment): any => (
  dispatch: Dispatch
) => {
  axios.post(`${BASE_URL}comment/${idLecture}`, comment).then(lecture => {
    dispatch({ type: "ADD_LECTURE", lecture });
  });
};
