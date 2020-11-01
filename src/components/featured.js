import { Skeleton } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import Nature from '../assets/images/nature.jpg';
import Mood from '../assets/images/mood.jpg';
import London from '../assets/images/london.jpg';

function Featured() {
  return (
    <section className="featured">
      <header className="featured-header px-2">
        <Skeleton active={true} loading={false}>
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
            <img
              src={Nature}
              alt="Article Cover"
              className="featured-header-article-cover my-3"
            />
            <p className="featured-header-article-text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam, ex
              voluptates repellat nihil, inventore praesentium a non
              reprehenderit, mollitia velit voluptatibus animi nostrum ab.
              Cupiditate voluptate repudiandae quas tenetur odio modi ducimus?
              Omnis maxime, beatae quas repellat distinctio quasi face...
            </p>
            <Link to="/post/:12334" className="btn btn-danger btn-lg rounded-0">
              Read More
            </Link>
          </article>
        </Skeleton>
        <aside className="featured-header-aside">
          <Skeleton active={true} loading={false}>
            <article className="featured-header-aside-card">
              <img src={Mood} alt="Article Cover" />
              <p className="feature-header-aside-card-text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo,
                ducimus...
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
          <Skeleton active={true} loading={false}>
            <article className="featured-header-aside-card">
              <img src={London} alt="Article Cover" />
              <p className="feature-header-aside-card-text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo,
                ducimus...
              </p>
              <span className="featured-header-aside-author">Donnie Yen -</span>
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
    </section>
  );
}

export default Featured;
