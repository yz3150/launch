import React from 'react';
import {View, Text} from 'react-native';

import Profile from './profile';
import Home from './home';
import Settings from './settings';

export default class ScreenName extends React.Component {
  render() {
    const {name} = this.props;
    if (name === 'ProfileScreen') {
      return <Profile />;
    }
    if (name === 'HomeScreen') {
      return <Home />;
    }
    if (name === 'SettingsScreen') {
      return <Settings />;
    }
    return (
      <View>
        <Text>{this.props.name}</Text>
      </View>
    );
  }
}
