import axios from "axios";
import { Dispatch } from "redux";
import { BASE_URL } from "../../../constants";

export const getLecture = (idLecture: number) => (dispatch: Dispatch) => {
  axios.get(`${BASE_URL}lecture/${idLecture}`).then(lecture => {
    dispatch({ type: "ADD_LECTURE", lecture });
  });
};
