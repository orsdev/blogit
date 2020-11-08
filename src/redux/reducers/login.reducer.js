import actionTypes from '../type';

const initialState = {
  token: null,
  error: null
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_USER:
      return {
        ...state,
        token: action.payload.token,
        error: action.payload.error
      };
    case actionTypes.LOGOUT_USER:
      return {
        ...state,
        token: null,
        error: null
      };
    default:
      return state;
  }
};

export default loginReducer;
