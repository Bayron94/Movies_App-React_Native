import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../presentation/screens/HomeScreen';
import MovieDetailScreen from '../presentation/screens/MovieDetailScreen';
import { RootStackParamList } from './types';

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="MovieDetail" component={MovieDetailScreen} />
  </Stack.Navigator>
);

export default AppNavigator;
