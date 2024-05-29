import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screen/HomeScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="HOME" component={HomeScreen} />
        <Tab.Screen name="REORDER" component={HomeScreen} />
        <Tab.Screen name="CART" component={HomeScreen} />
        <Tab.Screen name="ACCOUNT" component={HomeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App
