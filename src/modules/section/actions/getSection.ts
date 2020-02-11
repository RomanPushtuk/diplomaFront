import { Dispatch } from "redux";
import { AxiosResponse } from "axios";
import { getSection as getSectionService } from "../services";
import { ADD_SECTION } from "../constants";
import { ISection } from "../../../common/interfaces";

export const getSection = (id: number) => (dispatch: Dispatch) => {
  getSectionService(id).then((section: AxiosResponse<ISection>) => {
    dispatch({ type: ADD_SECTION, section });
  });
};
