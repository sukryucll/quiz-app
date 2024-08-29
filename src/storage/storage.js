export const saveToStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const loadFromStorage = (key) => {
  const storedValue = localStorage.getItem(key);
  return storedValue ? JSON.parse(storedValue) : null;
};

export const clearStorage = () => {
  localStorage.clear();
};
