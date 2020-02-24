const testData = {
  userName: "Roman Pushtuk",
  themesProgress: [
    {
      themeId: 1,
      completedLectureCount: 17,
      uncompletedLectureCount: 4
    },
    {
      themeId: 2,
      completedLectureCount: 17,
      uncompletedLectureCount: 4
    }
  ],
  email: "user@mail.ru",
  password: "123"
};

export const login = (data: any) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ data: testData });
    }, 2000);
  });
