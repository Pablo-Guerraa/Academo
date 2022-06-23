import { typeAuth } from "../types";

export const loginUser = (userLogin) => ({
  type : typeAuth.login,
  payload: userLogin
});