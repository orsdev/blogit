import actionTypes from '../type';

export const setUser = (user) => ({
  type: actionTypes.SET_USER,
  payload: user
});

export const removeUser = (user) => ({
  type: actionTypes.REMOVE_USER
});
