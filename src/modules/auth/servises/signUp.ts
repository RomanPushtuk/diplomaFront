import axios from "axios";
import { saveByLocalStorage } from "../../../common/servises";
import { BASE_URL } from "../../../constants";

export const signUp = (data: any) => {
  return axios.post(`${BASE_URL}register`, data).then(userData => {
    return saveByLocalStorage("USER_DATA", userData);
  });
};
