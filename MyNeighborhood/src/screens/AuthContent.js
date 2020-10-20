import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './LoginScreen';
import RegistrationScreen from './RegistrationScreen';
import HomeScreen from './HomeScreen';

const Stack = createStackNavigator();

export default function ValidationStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name= "Login" component={LoginScreen}/>
            <Stack.Screen name= "Register" component={RegistrationScreen}/>
            <Stack.Screen name= "Home" component={HomeScreen}/>
        </Stack.Navigator>
    );
  }

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
},
});