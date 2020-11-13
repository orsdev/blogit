import { combineReducers } from 'redux';
import loginReducer from './reducers/login.reducer';
import signupReducer from './reducers/signup.reducer';
import userReducer from './reducers/user.reducer';
import tokenReducer from './reducers/token.reducer';
import featuredReducer from './reducers/featured.reducer';
import postsCardReducer from './reducers/postsCard.reducer';
import singlePostReducer from './reducers/singlePost.reducer';
import newPostReducer from './reducers/newpost.reducer';
import paginationLengthReducer from './reducers/paginationLength.reducer';
import errorReducer from './reducers/error.reducer';

const rootReducer = combineReducers({
  login: loginReducer,
  signup: signupReducer,
  token: tokenReducer,
  user: userReducer,
  featuredPosts: featuredReducer,
  postsCard: postsCardReducer,
  singlePost: singlePostReducer,
  newPost: newPostReducer,
  paginationLength: paginationLengthReducer,
  error: errorReducer
});

export default rootReducer;
