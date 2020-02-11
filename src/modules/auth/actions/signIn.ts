import { Dispatch } from "redux";
import { saveByLocalStorage } from "../../../common/servises";
import { getToken, getUserProfile } from "../servises";

export const signIn = (data: any): any => (dispath: Dispatch) => {
  return getToken(data)
    .then((token: any) => {
      return saveByLocalStorage("TOKEN", token);
    })
    .then((token: any) => {
      return getUserProfile(token).then((user: any) => {
        dispath({ type: "ADD_USER", user });
      });
    });
};
