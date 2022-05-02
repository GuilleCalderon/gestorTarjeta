import { combineReducers } from "redux";
import cardsReducer from "./cardsReducer";
import loginReducer from "./loginReducer";

const reducer = combineReducers({
  login: loginReducer,
  cards: cardsReducer,
});

export default reducer;
