import { ILecture } from "../../common/interfaces";

const initialState: ILecture = {
  id: 0,
  title: "Лекция1",
  description: "Описание лекции1",
  content: "Текск для лекции 1",
  tasks: ["Задача 1", "Задача 2"],
  solution: "{}",
  comments: [
    {
      id: 1,
      userId: "Пуштук Роман",
      content:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
      dateTime: "15th August, 2019 at 01:25 pm"
    },
    {
      id: 2,
      userId: "Пуштук Роман",
      content:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
      dateTime: "15th August, 2019 at 01:25 pm"
    },
    {
      id: 3,
      userId: "Пуштук Роман",
      content:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
      dateTime: "15th August, 2019 at 01:25 pm"
    }
  ]
};

export function lectureReducer(
  state = initialState,
  { type, lecture, comments }: any
) {
  switch (type) {
    case "ADD_LECTURE":
      return { ...lecture };
    case "ADD_COMMENTS":
      return { ...state, comments: [...comments] };
    default:
      return state;
  }
}
