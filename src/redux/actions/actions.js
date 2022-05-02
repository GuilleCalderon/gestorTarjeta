import {
  LOGIN_USER_WITH_EMAIL_PASSWORD,
  LOGIN_USER_WITH_EMAIL_PASSWORD_ERROR,
  LOGIN_USER_WITH_EMAIL_PASSWORD_SUCCESS,
  LOGIN_USER_WITH_EMAIL_PASSWORD_PENDING,
  LOG_OUT,
  ADD_CARD_SUCCESS,
  ADD_CARD,
  DELETE_CARD,
} from "../types";

export const logOut = () => ({
  type: LOG_OUT,
});

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

export const addCardAction = (card) => ({
  type: ADD_CARD,
  card,
});

export const addCardSuccessAction = (card) => ({
  type: ADD_CARD_SUCCESS,
  card,
});

export const deleteCardAction = (card) => ({
  type: DELETE_CARD,
  card,
});
