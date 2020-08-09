import React from 'react';
import { View, Text, Image } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

import backIcon from '../../assets/images/icons/back.png';
import logoImg from '../../assets/images/icons/logo.png';

import styles from './styles';

function PageHeader() {
  function handleGoBack() {

  }

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <BorderlessButton onPress={handleGoBack}>
          <Text>
            <Image source={backIcon} resizeMode="contain" />
          </Text>
        </BorderlessButton>

        <Image source={logoImg} resizeMode="contain" />
      </View>
    </View>
  )
}

export default PageHeader;