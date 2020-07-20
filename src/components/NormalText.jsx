import React from 'react';
import { Dimensions, StyleSheet, Text } from 'react-native';

import { fonts, scalingFactors } from '../styles/fonts';

const { width } = Dimensions.get('window');

const scaled = StyleSheet.create({
  normal: {
    fontSize: (width * 1.0) / scalingFactors.normal,
  },
});

function NormalText(props) {
  return (
    <Text
      style={[props.style, fonts.normal, scaled.normal]}
    >
      {props.children}
    </Text>
  );
}

export default NormalText;
