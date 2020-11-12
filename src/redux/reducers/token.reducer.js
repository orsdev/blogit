import actionTypes from '../type';

const tokenReducer = (state = null, action) => {
  switch (action.type) {
    case actionTypes.SET_TOKEN:
      return action.payload;
    case actionTypes.DELETE_TOKEN:
      return null;
    default:
      return state;
  }
};

export default tokenReducer;
