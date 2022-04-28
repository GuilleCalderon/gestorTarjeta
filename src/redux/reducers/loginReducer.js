import {
  LOGIN_USER_WITH_EMAIL_PASSWORD,
  LOGIN_USER_WITH_EMAIL_PASSWORD_ERROR,
  LOGIN_USER_WITH_EMAIL_PASSWORD_SUCCESS,
} from "../types";

const initialState = {
  loading: false,
  user: null,
  error: null,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER_WITH_EMAIL_PASSWORD:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LOGIN_USER_WITH_EMAIL_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.user,
      };
    case LOGIN_USER_WITH_EMAIL_PASSWORD_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default loginReducer;
