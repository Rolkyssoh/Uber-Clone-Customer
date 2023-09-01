/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import HomeScreen from './src/screens/HomeScreen';


function App() {

  return (
    <SafeAreaView style={{backgroundColor:'white', flex:1}}>
      <HomeScreen />
    </SafeAreaView>
  );
}


export default App;
