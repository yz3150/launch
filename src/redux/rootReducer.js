import {combineReducers} from 'redux';
import posts from './reducers/posts';

const rootReducer = combineReducers({
  posts: posts,
});

export default rootReducer;
