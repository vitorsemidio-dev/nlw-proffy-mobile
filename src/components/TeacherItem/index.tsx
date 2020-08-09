import React from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png'
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'

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

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/Hora {'   '}
          <Text style={styles.priceValue}>
            R$100,00
          </Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton style={styles.favoriteButton}>
            <Image source={heartOutlineIcon} />
          </RectButton>

          <RectButton style={styles.favoriteButton}>
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}>Entrar em contato</Text>
          </RectButton>


        </View>
      </View>
    </View>
  )
}

export default TeacherItem;