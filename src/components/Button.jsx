import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import colors from '../styles/colors';

const styles = StyleSheet.create({
  wideButton: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    margin: 10,
    backgroundColor: colors.pink,
  },
});

function Button(props) {
  const opacity = props.disabled ? 1 : 0.5;
  return (
    <TouchableOpacity
      activeOpacity={opacity}
      onPress={props.onPress}
      style={[styles.wideButton, props.style]}
    >
      {props.children}
    </TouchableOpacity>
  );
}

Button.defaultProps = { disabled: false };

export default Button;
