import { IComment } from "./IComment";

export interface ILecture {
  id: number;
  title: string;
  description: string;
  text: string;
  tasks: Array<string>;
  answer: string;
  comments: Array<IComment>;
}
