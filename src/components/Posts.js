import React, { PropTypes } from 'react';
import { Spin } from 'antd';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import styles from './Posts.less';
import PostItem from './PostItem';

function Posts({ loading, posts }) {
  return (
    <div>
      <h2 className={styles.title}>Posts</h2>
      <div className={styles.list}>
        <Spin spinning={loading}>
          <ReactCSSTransitionGroup
            transitionName="item"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}
          >
            { posts.map(post => <PostItem key={post.key} post={post} /> ) }
          </ReactCSSTransitionGroup>
        </Spin>
      </div>
    </div>
  );
}

Posts.propTypes = {
  loading: PropTypes.bool.isRequired,
  posts: PropTypes.array.isRequired,
};

export default Posts;
