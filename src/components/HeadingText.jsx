import React from 'react';
import { Dimensions, StyleSheet, Text } from 'react-native';

import { fonts, scalingFactors } from '../styles/fonts';

const { width } = Dimensions.get('window');

const scaled = StyleSheet.create({
  big: { fontSize: width / scalingFactors.big },
});

function HeadingText(props) {
  return (
    <Text style={[props.style, fonts.big, scaled.big]}>
      {props.children}
    </Text>
  );
}

export default HeadingText;
