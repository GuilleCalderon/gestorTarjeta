import reducer from "../reducers";
import { applyMiddleware, createStore as createReduxStore } from "redux";
import createSagaMiddleware from "redux-saga";
import loginUserWithEmailPasswordWatcher from "../sagas";

const sagaMiddleware = createSagaMiddleware();

const store = createReduxStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(loginUserWithEmailPasswordWatcher);

export default store;
