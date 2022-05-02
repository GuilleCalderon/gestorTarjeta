import {
  LOGIN_USER_WITH_EMAIL_PASSWORD_ERROR,
  LOGIN_USER_WITH_EMAIL_PASSWORD_SUCCESS,
  LOGIN_USER_WITH_EMAIL_PASSWORD_PENDING,
  LOG_OUT,
} from "../types";

const initialState = {
  loading: false,
  user: null,
  error: null,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER_WITH_EMAIL_PASSWORD_PENDING:
      console.log("LOGIN_USER_WITH_EMAIL_PASSWORD_PENDING");
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
    case LOG_OUT:
      console.log("LOG_OUT");
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};
export default loginReducer;
