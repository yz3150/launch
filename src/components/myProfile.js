import React from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
  StyleSheet,
} from 'react-native';

import {connect} from 'react-redux';
import {createProfile} from '../redux/actions/profileAction';

class MyProfile extends React.Component {
  state = {
    school: '',
    aboutMe: '',
  }
handleSchool = (text) => {
  console.log(text);
  this.setState({
    school:text
  })
}
handleAboutMe = (text) => {
  console.log(text);
  this.setState({
    aboutMe: text
  })
}
handlePress = (e) => {
  e.preventDefault();
  this.props.createProfile(this.state);
  console.log(e);
}
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
            <TextInput id='school' onChangeText={this.handleSchool} />
            <Text>About me: </Text>
            <TextInput id='aboutMe' onChangeText={this.handleAboutMe}/>
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
        <Button title="Create" onPress={this.handlePress}/>
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

const mapDispatchToProps = (dispatch) => {
  return {
    createProfile: (profile) => dispatch(createProfile(profile)),
  }
}

export default connect(null, mapDispatchToProps)(MyProfile);