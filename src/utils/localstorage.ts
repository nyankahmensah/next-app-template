import config from "./../config";

export const setItem = (key: string, value: string) => {
  if(typeof window !== "undefined") {
    localStorage.setItem(`${config.name}:${key}`, value);
  }
}

export const getItem = (key: string) => {
  if(typeof window !== "undefined") {
    return localStorage.getItem(`${config.name}:${key}`);
  }
  return null
}

export const clear = () => {
  if(typeof window !== "undefined") {
    localStorage.clear();
  }
}