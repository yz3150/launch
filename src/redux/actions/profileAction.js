import firestore from '@react-native-firebase/firestore';
export const createProfile = (profile) => {
  return (dispatch, getState) => {
    firestore().collection('profiles').add({
      ...profile,
      createdAt: new Date(),
  }).then(() => {dispatch({ type: 'CREATE_PROFILE', profile});
}).catch((err) => {dispatch({type: 'CREATE_PROFILE_ERROR', err});
})
  }
}