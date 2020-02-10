import axios from "axios";
import { BASE_URL } from "../constants";

export const fetchSection = (id: number) => {
  return axios.get(`${BASE_URL}section/${id}`);
};
