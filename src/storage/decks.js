import { AsyncStorage } from 'react-native';
import Deck from '../data/Deck';

export const DECK_KEY = 'flashcards:decks';

async function read(key, deserializer) {
  try {
    const val = await AsyncStorage.getItem(key);
    if (val !== null) {
      return JSON.parse(val)
        .map((serialized) => deserializer(serialized));
    }
    console.info(`${key} not found on disk.`);
    return [];
  } catch (error) {
    console.warn('AsyncStorage error: ', error.message);
  }
}

async function write(key, item) {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(item));
  } catch (error) {
    console.error('AsyncStorage error: ', error.message);
  }
}

export const readDecks = () => read(DECK_KEY, Deck.fromObject);

export const writeDecks = (decks) => write(DECK_KEY, decks);

// For debug/test purposes.
// const replaceData = writeDecks(MockDecks);
