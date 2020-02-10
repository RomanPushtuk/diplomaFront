import { combineReducers } from "redux";
import { bufferReducer } from "./bufferReducer";
import { sectionReducer } from "./sectionReducer";
import { themeReducer } from "./themeReducer";
import { elementsReducer } from "./elementsReducer";
import { formReducer } from "./formReducer";
import { lectureReducer } from "./lectureReducer";

export const rootReducer = combineReducers({
  buffer: bufferReducer,
  section: sectionReducer,
  theme: themeReducer,
  elements: elementsReducer,
  form: formReducer,
  lecture: lectureReducer
});
