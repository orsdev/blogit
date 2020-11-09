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
            posts: data.response,
            error: null
          }
        });
      }
    } catch (e) {
      if ('response' in e && e.response) {
        if (e.response.data.status && e.response.data.error) {
          dispatch({
            type: actionTypes.GET_FEATURED_POSTS,
            payload: {
              posts: null,
              error: e.response.data.error
            }
          });
        }
      } else {
        dispatch({
          type: actionTypes.GET_FEATURED_POSTS,
          payload: {
            posts: null,
            error: 'Failed to get Posts! Try again.'
          }
        });
      }
    }
  };
};
