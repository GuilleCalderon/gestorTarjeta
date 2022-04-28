import {
  LOGIN_USER_WITH_EMAIL_PASSWORD,
  LOGIN_USER_WITH_EMAIL_PASSWORD_ERROR,
  LOGIN_USER_WITH_EMAIL_PASSWORD_SUCCESS,
  SET_LOADING_LOGIN,
} from "../types";

export const setLoadingLoginAction = () => ({
  type: SET_LOADING_LOGIN,
});

export const loginUserWithEmailPasswordAction = (email, password) => {
  console.log("loginUserWithEmailPasswordAction");
  return {
    type: LOGIN_USER_WITH_EMAIL_PASSWORD,
    email,
    password,
  };
};

export const loginUserWithEmailPasswordSuccessAction = (user) => ({
  type: LOGIN_USER_WITH_EMAIL_PASSWORD_SUCCESS,
  user,
});

export const loginUserWithEmailPasswordErrorAction = (error) => ({
  type: LOGIN_USER_WITH_EMAIL_PASSWORD_ERROR,
  error,
});
