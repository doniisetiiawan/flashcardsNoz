/* eslint-disable react/jsx-filename-extension,react/style-prop-object */
import 'react-native-gesture-handler';
import React from 'react';
import {
  StyleSheet,
  View,
  Platform,
  StatusBar,
} from 'react-native';
import Flashcards from './src/components/Flashcards';

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
      <Flashcards />
    </View>
  );
}
