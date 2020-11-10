import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getPosts } from '../redux/actions/postsCard.action';
import { getPaginationLength } from '../redux/actions/paginationLength.action';

function Pagination({
  pagination,
  onGetPosts,
  onGetPaginationLength
}) {
  const [queryValue, setQueryValue] = useState(1);
  const [paginationValue, setPaginationValue] = useState(0);
  const previousQueryValue = useRef(queryValue);
  const [url, setUrl] = useState(`/posts?page=${queryValue}`);

  useEffect(() => {
    onGetPaginationLength();
  }, []);

  useEffect(() => {
    setPaginationValue(pagination);
  }, [pagination]);

  useEffect(() => {
    setUrl(`/posts?page=${queryValue}`);
  }, [queryValue]);

  useEffect(() => {
    if (previousQueryValue.current !== queryValue) {
      // call dispatch function
      onGetPosts(url);
    }
  }, [url]);

  function getPreviousPage() {
    if (queryValue !== 1) {
      setQueryValue(queryValue - 1);
      previousQueryValue.current = queryValue;
    }
  }

  function getNextPage() {
    if (paginationValue > queryValue) {
      setQueryValue(queryValue + 1);
      previousQueryValue.current = queryValue;
    }
  }

  return (
    <nav aria-label="Page navigation" className="mt-5">
      <ul className="pagination d-flex justify-content-between">
        <li
          className={
            queryValue === 1
              ? `page-item disabled btn`
              : `page-item btn`
          }
          onClick={getPreviousPage}>
          <span aria-hidden="true">&laquo;</span>
          <span className="ml-1 page-link d-inline-block">
            Previous
          </span>
        </li>
        <li
          className={
            queryValue === paginationValue
              ? `page-item disabled btn`
              : `page-item btn`
          }
          onClick={getNextPage}>
          <span className="mr-1 page-link d-inline-block">Next</span>
          <span aria-hidden="true">&raquo;</span>
        </li>
      </ul>
    </nav>
  );
}

Pagination.propTypes = {
  pagination: PropTypes.any,
  error: PropTypes.any,
  onGetPosts: PropTypes.func.isRequired,
  onGetPaginationLength: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  posts: state.postsCard.posts,
  error: state.postsCard.error,
  pagination: state.paginationLength.pagination
});

const mapDispatchToProps = (dispatch) => {
  return {
    onGetPosts: (url) => dispatch(getPosts(url)),
    onGetPaginationLength: () => dispatch(getPaginationLength())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pagination);
