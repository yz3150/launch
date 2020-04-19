import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import BottomTabNavigator from './bottomTabNavigator.js';
import AuthNavigator from './authNavigator.js';

export default createAppContainer(
  createSwitchNavigator(
    {
      Main: BottomTabNavigator,
    },
    {
      initialRouteName: 'Main',
    },
  ),
);
