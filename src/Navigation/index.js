import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SigninScreen from '../screens/SigninScreen';
import RegisterScreen from '../screens/RegisterScreen';
import HomeScreen from '../screens/HomeScreen';
import DashesScreen from '../screens/DashesScreen/DashesScreen';
import DashesDetails from '../screens/DashesScreen/DashesDetails';
import EditDashes from '../screens/DashesScreen/EditDashes';

const Stack = createStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name ='SignIn' component={SigninScreen} />
        <Stack.Screen name ='Home' component={HomeScreen} />
        <Stack.Screen name ='SignUp' component={RegisterScreen} />
        <Stack.Screen name ='Dashes' component={DashesScreen} />
        <Stack.Screen name ='DashesDetails' component={DashesDetails} />
        <Stack.Screen name ='EditDashes' component={EditDashes} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
