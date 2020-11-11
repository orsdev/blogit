import actionTypes from '../type';

const initialState = {
  posts: null
};

const featuredReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_FEATURED_POSTS:
      return {
        ...state,
        posts: action.payload.posts
      };
    default:
      return state;
  }
};

export default featuredReducer;
