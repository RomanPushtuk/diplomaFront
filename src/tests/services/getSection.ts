const testData = {
  id: 1,
  title: "Секция 1",
  description: "Описание секции 1",
  themes: [
    {
      id: 1,
      title: "Тема1",
      description: "Описание темы 1",
      lectures: [
        {
          id: 1,
          title: "Лекция 1"
        },
        {
          id: 2,
          title: "Лекция 2"
        }
      ]
    },
    {
      id: 2,
      title: "Тема2",
      description: "Описание темы 2",
      lectures: [
        {
          id: 3,
          title: "Лекция 3"
        },
        {
          id: 4,
          title: "Лекция 4"
        }
      ]
    }
  ]
};

export const getSection = (lectureId: number) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ data: testData });
    }, 300);
  });
