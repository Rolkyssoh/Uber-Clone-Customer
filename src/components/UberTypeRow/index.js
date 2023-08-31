import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import styles from './styles'


const UberTypeRow = (props) => {
    const { type, onPress, isSelected } = props;

    const getImageName = () => {
        if(type.type === 'UberX'){
            return require('../../assets/images/UberX.jpeg')
        }
        if(type.type === 'Comfort'){
            return require('../../assets/images/Comfort.jpeg')
        }
        return require('../../assets/images/UberXL.jpeg')
        
    }

  return (
    <Pressable onPress={onPress} style={[styles.container, {backgroundColor: isSelected ? "#efefef" : 'white'}]}>
     {/* Image */}
     <Image 
        style={styles.image} 
        source={getImageName()} />

      <View style={styles.middleContainer}>
        <Text style={styles.type}>
            {type.type}{' '}
            <Ionicons name='person' size={12} />
            3
        </Text>
        <Text style={styles.time}>
            8:03PM drop off
        </Text>
      </View>
      <View style={styles.rightContainer}>
        <Ionicons name="pricetag" size={12} color='#42d742'/>
        <Text style={styles.price}>est. ${type.price}</Text>
      </View>
    </Pressable>
  )
}

export default UberTypeRow