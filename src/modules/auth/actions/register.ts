import { Dispatch } from "redux";
import Cookies from "js-cookie";
import { saveByLocalStorage } from "../../../common/servises";
import { register as registerService } from "../servises";

export const register = (data: any): any => (dispatch: Dispatch) => {
  return registerService(data)
    .then(({ data }: any) => {
      console.log("Зарегалісь");
      console.log(data);
      Cookies.set("login", data.email);
      Cookies.set("password", data.password);
      saveByLocalStorage("USER_NAME", data.userName);
    })
    .catch(err => {
      throw Error(err);
    });
};
