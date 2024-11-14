import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../presentation/screens/HomeScreen';

const Stack = createStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} />
  </Stack.Navigator>
);

export default AppNavigator;
