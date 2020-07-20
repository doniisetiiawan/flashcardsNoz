import React from 'react';
import { Image } from 'react-native';

import styles from './styles';
import icon from '../../icon.png';

function Logo() {
  return <Image source={icon} style={styles.logo} />;
}

export default Logo;
