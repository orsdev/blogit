import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from '../axios/axiosInstance';
import {
  Modal,
  Comment,
  Form,
  Button,
  Input,
  Skeleton,
  Divider
} from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getSinglePost } from '../redux/actions/singlePost.action';

const { TextArea } = Input;

function SinglePost({
  match: {
    params: { id }
  },
  token,
  post,
  user,
  onGetSinglePost
}) {
  const [disableButton, setDisableButton] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);
  const [isCommented, setIsCommented] = useState(false);
  const [error, setError] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
    if (id) {
      onGetSinglePost(id);
    }
    // eslint-disable-next-line
  }, []);

  /* 
  get post again if user comment successfully
  */
  useEffect(() => {
    if (isCommented && id) {
      onGetSinglePost(id);

      // update state
      setIsCommented(false);
    }
    // eslint-disable-next-line
  }, [isCommented]);

  useEffect(() => {
    if (error) {
      setModalVisible(true);
    }

    // update states
    setDisableButton(false);
    setButtonLoading(false);
    // eslint-disable-next-line
  }, [error]);

  function closeModal() {
    // update states
    setModalVisible(false);
    setError(null);
  }

  function onFinish(values) {
    // update states
    setDisableButton(true);
    setButtonLoading(true);

    if (!(user && token)) {
      setError(null);
      setError('You are not logged in.');
    }

    if (user && token) {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };

      const body = JSON.stringify({
        ...values,
        postID: post._id
      });

      // post comment
      axios
        .post('/comment', body, config)
        .then(function (res) {
          // reset form
          form.resetFields();

          // update states
          setDisableButton(false);
          setButtonLoading(false);
          setIsCommented(true);
        })
        .catch(function (e) {
          // update states
          setDisableButton(false);
          setButtonLoading(false);

          if ('response' in e && e.response) {
            if (e.response.data.status && e.response.data.error) {
              // update states
              setError(e.response.data.error);
              setModalVisible(true);
            }
          }
        });
    }
  }

  return (
    <section className="singlePost">
      {error ? (
        <Modal
          className="single-post-modal"
          visible={modalVisible}
          onCancel={closeModal}
          onOK={false}>
          <p>{error}</p>
        </Modal>
      ) : null}
      <Link to="/" className="singlePost-logo">
        Blogit
      </Link>
      <div className="singlePost-body mx-auto">
        {post && !isCommented ? (
          <article className="singlePost-body-article">
            <h5 className="singlePost-body-article-topic font-weight-bold">
              {post.title}
            </h5>
            <img
              src={post.coverImage}
              alt="Article Cover"
              className="singlePost-body-article-cover d-block"
            />

            <span className="singlePost-body-article-date mr-1">
              Posted on - {new Date(post.createdAt).toDateString()}
            </span>
            <span className="singlePost-body-article-author text-danger">
              By {post.user.username}
            </span>
            <p className="singlePost-body-article-text">
              {post.body}
            </p>
          </article>
        ) : (
          <Skeleton active={true} loading={true}>
            <article className="singlePost-body-article">
              <h5 className="singlePost-body-article-topic font-weight-bold">
                Lorem, ipsum dolor sit amet consectetur adipisicing.
              </h5>
              <span className="singlePost-body-article-date mr-1">
                Posted on -{new Date().toDateString()}
              </span>
              <span className="singlePost-body-article-author text-danger">
                By Timberly
              </span>
              <p className="singlePost-body-article-text">
                Lorem, ipsum dolor sit amet consectetur adipisicing
                elit.
              </p>
            </article>
          </Skeleton>
        )}
      </div>
      <div className="singlePost-footer mx-auto">
        <div className="singlePost-footer-form">
          <Skeleton active={true} loading={post ? false : true}>
            <Form name="comment-form" form={form} onFinish={onFinish}>
              <Form.Item
                name="comment"
                rules={[
                  {
                    required: true
                  }
                ]}>
                <TextArea rows={6} />
              </Form.Item>
              <Form.Item>
                <Button
                  htmlType="submit"
                  loading={buttonLoading}
                  disabled={disableButton}
                  type="primary">
                  Add Comment
                </Button>
              </Form.Item>
            </Form>
          </Skeleton>
        </div>
        <div className="singlePost-footer-comments">
          <h2 className="display-4 mt-5">
            Comments
            {post ? (
              <b className="ml-1">({post.comments.length})</b>
            ) : (
              ''
            )}
          </h2>
          <Divider />
          <Skeleton active={true} loading={post ? false : true}>
            {post &&
              post.comments.map((comment, index) => {
                return (
                  <Comment
                    key={`${post._id}${index}${post.createdAt}`}
                    author={
                      <h4 className="h4 font-weight-bold">
                        {comment.username}
                      </h4>
                    }
                    content={
                      <>
                        <p>{comment.body}</p>
                        <Divider />
                      </>
                    }
                    datetime={
                      <span className="singlePost-footer-comments-date font-weight-bold">
                        {new Date(comment.createdAt).toDateString()}
                      </span>
                    }
                  />
                );
              })}
          </Skeleton>
        </div>
      </div>
    </section>
  );
}

SinglePost.propTypes = {
  posts: PropTypes.object,
  user: PropTypes.object,
  token: PropTypes.string,
  onGetSinglePost: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  post: state.singlePost.post,
  token: state.token,
  user: state.user.user
});

const mapDispatchToProps = (dispatch) => {
  return {
    onGetSinglePost: (id) => dispatch(getSinglePost(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SinglePost);
