import axios from "axios";
import { BASE_URL } from "../../../constants";
import { IComment } from "../../../common/interfaces";
// import { addComment as addCommentTestservice } from "../../../tests/services";

export const addComment = (comment: IComment): any => {
  return axios.post(`${BASE_URL}comments`, comment);
  // return addCommentTestservice(comment);
};
