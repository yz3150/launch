import React from 'react';
import PropTypes from 'prop-types';

import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

class ProfileItem extends React.Component {
  static propTypes = {
    profile: PropTypes.object.isRequired,
    onPress: PropTypes.func.isRequired,
  };
  handlePress = () => {
    this.props.onPress(this.props.profile.id);
  };
  render() {
    const {profile} = this.props;
    return (
      <TouchableOpacity onPress={this.handlePress}>
        <View style={styles.profileCard}>
          <Image
            source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png',
          }}
            style={styles.image}
          />
          <View style={styles.interests}>
            <TouchableOpacity
              onPress={() => {
                /* do this */
              }}>
              <View>
                <Text>{profile.interests[0]}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                /* do this */
              }}>
              <View>
                <Text>{profile.interests[1]}</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.info}>
            <View style={styles.interaction}>
              <TouchableOpacity
                style={styles.follow}
                onPress={() => {
                  /* do this */
                }}>
                <View>
                  <Text>follow</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.chat}
                onPress={() => {
                  /* do this */
                }}>
                <View>
                  <Text>chat</Text>
                </View>
              </TouchableOpacity>
            </View>
            <Text style={styles.name}>{profile.name}</Text>
            <Text style={styles.school}>{profile.school}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const width = Dimensions.get('window').width;
const styles = StyleSheet.create({
  profileCard: {
    marginTop: 5,
    marginBottom: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    width: '20%',
    height: 100,
  },
  info: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  interests: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  interaction: {
    flexDirection: 'row',
  },
  name: {
    fontSize: 0.05 * width,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default ProfileItem;
