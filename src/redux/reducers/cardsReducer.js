import { ADD_CARD_SUCCESS, DELETE_CARD } from "../types";

const initialState = {
  cards: [],
};

const cardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CARD_SUCCESS:
      return {
        ...state,
        cards: [...state.cards, action.card],
      };
    case DELETE_CARD:
      return {
        ...state,
        cards: state.cards.filter((card) => card.id !== action.card.id),
      };
    default:
      return state;
  }
};

export default cardsReducer;
