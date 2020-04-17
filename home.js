import React from 'react';

import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <TouchableOpacity>
            <Text>Hi, name</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Here are some recent updates</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>chat</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text>You might be interested in...</Text>
          <TouchableOpacity>
            <Text>Others' projects</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text>Your Projects</Text>
          <TouchableOpacity>
            <Text>My projects</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
});
