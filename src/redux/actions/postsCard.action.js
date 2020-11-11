import axios from '../../axios/axiosInstance';
import actionTypes from '../type';

export const getPosts = (url) => {
  return async (dispatch) => {
    dispatch({
      type: actionTypes.GET_POSTS,
      payload: {
        posts: null,
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
            loading: false
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

export default getPosts;
