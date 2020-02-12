import { IComment } from "./IComment";

export interface ILecture {
  id: number;
  title: string;
  description: string;
  lectureContent: string;
  tasks: Array<string>;
  solution: string;
  comments: Array<IComment>;
}
