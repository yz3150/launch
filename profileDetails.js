import React from 'react';
import PropTypes from 'prop-types';

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

class ProfileDetails extends React.Component {
  static propTypes = {
    initialRealData: PropTypes.object.isRequired,
    onBack: PropTypes.func.isRequired,
  };
  state = {
    profile: this.props.initialRealData,
  };

  render() {
    const {profile} = this.state;
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.props.onBack}>
          <Text>Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Discovery</Text>
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
        <View>
          <Text style={styles.subtitle}>About</Text>
          <View style={styles.lineStyle} />
          <Text>{profile.about}</Text>
        </View>
        <View>
          <Text style={styles.subtitle}>Skills</Text>
          <View style={styles.lineStyle} />
          <TouchableOpacity>
            <View>
              <Text>{profile.skills}</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.subtitle}>Working Styles</Text>
          <View style={styles.lineStyle} />
          <TouchableOpacity>
            <View>
              <Text>{profile.workingStyles}</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.subtitle}>Past Projects</Text>
          <View style={styles.lineStyle} />
          <TouchableOpacity>
            <View>
              <Text>{profile.pastProjects}</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.subtitle}>Recommendations</Text>
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

const width = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 34,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  profileCard: {
    marginTop: 5,
    marginBottom: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 2,
    backgroundColor: '#F7F5F9',
  },
  lineStyle: {
    borderBottomColor: '#ECEBED',
    borderBottomWidth: 1,
    marginBottom: 15,
  },
  image: {
    width: '20%',
    height: 80,
    marginVertical: 5,
    marginHorizontal: 5,
  },
  interests: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginTop: 5,
  },
  interaction: {
    flexDirection: 'row',
    marginTop: 5,
  },
  chat: {
    marginLeft: 5,
  },
  info: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  name: {
    fontSize: 0.05 * width,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  school: {
    marginBottom: 10,
  },
  subtitle: {
    fontWeight: 'bold',
    fontSize: 17,
    marginTop: 20,
  },
});

export default ProfileDetails;
