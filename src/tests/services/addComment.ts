const testData = [
  {
    id: "1",
    userName: "Roman Pushtuk",
    dateTime: "15th August, 2019 at 01:25 pm",
    content: "Some text"
  },
  {
    id: "2",
    userName: "Egor Borisenko",
    dateTime: "15th August, 2019 at 01:25 pm",
    content: "Some text"
  },
  {
    id: "3",
    userName: "Egor Borisenko",
    dateTime: "15th August, 2019 at 01:25 pm",
    content: "Some text1"
  }
];

export const addComment = (comment: any) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ data: testData });
    }, 300);
  });
