import { makeVar } from "@apollo/client";
import { localStorageX, windowX } from "utils";

export enum Theme {
  Dark = "dark",
  Light = "light"
}

export const currentThemeVar = makeVar<Theme>((
  localStorageX.getItem(`config:theme`) as Theme)
  ?? (windowX?.matchMedia("(prefers-color-scheme: dark)").matches ? Theme.Dark : Theme.Light));

export const toggleTheme = () => {
  const currentTheme = currentThemeVar();
  const nextTheme = currentTheme === Theme.Dark ? Theme.Light : Theme.Dark;
  currentThemeVar(nextTheme);
  localStorageX.setItem(`config:theme`, nextTheme)
}