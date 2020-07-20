import { mkReviews } from '../data/QuizCardView';
import {
  REVIEW_DECK,
  NEXT_REVIEW,
  STOP_REVIEW,
} from '../actions/types';

export const mkReviewState = (
  deckID = null,
  questions = [],
  currentQuestionIndex = 0,
) => ({ deckID, questions, currentQuestionIndex });

function findDeck(decks, id) {
  return decks.find((d) => d.id === id);
}

function generateReviews(deck) {
  return mkReviewState(deck.id, mkReviews(deck.cards), 0);
}

function nextReview(state) {
  return mkReviewState(
    state.deckID,
    state.questions,
    state.currentQuestionIndex + 1,
  );
}

const reducer = (
  state = mkReviewState(),
  action,
  decks,
) => {
  switch (action.type) {
    case REVIEW_DECK:
      return generateReviews(
        findDeck(decks, action.data.deckID),
      );
    case NEXT_REVIEW:
      return nextReview(state);
    case STOP_REVIEW:
      return mkReviewState();
    default:
      return state;
  }
};

export default reducer;
