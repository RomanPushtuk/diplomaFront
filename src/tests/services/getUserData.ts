const testData = {
  userName: "User Name",
  email: "user@mail.ru",
  themesProgress: [
    // Нужно пройтись по всем темам
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
  ]
};

export const getUserData = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ data: testData });
    }, 300);
  });
