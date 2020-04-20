import React, { useState, useEffect, createContext } from 'react';

import {View, Text} from 'react-native';

import auth from '@react-native-firebase/auth';
import SignInStack from './signInStack';
import SignOutStack from './signOutStack';
import AppStack from '../navigation/appStack';

export const AuthContext = createContext(null);
export default function AuthNavigator() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);

  // Handle user state changes
  function onAuthStateChanged(result) {
    setUser(result);
    if (initializing) {
      setInitializing(false);
    }
  }

  useEffect(() => {
    const authSubscriber = auth().onAuthStateChanged(onAuthStateChanged);

    // unsubscribe on unmount
    return authSubscriber;
  }, []);

  if (initializing) {
    return null;
  }
  return user ? <AppStack /> : <SignOutStack />;
}
