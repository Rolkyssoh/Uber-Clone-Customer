import React, { useState } from 'react'
import { View, Text, Dimensions, Pressable } from 'react-native'
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { GOOGLE_MAPS_APIKEY } from '@env';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'

import styles from './styles';
import NewOrderPopup from '../../components/NewOrderPopup';

const origin = {latitude: 33.3318456, longitude: 6.8401129};
const destination = {latitude: 33.771707, longitude: -6.8498109};

const HomeScreen = () => {
    const [isOnline, setIsOnline] = useState(false)

    const onGoPress = () => {
        setIsOnline(!isOnline)
    }


  return (
    <View style={{flex:1}}>
        <MapView
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            style={{width:'100%', height:Dimensions.get('window').height-100}}
            showsUserLocation={true}
            initialRegion={{
            latitude: 31.791702,
            longitude: -7.092620,
            latitudeDelta: 0.0222,
            longitudeDelta: 0.0121,
            }}
        >
            <MapViewDirections
                origin={origin}
                destination={destination}
                apikey={GOOGLE_MAPS_APIKEY}
            />
        </MapView>

        <Pressable onPress={() => console.warn('Balance!')} 
            style={styles.balanceButton}>
            <Text style={styles.balanceText}>
                <Text style={{color:'green'}}>$</Text>
                {' '}
                0.00
            </Text>
        </Pressable>

        <Pressable onPress={() => console.warn('Hiiii!')} 
            style={[styles.roundButton,{top:10, left:10}]}>
            <Entypo name="menu" size={24} color='#4a4a4a' />
        </Pressable>

        <Pressable onPress={() => console.warn('Hiiii!')} 
            style={[styles.roundButton,{top:10, right:10}]}>
            <Entypo name="menu" size={24} color='#4a4a4a' />
        </Pressable>

        <Pressable onPress={() => console.warn('Hiiii!')} 
            style={[styles.roundButton,{bottom:130, left:10}]}>
            <Entypo name="menu" size={24} color='#4a4a4a' />
        </Pressable>

        <Pressable onPress={() => console.warn('Hiiii!')} 
            style={[styles.roundButton,{bottom:130, right:10}]}>
            <Entypo name="menu" size={24} color='#4a4a4a' />
        </Pressable>

        <Pressable onPress={onGoPress} 
            style={styles.goButton}>
            <Text style={styles.goText}>
                { isOnline ? 'END' : 'GO'}
            </Text>
        </Pressable>

        <View style={styles.bottomContainer}>
            <Ionicons name="options" size={30} color='#4a4a4a' />
                {
                    isOnline 
                        ? <Text style={styles.bottomText}>You're online</Text> 
                        : <Text style={styles.bottomText}>You're offline</Text> 
                }
            <AntDesign name="bars" size={30} color='#4a4a4a' />
        </View>

        <NewOrderPopup />
    </View>
  )
}

export default HomeScreen