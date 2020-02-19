import { IComment } from "./IComment";

export interface ILecture {
  id: number;
  title: string;
  description: string;
  content: string;
  tasks: Array<string>;
  solution: string;
  comments: Array<IComment>;
}
