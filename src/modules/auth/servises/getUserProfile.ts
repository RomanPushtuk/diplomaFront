import axios from "axios";
import { BASE_URL } from "../../../constants";

export const getUserProfile = (data: any) => {
  return axios.post(`${BASE_URL}user`, data);
};
