import { combineReducers } from 'redux';
import loginReducer from './reducers/login.reducer';
import userReducer from './reducers/user.reducer';
import featuredReducer from './reducers/featured.reducer';
import postsCardReducer from './reducers/postsCard.reducer';

const rootReducer = combineReducers({
  login: loginReducer,
  user: userReducer,
  featuredPosts: featuredReducer,
  postsCard: postsCardReducer
});

export default rootReducer;
