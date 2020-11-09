import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Alert, Skeleton } from 'antd';
import { getPosts } from '../redux/actions/postsCard.action';

function PostsCard({ posts, error, onGetPosts }) {
  useEffect(() => {
    onGetPosts();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {error ? (
        <div className="mx-auto mt-5">
          <Alert message={error} type="error" showIcon closable />
        </div>
      ) : null}
      <section className="blogCards py-3">
        {!error && posts && posts.length ? (
          <>
            <h5 className="blogCards-title p-2">Must Read</h5>
            {posts.map((post) => {
              return (
                <article key={post._id} className="blogCards-article">
                  <img src={post.coverImage} alt="Article Cover" />
                  <p className="blogCards-article-text mb-1">{post.body}</p>
                  <span className="blogCards-article-author">
                    {post.user.username} -
                  </span>
                  <span className="blogCards-article-date">
                    {new Date(post.createdAt).toDateString()}
                  </span>
                  <span className="blogCards-article-comment ml-3">
                    <b>
                      <i
                        className="fa fa-comment-o pr-1"
                        aria-hidden="true"></i>
                    </b>
                    <b>{post.comments.length}</b>
                  </span>
                </article>
              );
            })}
          </>
        ) : (
          <>
            <Skeleton active={true} loading={true}>
              <article className="blogCards-article">
                <p className="blogCards-article-text">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Nemo, ducimus...
                </p>
                <span className="blogCards-article-author">Timberly -</span>
                <span className="blogCards-article-date">
                  {new Date().toDateString()}
                </span>
                <span className="blogCards-article-view mx-4">
                  <i className="fa fa-eye pr-2" aria-hidden="true"></i>
                  <b>10</b>
                </span>
                <span className="blogCards-article-comment">
                  <i className="fa fa-comment-o pr-2" aria-hidden="true"></i>
                  <b>120</b>
                </span>
              </article>
            </Skeleton>
            <Skeleton active={true} loading={true}>
              <article className="blogCards-article">
                <p className="blogCards-article-text">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Nemo, ducimus...
                </p>
                <span className="blogCards-article-author">Timberly -</span>
                <span className="blogCards-article-date">
                  {new Date().toDateString()}
                </span>
                <span className="blogCards-article-view mx-4">
                  <i className="fa fa-eye pr-2" aria-hidden="true"></i>
                  <b>10</b>
                </span>
                <span className="blogCards-article-comment">
                  <i className="fa fa-comment-o pr-2" aria-hidden="true"></i>
                  <b>120</b>
                </span>
              </article>
            </Skeleton>
            <Skeleton active={true} loading={true}>
              <article className="blogCards-article">
                <p className="blogCards-article-text">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Nemo, ducimus...
                </p>
                <span className="blogCards-article-author">Timberly -</span>
                <span className="blogCards-article-date">
                  {new Date().toDateString()}
                </span>
                <span className="blogCards-article-view mx-4">
                  <i className="fa fa-eye pr-2" aria-hidden="true"></i>
                  <b>10</b>
                </span>
                <span className="blogCards-article-comment">
                  <i className="fa fa-comment-o pr-2" aria-hidden="true"></i>
                  <b>120</b>
                </span>
              </article>
            </Skeleton>
          </>
        )}
      </section>
    </>
  );
}

PostsCard.propTypes = {
  posts: PropTypes.any,
  error: PropTypes.any,
  onGetPosts: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  posts: state.postsCard.posts,
  error: state.postsCard.error
});

const mapDispatchToProps = (dispatch) => {
  return {
    onGetPosts: () => dispatch(getPosts())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsCard);
