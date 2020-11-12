import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Result } from 'antd';
import PropTypes from 'prop-types';

function Page500({ error, history }) {
  useEffect(() => {
    if (!error) {
      history.replace('/');
    }
    // eslint-disable-next-line
  }, []);

  return (
    <section className="page500">
      <h5 className="logo">Blogit</h5>
      <Result
        status="500"
        title="500"
        subTitle="Something went wrong. Please refresh your browser."
      />
    </section>
  );
}

Page500.propTypes = {
  error: PropTypes.any,
  history: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  error: state.error.globalError
});

export default connect(mapStateToProps)(Page500);
