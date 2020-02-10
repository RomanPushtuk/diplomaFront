import axios from "axios";
import { BASE_URL } from "../../../constants";

export function getComments(idLecture: number) {
  return axios.get(`${BASE_URL}c`);
}
