import React from 'react';

import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <TouchableOpacity>
            <Text style={styles.title}>Hi, name</Text>
          </TouchableOpacity>
          <View style={styles.message}>
            <TouchableOpacity>
              <Text>Here are some recent updates</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text>chat</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text style={styles.subtitle}>You might be interested in...</Text>
          <View style={styles.lineStyle} />
          <TouchableOpacity>
            <Text>Others' projects</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.subtitle}>Your Projects</Text>
          <View style={styles.lineStyle} />
          <TouchableOpacity>
            <Text style={styles.subtitle}>My projects</Text>
            <View style={styles.lineStyle} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  subtitle: {
    fontWeight: 'bold',
    fontSize: 17,
    marginTop: 20,
  },
  lineStyle: {
    borderBottomColor: '#ECEBED',
    borderBottomWidth: 1,
    marginBottom: 15,
  },
  message: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
