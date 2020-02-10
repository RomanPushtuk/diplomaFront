import axios from "axios";
import { BASE_URL } from "../../constants";

export const getToken = (data: any) => {
  return axios.post(`${BASE_URL}getToken/`, data);
};
