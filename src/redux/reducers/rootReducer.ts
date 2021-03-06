import { combineReducers } from "redux";
import { sectionReducer } from "./sectionReducer";
import { formReducer } from "./formReducer";
import { lectureReducer } from "./lectureReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
  section: sectionReducer,
  lecture: lectureReducer,
  form: formReducer,
  user: userReducer
});
