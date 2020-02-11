export function getByLocalStorage(key: string): Promise<any> {
  if (localStorage.getItem(key)) {
    const value = JSON.parse(localStorage.getItem(key) || "{}");

    return Promise.resolve(value);
  }
  return Promise.reject(`Значение ${key} на найдено в LS`);
}
