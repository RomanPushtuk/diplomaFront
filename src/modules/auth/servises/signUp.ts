import axios from "axios";
import { BASE_URL } from "../../../constants";

export const signUp = (data: any) => {
  return axios.post(`${BASE_URL}register`, data);
};
