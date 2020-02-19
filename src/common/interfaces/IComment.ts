export interface IComment {
  id: number;
  userId: string;
  dateTime: string;
  content: string;
  lectureId?: number;
}
