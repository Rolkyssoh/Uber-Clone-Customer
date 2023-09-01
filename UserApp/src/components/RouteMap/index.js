import React from 'react';
import {StyleSheet, Image } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { GOOGLE_MAPS_APIKEY } from '@env'

const RouteMap = ({origin, destination}) => { 

  const originLoc = {
    latitude: origin.details.geometry.location.lat,
    longitude: origin.details.geometry.location.lng
  };
  const destinationLoc = {
    latitude: destination.details.geometry.location.lat,
    longitude: destination.details.geometry.location.lng
  }

  return (
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
        apikey={`${GOOGLE_MAPS_APIKEY}`}
        strokeWidth={3}
        strokeColor='black'
      />
      <Marker 
        coordinate={originLoc}
        title={'Origin'}
      />
      <Marker 
        coordinate={destinationLoc}
        title={'Destination'}
      />
     </MapView>
  )
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default RouteMap