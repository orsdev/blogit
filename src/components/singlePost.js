import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Comment, Form, Button, Input } from 'antd';
import Mood from '../assets/images/mood.jpg';

const { TextArea } = Input;

function SinglePost() {
  const [submitting, setSubmitting] = useState(false);
  const [postComments, setPostComments] = useState(null);

  function onFinish(values) {
    setSubmitting(true);
  }

  return (
    <section className="singlePost">
      <Link exact to="/" className="singlePost-logo">
        Blogit
      </Link>
      <div className="singlePost-body mx-auto">
        <article className="singlePost-body-article">
          <h5 className="singlePost-body-article-topic font-weight-bold">
            Lorem, ipsum dolor sit amet consectetur adipisicing.
          </h5>
          <span className="singlePost-body-article-date">
            {' '}
            Posted on -{new Date().toDateString()}
          </span>
          <span className="singlePost-body-article-author"> By Timberly</span>
          <span className="singlePost-body-articlee-view mx-4">
            <i className="fa fa-eye pr-2" aria-hidden="true"></i>
            <b>10</b>
          </span>
          <img
            src={Mood}
            alt="Article Cover"
            className="singlePost-body-article-cover"
          />
          <p className="singlePost-body-article-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores
            quae autem quibusdam? Numquam esse laudantium ipsam voluptatibus
            totam sint id distinctio, et quas repellendus ex deleniti alias eos,
            ipsum recusandae voluptates aut natus dicta asperiores ad illo quos
            est quibusdam ratione! Iste consequuntur quod aliquam, neque quidem
            doloremque at praesentium nobis placeat doloribus illum molestias
            tempora reprehenderit provident rem dignissimos mollitia cumque
            laudantium vitae nulla! Fugit, omnis mollitia esse repellat itaque
            reprehenderit perferendis sed et qui. Nesciunt fuga consectetur
            provident iste quaerat porro odio rerum consequatur laboriosam
            expedita voluptas blanditiis, voluptatibus unde quisquam. Amet,
            ipsam, ut qui, placeat quo blanditiis molestiae odit dignissimos
            mollitia accusantium dolores asperiores eveniet alias corporis atque
            explicabo omnis? Exercitationem, iste id. Fugit quaerat atque
            sapiente dolor incidunt quis quo a aliquam doloribus officiis
            aspernatur quos repellendus iusto architecto ex consectetur unde,
            ipsam voluptas delectus, debitis similique, sunt doloremque
            voluptatibus! Esse vitae doloremque facere quam tempora.
          </p>
        </article>
      </div>
      <div className="singlePost-footer mx-auto">
        <div className="singlePost-footer-form">
          <Form name="comment-form" onFinish={onFinish}>
            <Form.Item
              name="comment"
              rules={[
                {
                  required: true,
                },
              ]}>
              <TextArea rows={6} />
            </Form.Item>
            <Form.Item>
              <Button
                htmlType="submit"
                loading={submitting}
                // onClick={handleSubmit}
                type="primary">
                Add Comment
              </Button>
            </Form.Item>
          </Form>
        </div>
        <div className="singlePost-footer-comments">
          <Comment
            author={<h4 className="h4 font-weight-bold">Han Solo </h4>}
            content={
              <p>
                We supply a series of design principles, practical patterns and
                high quality design resources (Sketch and Axure), to help people
                create their product prototypes beautifully and efficiently.
              </p>
            }
            datetime={
              <span className="singlePost-footer-comments-date font-weight-bold">
                {new Date().toDateString()}
              </span>
            }
          />
          <Comment
            author={<h4 className="h4 font-weight-bold">Han Solo </h4>}
            content={
              <p>
                We supply a series of design principles, practical patterns and
                high quality design resources (Sketch and Axure), to help people
                create their product prototypes beautifully and efficiently.
              </p>
            }
            datetime={
              <span className="singlePost-footer-comments-date font-weight-bold">
                {new Date().toDateString()}
              </span>
            }
          />
        </div>
      </div>
    </section>
  );
}

export default SinglePost;
