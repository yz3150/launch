import React from 'react';

import {View, Text, Image, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default class Settings extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Settings</Text>
        <TouchableOpacity>
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
          <Text>Notification Settings</Text>
          <View style={styles.lineStyle} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>My Coupons</Text>
          <View style={styles.lineStyle} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Legal & Terms</Text>
          <View style={styles.lineStyle} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Support & Help</Text>
          <View style={styles.lineStyle} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Log out</Text>
          <View style={styles.lineStyle} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  image: {
    width: '20%',
    height: 100,
  },
  lineStyle: {
    borderBottomColor: '#ECEBED',
    borderBottomWidth: 1,
  },
});
