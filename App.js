/* eslint-disable react/jsx-filename-extension,react/style-prop-object */
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Flashcards from './src/components/Flashcards';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <Flashcards />
    </View>
  );
}
