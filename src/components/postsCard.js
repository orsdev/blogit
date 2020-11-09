import React from 'react';
import Ilya from '../assets/images/ilya.jpg';
import Moped from '../assets/images/moped.jpg';
import Justin from '../assets/images/justin.jpg';
import Bruno from '../assets/images/bruno.jpg';

function postsCard() {
  return (
    <section className="blogCards py-3">
      <h5 className="blogCards-title p-2">Must Read</h5>
      <article className="blogCards-article">
        <img src={Ilya} alt="Article Cover" />
        <p className="blogCards-article-text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo,
          ducimus...
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
      <article className="blogCards-article">
        <img src={Moped} alt="Article Cover" />
        <p className="blogCards-article-text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo,
          ducimus...
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
      <article className="blogCards-article">
        <img src={Justin} alt="Article Cover" />
        <p className="blogCards-article-text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo,
          ducimus...
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
      <article className="blogCards-article">
        <img src={Bruno} alt="Article Cover" />
        <p className="blogCards-article-text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo,
          ducimus...
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
      <article className="blogCards-article">
        <img src={Ilya} alt="Article Cover" />
        <p className="blogCards-article-text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo,
          ducimus...
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
      <article className="blogCards-article">
        <img src={Moped} alt="Article Cover" />
        <p className="blogCards-article-text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo,
          ducimus...
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
      <article className="blogCards-article">
        <img src={Justin} alt="Article Cover" />
        <p className="blogCards-article-text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo,
          ducimus...
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
      <article className="blogCards-article">
        <img src={Bruno} alt="Article Cover" />
        <p className="blogCards-article-text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo,
          ducimus...
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
    </section>
  );
}

export default postsCard;
