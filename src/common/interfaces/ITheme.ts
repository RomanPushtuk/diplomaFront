import { ILecture } from "./ILecture";

export interface ITheme {
  id: number;
  title: string;
  description: string;
  lectures: Array<ILecture>;
}
