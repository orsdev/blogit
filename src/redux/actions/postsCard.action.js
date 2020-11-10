import axios from '../../axios/axiosInstance';
import actionTypes from '../type';

export const getPosts = (url) => {
  return async (dispatch) => {
    dispatch({
      type: actionTypes.GET_POSTS,
      payload: {
        posts: null,
        error: null,
        loading: true
      }
    });

    try {
      let post = await axios.get(url);
      const { data } = post;
      if (data.response) {
        dispatch({
          type: actionTypes.GET_POSTS,
          payload: {
            posts: data.response,
            error: null,
            loading: false
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
              error: e.response.data.error,
              loading: true
            }
          });
        }
      } else {
        dispatch({
          type: actionTypes.GET_POSTS,
          payload: {
            posts: null,
            error:
              'Failed to get Posts! Please refresh your browser.',
            loading: true
          }
        });
      }
    }
  };
};

export default getPosts;
