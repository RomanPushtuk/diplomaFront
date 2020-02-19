import { Dispatch } from "redux";
import Cookies from "js-cookie";
import { saveByLocalStorage } from "../../../common/servises";
import { login as loginService } from "../servises";

export const login = (data: any): any => (dispatch: Dispatch) => {
  return loginService(data)
    .then(({ data }: any) => {
      Cookies.set("login", data.email);
      Cookies.set("password", data.password);
      saveByLocalStorage("USER_NAME", "Roman Pushtuk");
    })
    .catch(err => {
      throw Error(err);
    });
};
