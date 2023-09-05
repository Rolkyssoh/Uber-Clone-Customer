/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import {enableLatestRenderer} from 'react-native-maps';
import React, { useEffect } from 'react';
import {
  SafeAreaView,
} from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import {withAuthenticator} from 'aws-amplify-react-native/dist/Auth';
import { API, Amplify, Auth, graphqlOperation } from 'aws-amplify';
import awsconfig from './src/aws-exports';
import { getCarId } from './src/graphql/queries';
import { createCar } from './src/graphql/mutations';
Amplify.configure(awsconfig);

enableLatestRenderer();


function App() {

  useEffect(()=> {
    const updateUserCar = async () => {
      //Get authenticate user
      const authenticatedUser = await Auth.currentAuthenticatedUser({bypassCache: true});
      if(!authenticatedUser){
        return;
      }

      //Check if the user has already a car
      const carData = await API.graphql(
        graphqlOperation(
          getCarId,
          {id: authenticatedUser.attributes.sub}
        )
      )

      if(!!carData.data.getCar){
        console.log('User already has a car assigned!')
        return;
      }
      console.log('the carData', carData)

      //if not, create a new car for the user
      const newCar = {
        id:authenticatedUser.attributes.sub,
        type:'UberX',
        userID:authenticatedUser.attributes.sub,
      }
      await API.graphql(graphqlOperation(
        createCar,
        { input: newCar}
      ))
    };

    updateUserCar();
  },[])

  return (
    <SafeAreaView style={{backgroundColor:'white', flex:1}}>
      <HomeScreen />
    </SafeAreaView>
  );
}


export default withAuthenticator(App);
