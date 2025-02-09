export const saveStorage = (key: string, value: unknown): void => {
  localStorage.setItem(key, typeof value === "string" ? value : JSON.stringify(value));
};

export const getStorage = <T>(key: string): T | null => {
  const value = localStorage.getItem(key);
  try {
    return value ? (JSON.parse(value) as T) : null;
  } catch {
    return value as T;
  }
};

export const clearStorage = (key: string): void => {
  localStorage.removeItem(key);
};
