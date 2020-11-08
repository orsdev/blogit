import actionTypes from '../type';

const initialState = {
user: null
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.payload
      };
    case actionTypes.REMOVE_USER:
      return {
        ...state,
         user: null
      };
    default:
      return state;
  }
};

export default userReducer;
