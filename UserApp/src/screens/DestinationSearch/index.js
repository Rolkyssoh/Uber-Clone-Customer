
import { View, Text, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import PlaceRow from './PlaceRow';
import { useNavigation } from '@react-navigation/native';
import { GOOGLE_MAPS_APIKEY } from '@env'

navigator.geolocation = require('@react-native-community/geolocation');

const homePlace = {
  description: 'Home',
  geometry: { location: { lat: 48.8152937, lng: 2.4597668 } },
};
const workPlace = {
  description: 'Work',
  geometry: { location: { lat: 48.8496818, lng: 2.2940881 } },
};


const DestinationSearch = () => {
    const navigation = useNavigation();

    const [originPlace, setOriginPlace] = useState(null);
    const [destinationPlace, setDestinationPlace] = useState(null);

    useEffect(() => {
        if(originPlace && destinationPlace){
            navigation.navigate('SearchResults', {
              originPlace,
              destinationPlace
            })
        }
    },[originPlace, destinationPlace])

  return (
    <View style={styles.container}>
        <GooglePlacesAutocomplete
            placeholder='Where from?'
            onPress={(data, details = null) => {
              setOriginPlace({data, details})
            }}
            enablePoweredByContainer={false}
            suppressDefaultStyles
            currentLocation={true}
            currentLocationLabel='Current location'
            styles={{
                textInput:styles.textInput,
                description:{
                    color:'#000'
                },
                container: styles.autoCompletContainer,
                listView:styles.listView,
                separator: styles.separator
            }}
            fetchDetails
            nearbyPlacesAPI='GoogleReverseGeocoding'
            query={{
              key:`${GOOGLE_MAPS_APIKEY}`,
              language: 'en',
              components: 'country:ma',
            }}
            renderRow={(data) => <PlaceRow data={data} />}
            renderDescription={(data) => data.description || data.vicinity}
            predefinedPlaces={[homePlace, workPlace]}
        />

    <GooglePlacesAutocomplete
        placeholder='Where to?'
        onPress={(data, details = null) => {
          setDestinationPlace({data, details})
          console.log(data, details);
        }}
        enablePoweredByContainer={false}
        fetchDetails
        query={{
          key:`${GOOGLE_MAPS_APIKEY}`,
          language: 'en',
        }}
        suppressDefaultStyles
        styles={{
            textInput:styles.textInput,
            description:{
                color:'#000'
            },
            container: {...styles.autoCompletContainer, top:55},
            separator: styles.separator
        }}
        renderRow={(data) => <PlaceRow data={data} />}
    />
    
      {/* Circle near Origin input */}
      <View style={styles.circle} />

      {/* Line between dots*/}
      <View style={styles.line} />

      {/* Square near Destination input*/}
      <View style={styles.square} />
    </View>
  )
}

export default DestinationSearch