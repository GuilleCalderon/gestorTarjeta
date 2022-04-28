import { handlerLogin } from "../api/loginFirebas";
import {
  LOGIN_USER_WITH_EMAIL_PASSWORD,
  LOGIN_USER_WITH_EMAIL_PASSWORD_ERROR,
  LOGIN_USER_WITH_EMAIL_PASSWORD_SUCCESS,
  LOGIN_USER_WITH_EMAIL_PASSWORD_PENDING,
} from "./types";
import { call, put, takeLatest } from "redux-saga/effects";

function* loginUserWithEmailPasswordSaga(action) {
  try {
    yield put({ type: LOGIN_USER_WITH_EMAIL_PASSWORD_PENDING });
    console.log("pendingg en saga");
    const user = yield call(handlerLogin, action.email, action.password);
    console.log(user, "sagaaaa");
    yield put({ type: LOGIN_USER_WITH_EMAIL_PASSWORD_SUCCESS, user });
    console.log("loginUserWithEmailPasswordSaga");
  } catch (error) {
    yield put({ type: LOGIN_USER_WITH_EMAIL_PASSWORD_ERROR, error });
  }
}

export default function* loginUserWithEmailPasswordWatcher() {
  yield takeLatest(
    LOGIN_USER_WITH_EMAIL_PASSWORD,
    loginUserWithEmailPasswordSaga
  );
}
