import {
  ADD_DECK,
  ADD_CARD,
  REVIEW_DECK,
  STOP_REVIEW,
  NEXT_REVIEW,
  LOAD_DATA,
} from './types';

import Card from '../data/Card';
import Deck from '../data/Deck';

export const addDeck = (name) => ({
  type: ADD_DECK,
  data: new Deck(name),
});

export const addCard = (front, back, deckID) => ({
  type: ADD_CARD,
  data: new Card(front, back, deckID),
});

export const reviewDeck = (deckID) => ({
  type: REVIEW_DECK,
  data: { deckID },
});

export const stopReview = () => ({
  type: STOP_REVIEW,
  data: {},
});

export const nextReview = () => ({
  type: NEXT_REVIEW,
  data: {},
});

export const loadData = (data) => ({
  type: LOAD_DATA,
  data,
});
