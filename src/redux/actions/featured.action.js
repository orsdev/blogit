import axios from '../../axios/axiosInstance';
import actionTypes from '../type';

export const getFeaturedPosts = () => {
  return async (dispatch) => {
    let post = await axios.get('/top-posts');
    const { data } = post;
    if (data.response) {
      dispatch({
        type: actionTypes.GET_FEATURED_POSTS,
        payload: {
          posts: data.response,
          error: null
        }
      });
    }
  };
};
