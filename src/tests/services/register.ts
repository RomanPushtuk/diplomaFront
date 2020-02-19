const testData = {
  email: "user@mail.ru",
  password: "123456789"
};

export const register = (data: any) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ data: testData });
    }, 300);
  });
