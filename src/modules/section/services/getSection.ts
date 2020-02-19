import axios from "axios";
import { BASE_URL } from "../constants";
// import { getSection as getSectionTestService } from "../../../tests/services";

export const getSection = (id: number) => {
  return axios(`${BASE_URL}section/${id}`);
  // return getSectionTestService(id);
};
