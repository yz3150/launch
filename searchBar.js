import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

class SearchBar extends React.Component {
  render() {
    return (
      <View>
        <TextInput style={styles.input} placeholder={'Search'} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    marginHorizontal: 12,
  },
});

export default SearchBar;
