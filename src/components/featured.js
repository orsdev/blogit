import React, { useEffect } from 'react';
import { Skeleton, Divider } from 'antd';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getFeaturedPosts } from '../redux/actions/featured.action';

function Featured({ posts, onGetFeaturedPosts }) {
  useEffect(() => {
    onGetFeaturedPosts();
    // eslint-disable-next-line
  }, []);

  return (
    <section className="featured">
      {posts && posts.length ? (
        <header className="featured-header px-2">
          {posts.slice(0, 1).map((post) => {
            return (
              <article
                key={post._id}
                className="featured-header-article">
                <h6 className="featured-header-article-title mb-1">
                  {post.title}
                </h6>
                <div className="mt-0 py-0">
                  <span className="featured-header-article-author">
                    {post.user.username} -
                  </span>
                  <span className="featured-header-article-date">
                    {new Date(post.createdAt).toDateString()}
                  </span>
                  <span className="featured-header-article-comment ml-3">
                    <b>
                      <i
                        className="fa fa-comment-o pr-1"
                        aria-hidden="true"></i>
                    </b>
                    <b>{post.comments.length}</b>
                  </span>
                </div>
                <img
                  src={post.coverImage}
                  alt="Article Cover"
                  className="featured-header-article-cover my-3"
                />
                <p className="featured-header-article-text">
                  {`${post.body.substring(0, 100)}...`}
                </p>
                <Link
                  to={`/post/${post._id}`}
                  className="btn btn-danger btn-lg rounded-0">
                  Read More
                </Link>
              </article>
            );
          })}
          <aside className="featured-header-aside">
            {posts.slice(1).map((post) => {
              return (
                <article
                  key={post._id}
                  className="featured-header-aside-card">
                  <h6 className="featured-header-aside-title mb-3">
                    {post.title}
                  </h6>
                  <img
                    src={post.coverImage}
                    alt="Article Cover"
                    className="d-block"
                  />
                  <span className="featured-header-article-author">
                    {post.user.username} -
                  </span>
                  <span className="featured-header-article-date">
                    {new Date(post.createdAt).toDateString()}
                  </span>
                  <span className="featured-header-article-comment ml-3">
                    <b>
                      <i
                        className="fa fa-comment-o pr-1"
                        aria-hidden="true"></i>
                    </b>
                    <b>{post.comments.length}</b>
                  </span>
                  <p className="feature-header-aside-card-text mt-1">
                    {`${post.body.substring(0, 100)}...`}
                  </p>
                  <Link
                    to={`/post/${post._id}`}
                    className="btn btn-lg rounded-0 mx-0 px-0 text-danger">
                    Read More
                  </Link>
                  <Divider />
                </article>
              );
            })}
          </aside>
        </header>
      ) : (
        <header className="featured-header px-2">
          <Skeleton active={true} loading={true}>
            <article className="featured-header-article">
              <h5 className="featured-header-article-title">
                Lorem ipsum dolor sit amet consectetur adipisicing
                elit.
              </h5>
              <span className="featured-header-article-author">
                Enola Holmes -
              </span>
              <span className="featured-header-article-date">
                {new Date().toDateString()}
              </span>
              <span className="featured-header-article-view mx-4">
                <i className="fa fa-eye pr-2" aria-hidden="true"></i>
                <b>32</b>
              </span>
              <span className="featured-header-article-comment">
                <i
                  className="fa fa-comment-o pr-2"
                  aria-hidden="true"></i>
                <b>12</b>
              </span>
              <p className="featured-header-article-text">
                Lorem ipsum dolor sit amet consectetur, adipisicing
                elit. Quam, ex voluptates repellat nihil, inventore
                praesentium a non reprehenderit, mollitia velit
                voluptatibus animi nostrum ab. Cupiditate voluptate
                repudiandae quas tenetur odio modi ducimus? Omnis
                maxime, beatae quas repellat distinctio quasi face...
              </p>
              <Link
                to="/post/:12334"
                className="btn btn-danger btn-lg rounded-0">
                Read More
              </Link>
            </article>
          </Skeleton>
          <aside className="featured-header-aside">
            <Skeleton active={true} loading={true}>
              <article className="featured-header-aside-card">
                <p className="feature-header-aside-card-text">
                  Lorem ipsum dolor sit, amet consectetur adipisicing
                  elit. Nemo, ducimus...
                </p>
                <span className="featured-header-aside-author">
                  Timberly -
                </span>
                <span className="featured-header-aside-date">
                  {new Date().toDateString()}
                </span>
                <span className="featured-header-aside-view mx-4">
                  <i
                    className="fa fa-eye pr-2"
                    aria-hidden="true"></i>
                  <b>10</b>
                </span>
                <span className="featured-header-aside-comment">
                  <i
                    className="fa fa-comment-o pr-2"
                    aria-hidden="true"></i>
                  <b>120</b>
                </span>
              </article>
            </Skeleton>
            <Skeleton active={true} loading={true}>
              <article className="featured-header-aside-card">
                <p className="feature-header-aside-card-text">
                  Lorem ipsum dolor sit, amet consectetur adipisicing
                  elit. Nemo, ducimus...
                </p>
                <span className="featured-header-aside-author">
                  Donnie Yen -
                </span>
                <span className="featured-header-aside-date">
                  {new Date().toDateString()}
                </span>
                <span className="featured-header-aside-view mx-4">
                  <i
                    className="fa fa-eye pr-2"
                    aria-hidden="true"></i>
                  <b>2</b>
                </span>
                <span className="featured-header-aside-comment">
                  <i
                    className="fa fa-comment-o pr-2"
                    aria-hidden="true"></i>
                  <b>1</b>
                </span>
              </article>
            </Skeleton>
          </aside>
        </header>
      )}
    </section>
  );
}

Featured.propTypes = {
  posts: PropTypes.any,
  onGetFeaturedPosts: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  posts: state.featuredPosts.posts
});

const mapDispatchToProps = (dispatch) => {
  return {
    onGetFeaturedPosts: () => dispatch(getFeaturedPosts())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Featured);
