import axios from "axios";
import { BASE_URL } from "../../../constants";
import { login as loginTestService } from "../../../tests/services";

export const login = (data: any) => {
  return axios.post(`${BASE_URL}login`, data);
  // return loginTestService(data);
};
