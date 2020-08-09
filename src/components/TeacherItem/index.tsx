import React from 'react';
import { View, Image, Text } from 'react-native';

import styles from './styles';

const TeacherItem: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image 
          style={styles.avatar}
          source={{
            uri: 'https://thispersondoesnotexist.com/image'
          }}
        />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>
            This Person Does Not Exist
          </Text>

          <Text style={styles.subject}>
            Inteligência Artificial
          </Text>
        </View>
      </View>

      <Text style={styles.bio}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          {'\n\n'}
          Quam fuga sapiente voluptatum fugit blanditiis quos voluptatem fugiat beatae animi id atque nam aspernatur, esse libero, ipsa quas reprehenderit dolore asperiores.
      </Text>
    </View>
  )
}

export default TeacherItem;