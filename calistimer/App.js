import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

/* React Navigation Imports */
import { createStackNavigator, createAppContainer } from 'react-navigation'
import HomeScreen from './src/screens/HomeScreen';
import EMOMScreen from './src/screens/EMOMScreen';

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  EMOM: EMOMScreen
}, { initialRouteName: 'EMOM' })

export default createAppContainer(AppNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 48,
    textAlign: 'center',
    margin: 10,
    fontFamily: "Ubuntu-Bold"
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
