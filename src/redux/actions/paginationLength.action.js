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
            pagination: data.response
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

export default getPaginationLength;
