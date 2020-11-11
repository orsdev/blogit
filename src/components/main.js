import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import PostsCard from './postsCard';
import Featured from './featured';
import Pagination from './pagination';

function Main({ error, history }) {
  useEffect(() => {
    if (error) {
      history.replace('/500');
    }
    // eslint-disable-next-line
  }, [error]);

  return (
    <>
      <main className="main mb-5">
        <Featured />
        <PostsCard />
        <Pagination />
      </main>
    </>
  );
}

Main.propTypes = {
  error: PropTypes.any,
  history: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  error: state.error.globalError
});

export default connect(mapStateToProps)(withRouter(Main));
