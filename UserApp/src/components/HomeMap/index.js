import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

import cars from '../../assets/data/cars'
import { API, graphqlOperation } from 'aws-amplify';
import { listCars } from '../../graphql/queries';

const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const SPACE = 0.01;

const HomeMap = () => {
    // const [cars, setCars] = useState([]);

    // useEffect(() => {
    //   const fetchCars = async () => {
    //     try{  
    //       const response = await API.graphql(
    //         graphqlOperation(
    //           listCars
    //         )
    //       )

    //       setCars(response.data.listCars.items);
    //     } catch(e){
    //       console.error(e)
    //     }
    //   };

    //   fetchCars()
    // },[])

    const getImage = (type) => {
      if(type === 'UberX'){
          return require('../../assets/images/top-UberX.png')
      }
      if(type.type === 'Comfort'){
          return require('../../assets/images/top-Comfort.png')
      }
      return require('../../assets/images/top-UberXL.png')
       
    }

  return (
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={{width:'100%', height:'100%'}}
        showsUserLocation={true}
        region={{
          latitude: 31.791702,
          longitude: -7.092620,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
     >
      {cars.map((car) => (
         <Marker
            key={car.id}
            coordinate={{  latitude: car.latitude,
                  longitude: car.longitude}}
          >
            <Image 
              style={{
                width:70, 
                height:70,
                resizeMode:'contain',
                transform: [{
                  rotate: `${car.heading}deg`
                }]
              }}
              source={getImage(car.type)} />
          </Marker>
      ))}
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

export default HomeMap