const testData = {
  email: "user@mail.ru",
  password: "123"
};

export const login = (data: any) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ data: testData });
    }, 300);
  });
