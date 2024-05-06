/**
 * @param {string} key
 */
export const getFromLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

export const setToLocalStorage = (key, value) => {
  if (typeof value === "object") {
    const result = JSON.stringify(value);
    localStorage.setItem(key, result);
    return result;
  }

  localStorage.setItem(key, value);
  return value;
};
