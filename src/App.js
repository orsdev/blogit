import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Router from './router/router';
import './assets/css/style.css';
import 'antd/dist/antd.css';

function App({ error, history }) {
  useEffect(() => {
    if (error) {
      history.replace('/500');
    }
    // eslint-disable-next-line
  }, [error]);

  return (
    <>
      <Router />
    </>
  );
}

App.propTypes = {
  error: PropTypes.any,
  history: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  error: state.error.globalError
});

export default connect(mapStateToProps)(withRouter(App));
