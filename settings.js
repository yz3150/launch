import React from 'react';

import {View, Text, Image, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default class Settings extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Settings</Text>
        <TouchableOpacity style={styles.imageContainer}>
          <Image
            source={{
              uri:
                'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png',
            }}
            style={styles.image}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.lineStyle} />
          <Text style={styles.subtitle}>Notification Settings</Text>
          <View style={styles.lineStyle} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.subtitle}>My Coupons</Text>
          <View style={styles.lineStyle} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.subtitle}>Legal & Terms</Text>
          <View style={styles.lineStyle} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.subtitle}>Support & Help</Text>
          <View style={styles.lineStyle} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.subtitle}>Log out</Text>
          <View style={styles.lineStyle} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginHorizontal: 5,
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  subtitle: {
    fontSize: 17,
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  image: {
    width: '20%',
    height: 80,
  },
  lineStyle: {
    borderBottomColor: '#ECEBED',
    borderBottomWidth: 1,
    marginVertical: 15,
  },
});
