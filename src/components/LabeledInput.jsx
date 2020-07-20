import React from 'react';

import { StyleSheet, View } from 'react-native';

import Input from './Input';
import NormalText from './NormalText';

const styles = StyleSheet.create({
  label: { paddingLeft: 10 },
  wrapper: { padding: 5 },
});

function LabeledInput(props) {
  return (
    <View style={styles.wrapper}>
      <NormalText style={styles.label}>
        {props.label}:
      </NormalText>
      <Input
        onEntry={props.onEntry}
        onChange={props.onChange}
        clearOnSubmit={props.clearOnSubmit}
        style={props.inputStyle}
      />
    </View>
  );
}

export default LabeledInput;
