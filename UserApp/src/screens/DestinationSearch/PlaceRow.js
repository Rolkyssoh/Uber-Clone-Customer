import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import styles from './styles'
import Entypo from 'react-native-vector-icons/Entypo';
import Geolocation from '@react-native-community/geolocation';



const PlaceRow = ({data}) => {
console.log('the data:', data)

  // useEffect(() => {
  //   Geolocation.getCurrentPosition(info => console.log(info));
  // },[])

  return (
    <View style={styles.row}>
      <View style={[
        styles.iconContainer,
        { backgroundColor: data.description ==='Home' && 'blue'}
      ]}>
        {data.description === 'Home' 
          ? <Entypo name='home' size={20} color={'white'} />
          : <Entypo name='location-pin' size={20} color={'white'} />
        }
      </View>
      <Text style={styles.locationText}>{data.description || data.vicinity}</Text>
    </View>
  )
}

export default PlaceRow