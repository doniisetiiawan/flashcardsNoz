import React from 'react';
import { StyleSheet } from 'react-native';
import Button from '../Button';
import NormalText from '../NormalText';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  createDeck: { backgroundColor: colors.green },
});

function CreateDeckButton(props) {
  return (
    <Button
      style={styles.createDeck}
      onPress={props.onPress}
    >
      <NormalText>Create Deck</NormalText>
    </Button>
  );
}

export default CreateDeckButton;
