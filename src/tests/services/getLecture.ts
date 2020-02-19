const testData = {
  id: 1,
  title: "Лекция1",
  lectureContent: "И text, И description, И tasks",
  solution: "{}",
  tasks: ["Таска1", "Таска2"],
  comments: [
    {
      id: 1,
      userName: "Пуштук Роман",
      content:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
      dateTime: "15th August, 2019 at 01:25 pm"
    },
    {
      id: 2,
      userName: "Пуштук Роман",
      content:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
      dateTime: "15th August, 2019 at 01:25 pm"
    }
  ]
};

export const getLecture = (lectureId: number) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ data: testData });
    }, 300);
  });
