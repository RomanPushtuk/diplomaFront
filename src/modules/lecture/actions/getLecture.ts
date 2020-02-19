import { Dispatch } from "redux";
import { getLecture as getLectureService } from "../services";

export const getLecture = (idLecture: number) => (dispatch: Dispatch) => {
  getLectureService(idLecture)
    .then(({ data }: any) => {
      console.log("Получение лекции успешно");
      console.log(data);
      dispatch({ type: "ADD_LECTURE", lecture: data });
    })
    .catch(err => {
      console.log("Ошибка получения лекции");
      console.log(err);
    });
};
