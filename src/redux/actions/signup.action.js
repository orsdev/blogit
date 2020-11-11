import axios from '../../axios/axiosInstance';
import actionTypes from '../type';

export const signup = (userData) => {
  return async (dispatch) => {
    try {
      let user = await axios.post('/join', JSON.stringify(userData));

      const { data } = user;
      if (data.response) {
        dispatch({
          type: actionTypes.SIGN_UP_USER,
          payload: {
            token: data.response,
            error: null
          }
        });
      }
    } catch (e) {
      if ('response' in e && e.response) {
        dispatch({
          type: actionTypes.SIGN_UP_USER,
          payload: {
            token: null,
            error: null
          }
        });

        if (e.response.data.status && e.response.data.error) {
          dispatch({
            type: actionTypes.SIGN_UP_USER,
            payload: {
              token: null,
              error: e.response.data.error
            }
          });
        }
      } else {
        dispatch({
          type: actionTypes.SIGN_UP_USER,
          payload: {
            token: null,
            error: 'Something went wrong! Please login again.'
          }
        });
      }
    }
  };
};
