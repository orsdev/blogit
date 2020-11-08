import { combineReducers } from 'redux';
import loginReducer from './reducers/login.reducer';
import userReducer from './reducers/user.reducer';

const rootReducer = combineReducers({ login: loginReducer, user: userReducer });

export default rootReducer;
