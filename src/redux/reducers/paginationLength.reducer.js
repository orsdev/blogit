import actionTypes from '../type';

const initialState = {
  pagination: null,
  error: null
};

const paginationLength = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_PAGINATION_LENGTH:
      return {
        ...state,
        pagination: action.payload.pagination,
        error: action.payload.error
      };
    default:
      return state;
  }
};

export default paginationLength;
