import React from 'react';

import {createBottomTabNavigator} from 'react-navigation-tabs';

import HomeScreen from '../screens/homeScreen';
import ProfileScreen from '../screens/profileScreen';
import ProjectScreen from '../screens/projectScreen';
import SettingsScreen from '../screens/settingsScreen';

const BottomTabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Discovery: ProfileScreen,
  Projects: ProjectScreen,
  Settings: SettingsScreen,
});

export default BottomTabNavigator;
