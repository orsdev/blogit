import actionTypes from '../type';

const initialState = {
  pagination: null
};

const paginationLength = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_PAGINATION_LENGTH:
      return {
        ...state,
        pagination: action.payload.pagination
      };
    default:
      return state;
  }
};

export default paginationLength;
