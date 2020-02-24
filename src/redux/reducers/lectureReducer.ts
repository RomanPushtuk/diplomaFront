import { ILecture } from "../../common/interfaces";

const initialState: ILecture = {
  id: 1,
  title: "Лекция1",
  description: "Описание лекции1",
  content: "Текск для лекции 1",
  tasks: ["Задача 1", "Задача 2"],
  solution:
    '["resistor{\\"resist\\":\\"100\\"}.output1=battery{\\"voltage\\":4.5}.output1","resistor{\\"resist\\":\\"100\\"}.output2=resistor{\\"resist\\":\\"200\\"}.output1","resistor{\\"resist\\":\\"200\\"}.output1=resistor{\\"resist\\":\\"100\\"}.output2","resistor{\\"resist\\":\\"200\\"}.output2=battery{\\"voltage\\":4.5}.output2","battery{\\"voltage\\":4.5}.output1=resistor{\\"resist\\":\\"100\\"}.output1","battery{\\"voltage\\":4.5}.output2=resistor{\\"resist\\":\\"200\\"}.output2"]',
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
