import React from 'react';
import { View, Text, Image } from 'react-native';

import landingImg from '../../assets/images/landing.png'

function Landing() {
  return (
    <View style={{backgroundColor: '#753951', flex: 1}}>
      <Text>Hello</Text>
      <Image source={landingImg} />
    </View>
  )
}

export default Landing;
