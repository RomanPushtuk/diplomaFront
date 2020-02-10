import { Dispatch } from "redux";
import { AxiosResponse } from "axios";
import { fetchSection } from "../services";
import { ADD_SECTION } from "../constants";
import { ISection } from "../interfaces";

export const getSection = (id: number) => (dispatch: Dispatch) => {
  fetchSection(id).then((section: AxiosResponse<ISection>) => {
    dispatch({ type: ADD_SECTION, section });
  });
};
