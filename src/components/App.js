import React from 'react';

import {View, StyleSheet, Text} from 'react-native';

import Login from '../screens/loginScreen';
import AppStack from '../navigation/appStack';
import MyProfile from './myProfile';
import {Provider} from 'react-redux';
import store from '../redux/store';
import AuthNavigator from '../navigation/authNavigator';
import BottomTabNavigator from '../navigation/bottomTabNavigator';

// store.dispatch({type: 'HELLO'});
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppStack />
      </Provider>
    );
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