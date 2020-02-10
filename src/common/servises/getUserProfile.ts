import axios from "axios";
import { BASE_URL } from "../../constants";

export const getUserProfile = (token: any) => {
  return axios.post(`${BASE_URL}user/`, { token });
};
