import React from 'react'
import { View, Text } from 'react-native'
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { GOOGLE_MAPS_APIKEY } from '@env';

const HomeScreen = () => {

    const origin = {latitude: 33.3318456, longitude: 6.8401129};
    const destination = {latitude: 33.771707, longitude: -6.8498109};

  return (
    <View>
    <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={{width:'100%', height:'100%'}}
        showsUserLocation={true}
        initialRegion={{
        latitude: 31.791702,
        longitude: -7.092620,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
        }}
    >
        <MapViewDirections
            origin={origin}
            destination={destination}
            apikey={GOOGLE_MAPS_APIKEY}
        />
    </MapView>
    </View>
  )
}

export default HomeScreen