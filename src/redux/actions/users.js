// import _ from 'lodash';
// import firebase from '@react-native-firebase/app';

// export const setPersonData = (userInfo) => {
//   return {
//     type: "setPersonData",
//     value: userInfo
//   };
// };

// export const watchPersonData = () => {
//   return function(dispatch) {
//     firebase.database().ref('users').doc(userInfo.user.id)
//     .on("value", function(snapshot)
//     { 
//         var userInfo = snapshot.val();
//         var actionSetPersonData = setPersonData(userInfo);
//         dispatch(actionSetPersonData);
//     }, function(error) { console.log(error); });
//     }
//   }