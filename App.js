import React from 'react';

import {View, StyleSheet, Text} from 'react-native';

import AppNavigator from '../navigation/AppNavigatior';

class App extends React.Component {
  render() {
    return <AppNavigator />;
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