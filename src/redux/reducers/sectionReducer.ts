const themes = [
  {
    title: "Тема 1",
    description: "Описание для темы 1",
    lectures: [
      {
        id: 1,
        title: "Лекция 1 для темы 1"
      },
      {
        id: 2,
        title: "Лекция 2 для темы 1"
      },
      {
        id: 3,
        title: "Лекция 3 для темы 1"
      },
      {
        id: 4,
        title: "Лекция 4 для темы 1"
      }
    ]
  },
  {
    title: "Тема 2",
    description: "Описание для темы 2",
    lectures: [
      {
        id: 5,
        title: "Лекция 1 для темы 2"
      },
      {
        id: 6,
        title: "Лекция 2 для темы 2"
      },
      {
        id: 7,
        title: "Лекция 3 для темы 2"
      },
      {
        id: 8,
        title: "Лекция 4 для темы 2"
      }
    ]
  },
  {
    title: "Тема 3",
    description: "Описание для темы 1",
    lectures: [
      {
        id: 9,
        title: "Лекция 1 для темы 3"
      },
      {
        id: 10,
        title: "Лекция 2 для темы 3"
      },
      {
        id: 11,
        title: "Лекция 3 для темы 3"
      },
      {
        id: 12,
        title: "Лекция 4 для темы 3"
      }
    ]
  }
];

const initialState: any = {
  id: 0,
  title: "Основы электроники",
  description:
    "В этом разделе мы научимся конструировать простые электрические схемы, разберем мутоды работы распространенных эектронных компонентов",
  themes,
  currentTheme: themes[0]
};

export function sectionReducer(
  state = initialState,
  { type, section, theme }: any
) {
  switch (type) {
    case "ADD_SECTION":
      return { ...section };
    case "ADD_THEME":
      return { ...state, ...(state.currentTheme = { ...theme }) };
    default:
      return state;
  }
}
