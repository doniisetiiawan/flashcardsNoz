import React from 'react';
import { StyleSheet } from 'react-native';
import Button from '../Button';
import NormalText from '../NormalText';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  continueButton: { backgroundColor: colors.tan },
});

function ContinueButton(props) {
  const text = props.wasCorrect
    ? 'Correct! Next card?'
    : 'Oops, not quite. Next card?';
  return (
    <Button
      onPress={props.onPress}
      style={styles.continueButton}
    >
      <NormalText>{text}</NormalText>
    </Button>
  );
}

export default ContinueButton;
