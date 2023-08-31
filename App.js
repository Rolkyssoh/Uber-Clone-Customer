/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import {enableLatestRenderer} from 'react-native-maps';
import React, { useEffect } from 'react';
import {
  PermissionsAndroid,
  Platform,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import RootNavigator from './src/navigation/Root';
import {withAuthenticator} from 'aws-amplify-react-native/dist/Auth';
import { Amplify } from 'aws-amplify';
import awsconfig from './src/aws-exports';
Amplify.configure(awsconfig);

enableLatestRenderer();
// navigator.geolocation = require('@react-native-community/geolocation');

function App() {

  const androidPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Uber App Location Persmission',
          message:
            'Uber App needs access to your location ' +
            'so you can take awesome rides.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the location');
      } else {
        console.log('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  }

  useEffect(() => {
    if(Platform.OS === 'android'){
      androidPermission()
    } else {
      // request for ios
      Geolocation.requestAuthorization();
    }
  },[])

  return (
    <SafeAreaView style={{backgroundColor:'white', flex:1}}>
      <RootNavigator />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});

export default withAuthenticator(App);
