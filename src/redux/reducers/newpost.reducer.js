import actionTypes from '../type';

const initialState = {
  response: null,
  error: null
};

const newPostReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPLOAD_NEW_POST:
      return {
        ...state,
        response: action.payload.response,
        error: action.payload.error
      };
    case actionTypes.CLEAR_UPLOAD_NEW_POST:
      return {
        ...state,
        response: null,
        error: null
      };
    default:
      return state;
  }
};

export default newPostReducer;
