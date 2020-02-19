import { IComment } from "../../../common/interfaces";
import { Dispatch } from "redux";
import { addComment as addCommentService } from "../services";

export const addComment = (comment: IComment): any => (dispatch: Dispatch) => {
  addCommentService(comment)
    .then(({ data }: any) => {
      console.log("Получили все комменты");
      console.log(data);
      dispatch({ type: "ADD_COMMENTS", comments: data });
    })
    .catch((err: any) => {
      console.log("Ошибка получения комментов");
      console.log(err);
    });
};
