import { MockDecks } from '../data/Mocks';

import DecksReducer from './decks';
import ReviewReducer, { mkReviewState } from './reviews';

const initialState = () => ({
  decks: MockDecks,
  currentReview: mkReviewState(),
});

const reducer = (state = initialState(), action) => {
  const decks = DecksReducer(state.decks, action);

  return {
    decks,
    currentReview: ReviewReducer(
      state.currentReview,
      action,
      decks,
    ),
  };
};

export default reducer;
