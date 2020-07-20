import React from 'react';
import { StyleSheet, View } from 'react-native';

import HeadingText from '../HeadingText';
import NormalText from '../NormalText';
import Button from '../Button';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  alternate: { color: '#FFFFFF' },
  done: { alignItems: 'center' },
  doneButton: { backgroundColor: colors.tan },
});

function mkReviewSummary(percentCorrect, quitFunc) {
  return (
    <View style={styles.done}>
      <HeadingText style={styles.alternate}>
        Reviews cleared!
      </HeadingText>
      <NormalText style={styles.alternate}>
        {Math.round(percentCorrect * 100)}% correct
      </NormalText>
      <Button onPress={quitFunc} style={styles.doneButton}>
        <NormalText>Done</NormalText>
      </Button>
    </View>
  );
}

export default mkReviewSummary;
