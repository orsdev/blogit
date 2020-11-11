import actionTypes from '../type';

export const setError = (error) => ({
  type: actionTypes.SET_ERROR,
  payload: error
});
