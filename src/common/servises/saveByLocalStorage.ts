export function saveByLocalStorage(key: string, value: any): Promise<any> {
  localStorage.setItem(key, JSON.stringify(value));
  return Promise.resolve(value);
}
