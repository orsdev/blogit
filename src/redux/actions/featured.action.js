import axios from '../../axios/axiosInstance';
import actionTypes from '../type';

export const getFeaturedPosts = () => {
  return async (dispatch) => {
    try {
      let post = await axios.get('/top-posts');
      const { data } = post;
      if (data.response) {
        dispatch({
          type: actionTypes.GET_FEATURED_POSTS,
          payload: {
            posts: data.response
          }
        });
      }
    } catch (e) {
      dispatch({
        type: actionTypes.SET_ERROR,
        payload: 'Failed to get Posts! Please refresh your browser.'
      });
    }
  };
};
