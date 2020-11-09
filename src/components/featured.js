import React, { useEffect } from 'react';
import { Skeleton } from 'antd';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getFeaturedPosts } from '../redux/actions/featured.action';

function Featured({ posts, error, onGetFeaturedPosts }) {
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
              <>
                <article key={post._id} className="featured-header-article">
                  <h5 className="featured-header-article-title">
                    {post.title}
                  </h5>
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
                  <img
                    src={post.coverImage}
                    alt="Article Cover"
                    className="featured-header-article-cover my-3"
                  />
                  <p className="featured-header-article-text">{post.body}</p>
                  <Link
                    to="/post/:12334"
                    className="btn btn-danger btn-lg rounded-0">
                    Read More
                  </Link>
                </article>
              </>
            );
          })}
          <aside className="featured-header-aside">
            {posts.slice(1).map((post) => {
              return (
                <>
                  <article
                    key={post._id}
                    className="featured-header-aside-card">
                    <img src={post.coverImage} alt="Article Cover" />
                    <p className="feature-header-aside-card-text mt-1">
                      {post.body}
                    </p>
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
                  </article>
                </>
              );
            })}
          </aside>
        </header>
      ) : (
        <header className="featured-header px-2">
          <Skeleton active={true} loading={true}>
            <article className="featured-header-article">
              <h5 className="featured-header-article-title">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
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
                <i className="fa fa-comment-o pr-2" aria-hidden="true"></i>
                <b>12</b>
              </span>
              <p className="featured-header-article-text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam,
                ex voluptates repellat nihil, inventore praesentium a non
                reprehenderit, mollitia velit voluptatibus animi nostrum ab.
                Cupiditate voluptate repudiandae quas tenetur odio modi ducimus?
                Omnis maxime, beatae quas repellat distinctio quasi face...
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
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Nemo, ducimus...
                </p>
                <span className="featured-header-aside-author">Timberly -</span>
                <span className="featured-header-aside-date">
                  {new Date().toDateString()}
                </span>
                <span className="featured-header-aside-view mx-4">
                  <i className="fa fa-eye pr-2" aria-hidden="true"></i>
                  <b>10</b>
                </span>
                <span className="featured-header-aside-comment">
                  <i className="fa fa-comment-o pr-2" aria-hidden="true"></i>
                  <b>120</b>
                </span>
              </article>
            </Skeleton>
            <Skeleton active={true} loading={true}>
              <article className="featured-header-aside-card">
                <p className="feature-header-aside-card-text">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Nemo, ducimus...
                </p>
                <span className="featured-header-aside-author">
                  Donnie Yen -
                </span>
                <span className="featured-header-aside-date">
                  {new Date().toDateString()}
                </span>
                <span className="featured-header-aside-view mx-4">
                  <i className="fa fa-eye pr-2" aria-hidden="true"></i>
                  <b>2</b>
                </span>
                <span className="featured-header-aside-comment">
                  <i className="fa fa-comment-o pr-2" aria-hidden="true"></i>
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

const mapStateToProps = (state) => ({
  posts: state.featuredPosts.posts,
  error: state.featuredPosts.error
});

const mapDispatchToProps = (dispatch) => {
  return {
    onGetFeaturedPosts: () => dispatch(getFeaturedPosts())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Featured);
