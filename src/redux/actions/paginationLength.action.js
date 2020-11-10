import axios from '../../axios/axiosInstance';
import actionTypes from '../type';

export const getPaginationLength = () => {
  return async (dispatch) => {
    try {
      let post = await axios.get('/total-posts');
      const { data } = post;
      if (data.response) {
        dispatch({
          type: actionTypes.GET_PAGINATION_LENGTH,
          payload: {
            pagination: data.response,
            error: null
          }
        });
      }
    } catch (e) {
      dispatch({
        type: actionTypes.GET_PAGINATION_LENGTH,
        payload: {
          pagination: null,
          error: 'Failed to get Posts! Please refresh your browser.'
        }
      });
    }
  };
};

export default getPaginationLength;
