import React from 'react';
import { Link } from 'react-router-dom';
import { Result } from 'antd';

function Page404() {
  return (
    <section className="page404">
      <Link to="/" className="logo">
        Blogit
      </Link>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Link to="/" className="btn btn-primary btn-lg py-3">
            Back Home
          </Link>
        }
      />
    </section>
  );
}

export default Page404;
