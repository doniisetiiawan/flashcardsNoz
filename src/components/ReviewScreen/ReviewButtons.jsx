import React from 'react';
import { StyleSheet } from 'react-native';

import Button from '../Button';
import NormalText from '../NormalText';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  options: { backgroundColor: '#FFFFFF' },
  rightAnswer: { backgroundColor: colors.green },
  wrongAnswer: { backgroundColor: colors.pink },
});

function mkAnswerButtons(
  answers,
  correctAnswer,
  showingAnswer,
  wasCorrect,
  selectAnswerFunc,
) {
  if (!answers) return null;

  return answers.map((a) => {
    const isCorrectAnswer = a === correctAnswer;
    const buttonStyle = [styles.options];
    if (showingAnswer && isCorrectAnswer) {
      if (wasCorrect) {
        buttonStyle.push(styles.rightAnswer);
      } else {
        buttonStyle.push(styles.wrongAnswer);
      }
    }

    return (
      <Button
        key={a}
        disabled={showingAnswer}
        style={buttonStyle}
        onPress={() => {
          selectAnswerFunc(isCorrectAnswer);
        }}
      >
        <NormalText>{a}</NormalText>
      </Button>
    );
  });
}

export default mkAnswerButtons;
