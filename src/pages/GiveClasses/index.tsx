import React from 'react';
import { View, Text, ImageBackground } from 'react-native';

import giveClassesBgImage from '../../assets/images/give-classes-background.png';

import styles from './styles';

function GiveClasses() {
  return (
    <View style={styles.container}>
      <ImageBackground 
        style={styles.content}
        source={giveClassesBgImage}>

      </ImageBackground>
    </View>
  )
}

export default GiveClasses;