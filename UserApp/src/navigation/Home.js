import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import DestinationSearch from '../screens/DestinationSearch';
import SearchResult from '../screens/SearchResult';

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
        <Stack.Navigator
            screenOptions={{
                headerShown:false,
            }}
            // initialRouteName='SearchResults'
        >
            <Stack.Screen name={'Home'} component={HomeScreen} />
            <Stack.Screen name={'DestinationSearch'} component={DestinationSearch}/>
            <Stack.Screen name={'SearchResults'} component={SearchResult}/>
        </Stack.Navigator>
  )
}

export default HomeNavigator