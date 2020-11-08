import axios from '../../axios/axiosInstance';
import actionTypes from '../type';

export const login = (userData) => {
  return async (dispatch) => {
    try {
      let user = await axios.post(
        'http://localhost:5000/login',
        JSON.stringify(userData)
      );

      const { data } = user;
      if (data.response) {
        dispatch({
          type: actionTypes.LOGIN_USER,
          payload: {
            token: data.response,
            error: null
          }
        });
      }
    } catch (e) {
      if ('response' in e && e.response) {
        if (e.response.data.status && e.response.data.error) {
          dispatch({
            type: actionTypes.LOGIN_USER,
            payload: {
              token: null,
              error: e.response.data.error
            }
          });
        }
      } else {
        dispatch({
          type: actionTypes.LOGIN_USER,
          payload: {
            token: null,
            error: 'Something went wrong! Please login again.'
          }
        });
      }
    }
  };
};
