import { Dispatch } from "redux";
import axios from "axios";
import { BASE_URL } from "../../../constants";

const lecture = {
  id: 1,
  text: "Текст лекци",
  answer: "",
  tasks: ["Задание1", "Задание2", "Задание3", "Задание4", "Задание5"],
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

export const getLecture = (idLecture: number) => (dispatch: Dispatch) => {
  dispatch({ type: "ADD_LECTURE", lecture });
  // axios.get(`${BASE_URL}lecture/${idLecture}`).then(() => {
  //   dispatch({ type: "ADD_LECTURE", lecture });
  // });
};
