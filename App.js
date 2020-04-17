import * as React from 'react';

import {View, StyleSheet, Text} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import AppNavigator from '../navigation/AppNavigatior';

// const Stack = createStackNavigator();
class App extends React.Component {
  render() {
    return (
      <AppNavigator />
      // <NavigationContainer>
      //   <Stack.Navigator>
      //     <Stack.Screen
      //       name="Home"
      //       component={Home}
      //       options={{title: 'HomePage'}}
      //     />
      //     <Stack.Screen
      //       name="Profile"
      //       component={ProfileScreen}
      //       options={{title: 'ProfilePage'}}
      //     />
      //     <Stack.Screen
      //       name="Projects"
      //       component={ProjectScreen}
      //       options={{title: 'ProjectPage'}}
      //     />
      //     <Stack.Screen
      //       name="Setting"
      //       component={SettingScreen}
      //       options={{title: 'SettingPage'}}
      //     />
      //   </Stack.Navigator>
      // </NavigationContainer>
    );
  }
}

export default App;
