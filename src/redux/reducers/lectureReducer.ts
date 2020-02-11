import { ILecture } from "../../common/interfaces";

const initialState: ILecture = {
  id: 0,
  title: "Лекция1",
  description: "Описание лекции1",
  text: "Текск для лекции 1",
  tasks: ["Задача 1", "Задача 2"],
  answer: "{}",
  comments: [
    {
      id: 1,
      author: "Пуштук Роман",
      text:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
      date: "15th August, 2019 at 01:25 pm"
    },
    {
      id: 2,
      author: "Пуштук Роман",
      text:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
      date: "15th August, 2019 at 01:25 pm"
    },
    {
      id: 3,
      author: "Пуштук Роман",
      text:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
      date: "15th August, 2019 at 01:25 pm"
    }
  ]
};

export function lectureReducer(state = initialState, { type, section }: any) {
  switch (type) {
    case "ADD_LECTURE":
      return { ...section };
    default:
      return state;
  }
}
