import { Dispatch } from "redux";
import { getSection as getSectionService } from "../services";
import { ADD_SECTION } from "../constants";

export const getSection = (id: number) => (dispatch: Dispatch) => {
  getSectionService(id)
    .then(({ data }: any) => {
      console.log("Получение секции успешно");
      console.log(data);
      dispatch({ type: ADD_SECTION, section: data });
    })
    .catch(err => {
      console.log("Ошибка получения секци");
      console.log(err);
    });
};
