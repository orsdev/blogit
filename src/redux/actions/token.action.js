import actionTypes from '../type';

export const setToken = (token) => ({
  type: actionTypes.SET_TOKEN,
  payload: token
});

export const deleteToken = () => ({
  type: actionTypes.DELETE_TOKEN
});
