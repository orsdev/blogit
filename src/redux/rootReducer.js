import { combineReducers } from 'redux';
import loginReducer from './reducers/login.reducer';
import userReducer from './reducers/user.reducer';
import featuredReducer from './reducers/featured.reducer';

const rootReducer = combineReducers({
  login: loginReducer,
  user: userReducer,
  featuredPosts: featuredReducer
});

export default rootReducer;
