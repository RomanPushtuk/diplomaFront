import axios from "axios";
import { BASE_URL } from "../../../constants";
// import { getLecture as getLectureTestService } from "../../../tests/services";

export const getLecture = (idLecture: number) => {
  return axios.get(`${BASE_URL}lecture/${idLecture}`);
  // return getLectureTestService(idLecture);
};
