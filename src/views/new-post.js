import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Upload, Button, Modal, Alert } from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';
import {
  clearOldNewPostStates,
  uploadNewPost
} from '../redux/actions/newpost.action';

function NewPost({
  user,
  token,
  error,
  postResponse,
  onUploadNewPost,
  onClearOldNewPostStates
}) {
  const [fileError, setFileError] = useState(null);
  const [file, setFile] = useState(null);
  const [localError, setLocalError] = useState(null);
  const [uploadSuccessfull, setUploadSuccessfull] = useState(false);
  const [disableButton, setDisableButton] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {}, []);

  useEffect(() => {
    if (error) {
      // update states
      setDisableButton(false);
      setButtonLoading(false);
    }
  }, [error]);

  useEffect(() => {
    // update states when post is successfull
    if (postResponse) {
      // update states
      setDisableButton(false);
      setButtonLoading(false);
      setLocalError(null);
      setUploadSuccessfull(true);

      // reset form
      form.resetFields();
    }
  }, [postResponse]);

  function onFinish(values) {
    // update states
    setDisableButton(true);
    setButtonLoading(true);

    if (!(user && token)) {
      setLocalError(null);
      setLocalError('You are not logged in.');
      return;
    }

    if (fileError) {
      // update states
      setDisableButton(false);
      setButtonLoading(false);
    }

    if (!fileError && file && user && token) {
      // update states
      setLocalError(null);

      const form = new FormData();
      form.append('image', file);

      const imgurConfig = {
        headers: {
          Authorization: process.env.REACT_APP_IMGUR_CLIENT_ID
        },
        timeOut: 15000 //15 secs
      };

      // upload image
      axios
        .post('https://api.imgur.com/3/image', form, imgurConfig)
        .then(function (res) {
          const {
            data: {
              data: { link }
            }
          } = res;

          const newPostConfig = {
            headers: {
              Authorization: `Bearer ${token}`
            }
          };

          const updatedValues = {
            ...values,
            coverImage: link,
            user: {
              username: user.username,
              userId: user._id
            }
          };

          // dispatch function
          onUploadNewPost(updatedValues, newPostConfig);
        })
        .catch(function (err) {
          // update states
          setDisableButton(false);
          setButtonLoading(false);
          setLocalError('Something went wrong, Please try again');
          setUploadSuccessfull(false);
        });
    }
  }

  function closeModal() {
    // update state
    setUploadSuccessfull(false);

    // dispatch function
    onClearOldNewPostStates();
  }

  return (
    <section className="new-post">
      <Link to="/" className="logo">
        Blogit
      </Link>
      <div className="new-post-body">
        <h3 className="display-4 text-center w-100">
          Create a New Post
        </h3>
        <Form name="nest-messages" form={form} onFinish={onFinish}>
          {uploadSuccessfull ? (
            <div className="mx-auto mb-4">
              <Modal
                className="new-post-modal"
                visible={uploadSuccessfull}
                onCancel={closeModal}
                cancelText="Close">
                <p>{postResponse}</p>
              </Modal>
            </div>
          ) : null}
          {error && typeof error === 'string' ? (
            <div className="signup-body-error mx-auto mb-4">
              <Alert message={error} type="error" showIcon />
            </div>
          ) : null}
          {localError ? (
            <div className="mx-auto mb-4">
              <Alert message={localError} type="error" showIcon />
            </div>
          ) : null}
          {fileError ? (
            <div className="mx-auto mb-4">
              <Alert message={fileError} type="error" showIcon />
            </div>
          ) : null}
          <Form.Item
            name="title"
            label="Title"
            rules={[
              {
                required: true,
                min: 6
              }
            ]}>
            <Input />
          </Form.Item>

          <Form.Item
            name="coverImage"
            label="Cover Image"
            valuePropName="file"
            rules={[
              {
                required: true
              }
            ]}
            extra="Image(file size - max 6mb)">
            <Upload
              accept="image/png, image/jpeg, image/svg"
              beforeUpload={(file) => {
                if (!/image/.test(file.type)) {
                  setFileError('Select an image file.');
                } else if (file.size > 5000000) {
                  setFileError('File size too large.');
                } else {
                  setFileError(null);
                  setFile(file);
                }
                return false;
              }}
              name="coverImage"
              listType="picture"
              multiple={false}>
              <Button>Click to upload</Button>
            </Upload>
          </Form.Item>

          <Form.Item
            name="body"
            label="Body"
            rules={[
              {
                required: true,
                min: 100
              }
            ]}>
            <Input.TextArea rows={10} />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              loading={buttonLoading}
              disabled={disableButton}>
              Submit
            </Button>
          </Form.Item>
          {error && Array.isArray(error) ? (
            <div className="mx-auto mt-4">
              <Alert
                message={error.map((value, index) => {
                  return (
                    <li
                      key={index}
                      className="h4 list-item text-danger py-1 d-flex">
                      <span className="font-weight-bold text-danger">
                        &#42;
                      </span>
                      {value}
                    </li>
                  );
                })}
                type="error"
              />
            </div>
          ) : null}
        </Form>
      </div>
    </section>
  );
}

NewPost.propTypes = {
  user: PropTypes.object,
  error: PropTypes.any,
  postResponse: PropTypes.string,
  token: PropTypes.string,
  onUploadNewPost: PropTypes.func.isRequired,
  onClearOldNewPostStates: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  token: state.token,
  user: state.user.user,
  error: state.newPost.error,
  postResponse: state.newPost.response
});

const mapDispatchToProps = (dispatch) => {
  return {
    onUploadNewPost: (postData, config) =>
      dispatch(uploadNewPost(postData, config)),
    onClearOldNewPostStates: () => dispatch(clearOldNewPostStates())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewPost);
