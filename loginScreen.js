import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from 'react-native-google-signin';
import auth from '@react-native-firebase/auth';

export default class Login extends React.Component {
  state = {
    pushData: [],
    loggedIn: false,
  };
  componentDidMount() {
    GoogleSignin.configure({
      webClientId: '1032591718346-cb75m338v0in1cjkte9gjpihglenisqj.apps.googleusercontent.com', 
      offlineAccess: true, 
      hostedDomain: '', 
      forceConsentPrompt: true, 
    });
  }
  firebaseGoogleLogin = async () => {
    try {
      // add any configuration settings here:
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      this.setState({userInfo: userInfo, loggedIn: true});
      this.props.navigation.navigate('Main');
      console.log(userInfo);
      // create a new firebase credential with the token
      const credential = auth.GoogleAuthProvider.credential(
        userInfo.idToken,
        userInfo.accessToken,
      );
      // login with credential
      const firebaseUserCredential = await auth().signInWithCredential(
        credential,
      );

      console.warn(JSON.stringify(firebaseUserCredential.user.toJSON()));
    } catch (error) {
      console.log(error);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        console.log('user cancelled the login flow');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (f.e. sign in) is in progress already
        console.log('operation (f.e. sign in) is in progress already');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
        console.log('play services not available or outdated');
      } else {
        // some other error happened
        console.log('some other error happened');
      }
    }
  };
  _signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      this.setState({userInfo: userInfo, loggedIn: true});
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (f.e. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };
  getCurrentUserInfo = async () => {
    try {
      const userInfo = await GoogleSignin.signInSilently();
      this.setState({userInfo});
      console.log(userInfo);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_REQUIRED) {
        // user has not signed in yet
        this.setState({loggedIn: false});
      } else {
        // some other error
        this.setState({loggedIn: false});
      }
    }
  };
  signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      this.setState({user: null, loggedIn: false}); // Remember to remove the user from your app's state as well
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Launch</Text>
        <TouchableOpacity>
          <Text style={styles.subtitle}>Sign up</Text>
        </TouchableOpacity>
        <Text>Or</Text>
        <GoogleSigninButton
          style={styles.button}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={this.firebaseGoogleLogin}
          disabled={this.state.isSigninInProgress}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    marginTop: 150,
  },
  subtitle: {
    fontSize: 24,
    marginVertical: 25,
  },
  button: {
    width: 192,
    height: 48,
    marginTop: 25,
  },
});
