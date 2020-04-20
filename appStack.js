import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import BottomTabNavigator from './bottomTabNavigator.js';
import Login from '../screens/loginScreen';
import HomeScreen from '../screens/homeScreen';
import AuthNavigator from './authNavigator.js';

export default createAppContainer(
  createSwitchNavigator(
    {
      Login: Login,
      Main: BottomTabNavigator,
    },
    {
      initialRouteName: 'Login',
    },
  ),
);
