import {
  ADD_CARD,
  ADD_DECK,
  LOAD_DATA,
} from '../actions/types';
import { writeDecks } from '../storage/decks';

function saveDecks(state) {
  writeDecks(state);
  return state;
}

function decksWithNewCard(oldDecks, card) {
  const newState = oldDecks.map((deck) => {
    if (deck.id === card.deckID) {
      deck.addCard(card);
      return deck;
    }
    return deck;
  });
  saveDecks(newState);
  return newState;
}

const reducer = (state = [], action) => {
  switch (action.type) {
    case LOAD_DATA:
      return action.data;
    case ADD_DECK:
      // eslint-disable-next-line no-case-declarations
      const newState = state.concat(action.data);
      saveDecks(newState);
      return newState;
    case ADD_CARD:
      return decksWithNewCard(state, action.data);
    default:
      return state;
  }
};

export default reducer;
