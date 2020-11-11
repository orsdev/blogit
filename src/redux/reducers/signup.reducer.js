import actionTypes from '../type';

const initialState = {
  token: null,
  error: null
};

const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SIGN_UP_USER:
      return {
        ...state,
        token: action.payload.token,
        error: action.payload.error
      };
    default:
      return state;
  }
};

export default signupReducer;
