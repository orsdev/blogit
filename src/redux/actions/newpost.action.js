import axios from '../../axios/axiosInstance';
import actionTypes from '../type';

export const uploadNewPost = (postData, config) => {
  return async (dispatch) => {
    try {
      let post = await axios.post('/post/create', postData, config);
      const { data } = post;
      if (data.response) {
        dispatch({
          type: actionTypes.UPLOAD_NEW_POST,
          payload: {
            response: data.response,
            error: null
          }
        });
      }
    } catch (e) {
      if ('response' in e && e.response) {
        dispatch({
          type: actionTypes.UPLOAD_NEW_POST,
          payload: {
            response: null,
            error: null
          }
        });

        if (e.response.data.status && e.response.data.error) {
          dispatch({
            type: actionTypes.UPLOAD_NEW_POST,
            payload: {
              response: null,
              error: e.response.data.error
            }
          });
        }
      } else {
        dispatch({
          type: actionTypes.UPLOAD_NEW_POST,
          payload: {
            response: null,
            error: 'Post upload failed. Please try again'
          }
        });
      }
    }
  };
};

export const clearOldNewPostStates = () => ({
  type: actionTypes.CLEAR_UPLOAD_NEW_POST
});
