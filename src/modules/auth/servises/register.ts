import axios from "axios";
import { BASE_URL } from "../../../constants";

export const register = (data: any) => {
  return axios.put(`${BASE_URL}register`, data);
};
