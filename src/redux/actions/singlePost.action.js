import axios from '../../axios/axiosInstance';
import actionTypes from '../type';

export const getSinglePost = (postID) => {
  return async (dispatch) => {
    try {
      let post = await axios.get(`/post/${postID}`);
      const { data } = post;
      if (data.response) {
        dispatch({
          type: actionTypes.GET_SINGLE_POST,
          payload: {
            post: data.response
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
