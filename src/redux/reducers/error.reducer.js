import actionTypes from '../type';

const initialState = {
  globalError: null
};

const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_ERROR:
      return {
        ...state,
        globalError: action.payload
      };
    default:
      return state;
  }
};

export default errorReducer;
