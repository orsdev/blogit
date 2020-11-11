import actionTypes from '../type';

const initialState = {
  post: null
};

const singlePostReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_SINGLE_POST:
      return {
        ...state,
        post: action.payload.post
      };
    default:
      return state;
  }
};

export default singlePostReducer;
