import { ADD_DECK, ADD_CARD } from '../actions/types';

function decksWithNewCard(oldDecks, card) {
  return oldDecks.map((deck) => {
    if (deck.id === card.deckID) {
      deck.addCard(card);
      return deck;
    }
    return deck;
  });
}

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_DECK:
      return state.concat(action.data);
    case ADD_CARD:
      return decksWithNewCard(state, action.data);
    default:
      return state;
  }
};

export default reducer;
