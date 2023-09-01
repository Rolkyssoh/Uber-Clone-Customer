import { View, Text, Dimensions, Alert } from 'react-native'
import React, { useState } from 'react'
import UberTypes from '../../components/UberTypes'
import RouteMap from '../../components/RouteMap'
import { useNavigation, useRoute } from '@react-navigation/native'
import { API, Auth, graphqlOperation } from 'aws-amplify'
import { createOrder } from '../../graphql/mutations'

const SearchResult = (props) => {
  const route = useRoute();
  const navigation = useNavigation()

  const typeState = useState(null);

  const {originPlace, destinationPlace } = route.params;

  const onSubmit = async () => {
    const [type] = typeState;
    if(!type){
      return;
    }

    // submit to server
    try {
      const userInfo = await Auth.currentAuthenticatedUser();
      const date = new Date()

      const response = await API.graphql(
        graphqlOperation(
          createOrder, {
            input: {
              type,
              originLatitude: originPlace.details.geometry.location.lat ,
              originLongitude: originPlace.details.geometry.location.lng,
              destinationLatitude: destinationPlace.details.geometry.location.lat ,
              destinationLongitude: destinationPlace.details.geometry.location.lng,
              userID: userInfo.attributes.sub ,
              carID: "0",
            }
          }
        )
      )
      console.log('the response:::', response)
      Alert.alert(
        "Hurraay", 
        "Your order has been submited!", 
        [{
          text: 'Go home',
          onPress:() => navigation.navigate('Home')
        }])
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <View style={{ display:'flex',justifyContent:'space-between'}}>
    <View style={{height:Dimensions.get('window').height - 350}}>
      <RouteMap origin={originPlace} destination={destinationPlace} />
    </View>

    <View style={{height:350}}>
      <UberTypes typeState={typeState} onSubmit={onSubmit} />
    </View>
    </View>
  )
}

export default SearchResult