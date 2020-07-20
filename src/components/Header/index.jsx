import React from 'react';
import { Image, View } from 'react-native';

import styles from './styles';
import HeadingText from '../HeadingText';
import icon from '../../icon.png';

function Header() {
  return (
    <View style={styles.header}>
      <Image
        source={icon}
        style={styles.logo}
      />
      <HeadingText>FLASHCARDS</HeadingText>
    </View>
  );
}

export default Header;
