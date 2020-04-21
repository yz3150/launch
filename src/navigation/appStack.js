import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import BottomTabNavigator from './bottomTabNavigator.js';
import Login from '../screens/loginScreen';
import MyProfile from '../components/myProfile';
import HomeScreen from '../screens/homeScreen';
import AuthNavigator from './authNavigator.js';

export default createAppContainer(
  createSwitchNavigator(
    {
      Login: Login,
      Main: BottomTabNavigator,
      MyProfile: MyProfile,
    },
    {
      initialRouteName: 'Login',
    },
  ),
);

