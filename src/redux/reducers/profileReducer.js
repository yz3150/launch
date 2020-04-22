const initialState = {};
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_PROFILE':
      console.log('created profile', action.profile);
      return state;
    case 'CREATE_PROFILE_ERROR':
      console.log('create profile error', action.err);
      return state;
    default:
      return state;
  }
}

export default profileReducer;
