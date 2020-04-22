import {combineReducers} from 'redux';
import profileReducer from './reducers/profileReducer';

const rootReducer = combineReducers({
  profileReducer: profileReducer,
});

export default rootReducer;
