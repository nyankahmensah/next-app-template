import { makeVar } from "@apollo/client";
import { localStorageX } from "utils";

export const isLoggedInVar = makeVar<boolean>(!!localStorageX.getItem(`auth:token`));
export const currentUserVar = makeVar<any>(JSON.parse(localStorageX.getItem(`auth:user`)??"{}")??null);

export const setAuth = ({user, token}: any) => {
  currentUserVar(user);
  localStorageX.setItem(`auth:user`, JSON.stringify(user));
  isLoggedInVar(true);
  localStorageX.setItem(`auth:token`, token);
}

export const setMe = (user: any) => {
  currentUserVar(user)
  localStorageX.setItem(`auth:user`, JSON.stringify(user))
}

export const clearAuth = () => {
  isLoggedInVar(false);
  console.log(isLoggedInVar())
  // TODO: handle extra checks for better user experience
  localStorageX.clear()
}