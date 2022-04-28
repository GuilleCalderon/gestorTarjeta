import {
  LOGIN_USER_WITH_EMAIL_PASSWORD,
  LOGIN_USER_WITH_EMAIL_PASSWORD_ERROR,
  LOGIN_USER_WITH_EMAIL_PASSWORD_SUCCESS,
  LOGIN_USER_WITH_EMAIL_PASSWORD_PENDING,
} from "../types";

export const setLoadingLoginAction = () => ({
  type: LOGIN_USER_WITH_EMAIL_PASSWORD_PENDING,
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
