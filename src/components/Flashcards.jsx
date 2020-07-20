import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import Heading from './Header';
import DeckScreen from './DeckScreen';

const styles = StyleSheet.create({ container: { flex: 1, marginTop: 30 } });

class Flashcards extends Component {
  _renderScene = () => <DeckScreen />;

  render() {
    return (
      <View style={styles.container}>
        <Heading />
        {this._renderScene()}
      </View>
    );
  }
}

export default Flashcards;
