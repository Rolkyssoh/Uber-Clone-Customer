import React, { useEffect, useState } from 'react'
import { View, Text, Dimensions, Pressable, PermissionsAndroid } from 'react-native'
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { GOOGLE_MAPS_APIKEY } from '@env';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import styles from './styles';
import NewOrderPopup from '../../components/NewOrderPopup';
import { API, Auth, graphqlOperation } from 'aws-amplify';
import { getCar } from '../../graphql/queries';
import { updateCar } from '../../graphql/mutations';

const origin = {latitude: 33.5998456, longitude: -6.8401129};
const destination = {latitude: 33.771707, longitude: -6.8498109};

const HomeScreen = () => {
    const [car, setCar] = useState(null);
    const [order, setOrder] = useState(null);
    const [myPosition, setMyPosition] = useState(null)

    const [newOrder, setNewOrder] = useState({
        id:'1',
        type:'UberX',

        originLatitude:33.3310456,
        originLongitude: -6.8101129,

        destinationLatitude:33.3310456,
        destinationLongitude: -6.8101129,

        user: {
            rating: 4.5,
            name:'Rolko'
        }
    })

    const fetchCar = async () => {
        try {
            const userData = await Auth.currentAuthenticatedUser();
            const carData = await API.graphql(
                graphqlOperation(getCar, {id: userData.attributes.sub})
            )
            setCar(carData.data.getCar)
        } catch (e) {
            console.error(e)
        }

    }

    useEffect(() => {
        fetchCar()
    },[])

    const onGoPress = async () => {
        //Update the car and set it to active
        try {
            const userData = await Auth.currentAuthenticatedUser();
            const input = {
                id: userData.attributes.sub,
                isActive: !car.isActive
            }
            const updatedCarData = await API.graphql(
                graphqlOperation(updateCar, {input})
            )
            setCar(updatedCarData.data.updateCar)
        } catch (e) {
            console.error(e)
        }
    }

    const onDecline = () => {
        setNewOrder(null);
    }
    const onAccept = (newOrder) => {
        setOrder(newOrder)
        setNewOrder(null)
    }

    const renderBottomTitle = () => {
        if(order && order.isFinished){
            return (
                <View style={{ alignItems:'center'}}>
                    <View style={{
                            flexDirection:'row', 
                            alignItems:'center', 
                            justifyContent:'center', 
                            backgroundColor:'cb1a1a', 
                            width:200, padding:10}}>
                        <Text style={{ color:'#fff', fontWeight:'bold'}}>COMPLETE {order.type}</Text>
                    </View>
                    <Text style={styles.bottomText}>{order.user.name}</Text> 
                </View>
            )
        }
        if(order && order.pickedUp){
            return (
                <View style={{ alignItems:'center'}}>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <Text style={{ color:'#000'}}>{order.duration?.toFixed(2)} min</Text>
                        <View style={{backgroundColor:'#d41212', marginHorizontal:10, width:30, height:30,alignItems:'center', justifyContent:'center', borderRadius:20}}>
                            <FontAwesome name='user' color={'white'} size={20} />
                        </View>
                        <Text style={{ color:'#000'}}>{order.distance?.toFixed(2)} km</Text>
                    </View>
                    <Text style={styles.bottomText}>Dropping off {order.user.name}</Text> 
                </View>
            )
        }
        if(order){
            return (
                <View style={{ alignItems:'center'}}>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <Text style={{ color:'#000'}}>{order.duration?.toFixed(2)} min</Text>
                        <View style={{backgroundColor:'#1e9203', marginHorizontal:10, width:30, height:30,alignItems:'center', justifyContent:'center', borderRadius:20}}>
                            <FontAwesome name='user' color={'white'} size={20} />
                        </View>
                        <Text style={{ color:'#000'}}>{order.distance?.toFixed(2)} km</Text>
                    </View>
                    <Text style={styles.bottomText}>Picking up {order.user.name}</Text> 
                </View>
            )
        }
        if(car?.isActive) {
            return (
                <Text style={styles.bottomText}>You're online</Text> 
            )
        } 
        return (<Text style={styles.bottomText}>You're offline</Text> );
    }

    const onUserLocationChange = (event) => {
        // console.log('the event::::', event.nativeEvent)
        setMyPosition(event.nativeEvent.coordinate)
    }

    const onDirectionFound = (event) => {
        // console.log('Direction found', event)
        if(order){
            setOrder({
                ...order,
                distance: event.distance,
                duration: event.duration,
                pickedUp: order.pickedUp || event.distance < 0.2,
                isFinished: order.pickedUp && event.distance < 0.2
            })
        }
    }

    const getDestination = () => {
        if(order && order.pickedUp){
            return {
                latitude: order.destinationLatitude,
                longitude: order.destinationLongitude
            }
        }
        return {
            latitude: order.originLatitude,
            longitude: order.originLongitude
        }
    }


  return (
    <View style={{flex:1}}>
        <MapView
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            style={{ width: Dimensions.get('window').width, height:Dimensions.get('window').height-100}}
            showsUserLocation
            showsMyLocationButton
            onUserLocationChange={onUserLocationChange}
            initialRegion={{
            latitude: 31.791702,
            longitude: -7.092620,
            latitudeDelta: 0.0222,
            longitudeDelta: 0.0121,
            }}
            onMapReady={() => {
                PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
                ).then(granted => {
                //   alert(granted) // just to ensure that permissions were granted
                });
            }}
        >
            {order && (<MapViewDirections
                origin={myPosition}
                onReady={onDirectionFound}
                destination={getDestination()}
                apikey={GOOGLE_MAPS_APIKEY}
                strokeWidth={5}
                strokeColor='red'
            />)}
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
                { car?.isActive ? 'END' : 'GO'}
            </Text>
        </Pressable>

        <View style={styles.bottomContainer}>
            <Ionicons name="options" size={30} color='#4a4a4a' />
                { renderBottomTitle()}
            <AntDesign name="bars" size={30} color='#4a4a4a' />
        </View>

        {newOrder && <NewOrderPopup 
            newOrder={newOrder}
            duration={2}
            distance={0.5}
            onDecline={onDecline}
            onAccept={() => onAccept(newOrder)}
        />}
    </View>
  )
}

export default HomeScreen