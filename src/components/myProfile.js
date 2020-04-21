import React from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
  StyleSheet,
} from 'react-native';

export default class MyProfile extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>My Profile</Text>
        </View>
        <View>
          <Text style={styles.subtitle}>About</Text>
          <View style={styles.lineStyle} />
          <View>
            <Text>Email: </Text>
            <TextInput />
            <Text>Name: </Text>
            <TextInput />
            <Text>School: </Text>
            <TextInput />
            <Text>About me: </Text>
            <TextInput />
          </View>
        </View>
        <View>
          <Text style={styles.subtitle}>Skills</Text>
          <View style={styles.lineStyle} />
          <TouchableOpacity><Text>+</Text></TouchableOpacity>
        </View>
        <View>
          <Text style={styles.subtitle}>Working Styles</Text>
          <View style={styles.lineStyle} />
          <TouchableOpacity><Text>+</Text></TouchableOpacity>
        </View>
        <View>
          <Text style={styles.subtitle}>Past Projects</Text>
          <View style={styles.lineStyle} />
          <TouchableOpacity><Text>+</Text></TouchableOpacity>
        </View>
        <View>
          <Text style={styles.subtitle}>Recommendations</Text>
        </View>
        <Button title="Create" />
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
    textAlign: 'center',
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
})