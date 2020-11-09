import actionTypes from '../type';

const initialState = {
  posts: null,
  error: null
};

const postsCardReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_POSTS:
      return {
        ...state,
        posts: action.payload.posts,
        error: action.payload.error
      };
    default:
      return state;
  }
};

export default postsCardReducer;
