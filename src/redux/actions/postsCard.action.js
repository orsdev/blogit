import axios from '../../axios/axiosInstance';
import actionTypes from '../type';

export const getPosts = () => {
  return async (dispatch) => {
    try {
      let post = await axios.get('/posts');
      const { data } = post;
      if (data.response) {
        dispatch({
          type: actionTypes.GET_POSTS,
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
            type: actionTypes.GET_POSTS,
            payload: {
              posts: null,
              error: e.response.data.error
            }
          });
        }
      } else {
        dispatch({
          type: actionTypes.GET_POSTS,
          payload: {
            posts: null,
            error: 'Failed to get Posts! Please refresh your browser.'
          }
        });
      }
    }
  };
};

export default getPosts;
