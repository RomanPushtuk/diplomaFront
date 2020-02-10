import axios from "axios";
import { BASE_URL } from "../constants";

export const fetchTheme = (id: number) => {
  return axios.get(`${BASE_URL}/theme/${id}`);
};
