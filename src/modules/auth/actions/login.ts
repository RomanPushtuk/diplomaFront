import { Dispatch } from "redux";
import Cookies from "js-cookie";
import { saveByLocalStorage } from "../../../common/servises";
import { login as loginService } from "../servises";

export const login = (data: any): any => (dispatch: Dispatch) => {
  return loginService(data)
    .then(({ data }: any) => {
      console.log("Залогинились");
      console.log(data);
      Cookies.set("login", data.email);
      Cookies.set("password", data.password);
      saveByLocalStorage("USER_NAME", data.userName);
      saveByLocalStorage("THEMES_PROGRESS", data.themesProgress);
    })
    .catch(err => {
      throw Error(err);
    });
};
