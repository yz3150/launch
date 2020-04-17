import React from 'react';
import {View, Text} from 'react-native';

export default function ScreenName(props) {
  return (
    <View>
      <Text>{props.name}</Text>
    </View>
  );
}
