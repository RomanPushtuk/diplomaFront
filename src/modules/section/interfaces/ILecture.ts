import { IComment } from "../../../common/interfaces";

export interface ILecture {
  id: number;
  title: string;
  description: string;
  text: string;
  tasks: Array<string>;
  answer: Object;
  comments: Array<IComment>;
}
