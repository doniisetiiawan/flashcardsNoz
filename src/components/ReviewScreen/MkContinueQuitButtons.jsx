import React from 'react';
import { StyleSheet } from 'react-native';
import ContinueButton from './ContinueButton';
import Button from '../Button';
import NormalText from '../NormalText';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  continueButton: { backgroundColor: colors.tan },
});

function mkContinueQuitButtons(
  showingAnswer,
  wasCorrect,
  continueFunc,
  quitFunc,
) {
  if (showingAnswer) {
    return (
      <ContinueButton
        onPress={continueFunc}
        wasCorrect={wasCorrect}
      />
    );
  }
  return (
    <Button
      onPress={quitFunc}
      style={styles.continueButton}
    >
      <NormalText>Stop Reviewing</NormalText>
    </Button>
  );
}

export default mkContinueQuitButtons;
