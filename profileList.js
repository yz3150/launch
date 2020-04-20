import React from 'react';
import PropTypes from 'prop-types';

import {View, StyleSheet, FlatList} from 'react-native';

import ProfileItem from './profileItem';

class ProfileList extends React.Component {
  static propTypes = {
    profiles: PropTypes.array.isRequired,
    onItemPress: PropTypes.func.isRequired,
  };
  render() {
    return (
      <View style={styles.list}>
        <FlatList
          data={this.props.profiles}
          renderItem={({item}) => (
            <ProfileItem profile={item} onPress={this.props.onItemPress} />
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginHorizontal: 10,
  },
  // list: {
  //   backgroundColor: '#F7F5F9',
  // },
});

export default ProfileList;
