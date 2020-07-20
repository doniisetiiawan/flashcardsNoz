/* eslint-disable react/jsx-filename-extension,react/style-prop-object */
import 'react-native-gesture-handler';
import React from 'react';
import {
  StyleSheet,
  View,
  Platform,
  StatusBar,
} from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Flashcards from './src/components/Flashcards';

import reducer from './src/reducers';

const store = createStore(reducer);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      ios: { paddingTop: 20 },
      android: { paddingTop: StatusBar.currentHeight },
    }),
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <Provider store={store}>
        <Flashcards />
      </Provider>
    </View>
  );
}
