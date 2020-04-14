import React from 'react';
import PropTypes from 'prop-types';

import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

class ProfileDetails extends React.Component {
  static propTypes = {
    initialRealData: PropTypes.object.isRequired,
  };
  state = {
    profile: this.props.initialRealData,
  };

  render() {
    const {profile} = this.state;
    return (
      <View>
        <View style={styles.container}>
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
        <View>
          <Text style={styles.title}>About</Text>
          <View style={styles.lineStyle} />
          <Text>{profile.about}</Text>
        </View>
        <View>
          <Text style={styles.title}>Skills</Text>
          <View style={styles.lineStyle} />
          <TouchableOpacity>
            <View>
              <Text>{profile.skills}</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.title}>Working Styles</Text>
          <View style={styles.lineStyle} />
          <TouchableOpacity>
            <View>
              <Text>{profile.workingStyles}</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.title}>Past Projects</Text>
          <View style={styles.lineStyle} />
          <TouchableOpacity>
            <View>
              <Text>{profile.pastProjects}</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.title}>Recommendations</Text>
          <View style={styles.lineStyle} />
          <TouchableOpacity>
            <View>
              <Text>{profile.recommendations}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    marginTop: 80,
    marginBottom: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  lineStyle: {
    borderBottomColor: '#ECEBED',
    borderBottomWidth: 1,
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
    fontWeight: 'bold',
    marginBottom: 5,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  }
});

export default ProfileDetails;
