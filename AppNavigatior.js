import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import BottomTabNavigator from './BottomTabNavigator.js';

export default createAppContainer(
  createSwitchNavigator({
    main: BottomTabNavigator,
  }),
);
