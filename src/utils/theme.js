import { themes } from "../constants";

export const getTheme = () => {
  const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const themeFromLocalStorage = localStorage.getItem("theme");
  const lightTheme = themes[0].text;

  const themeText = themeFromLocalStorage
    ? themeFromLocalStorage
    : prefersDark
    ? themes[1].text
    : lightTheme;

  const themeName = themes.find(
    (theme) => theme.text.toLowerCase() === themeText
  ).name;

  document.documentElement.dataset.theme = themeName;

  return themeName;
};

/**
 * @param {string} themeName
 */
export const setTheme = (themeName) => {
  const theme = themes.find((theme) => theme.name === themeName);

  localStorage.setItem("theme", theme.text);

  document.documentElement.dataset.theme = theme.name;
};
