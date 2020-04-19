import React from 'react';

import {View, StyleSheet, Text} from 'react-native';

import Login from '../screens/loginScreen';
import AppStack from '../navigation/appStack';
import AuthNavigator from '../navigation/authNavigator';
import BottomTabNavigator from '../navigation/bottomTabNavigator';

class App extends React.Component {
  render() {
    return <AuthNavigator />;
  }
}
const styles = StyleSheet.create({
  main: {
    marginTop: 80,
  },
  searchBar: {
    marginTop: 80,
  },
});

export default App;
