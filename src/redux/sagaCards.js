import { searchDocOrCreateDoc } from "../api/firestore";
import { ADD_CARD, ADD_CARD_SUCCESS } from "./types";
import { call, put, takeLatest } from "redux-saga/effects";

function* addCardSaga(action) {
  try {
    const card = yield call(searchDocOrCreateDoc, action.card);
    yield put({ type: ADD_CARD_SUCCESS, card });
    console.log("addCardSaga", card);
  } catch (error) {
    console.log(error);
  }
}

export default function* addCardWatcher() {
  yield takeLatest(ADD_CARD, addCardSaga);
  console.log("addCardWatcher");
}
