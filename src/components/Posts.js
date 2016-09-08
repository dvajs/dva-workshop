import React, { PropTypes } from 'react';
import { Spin } from 'antd';
import styles from './Posts.less';
import PostItem from './PostItem';

function Posts({ loading, posts }) {
  return (
    <div>
      <h2 className={styles.title}>Posts</h2>
      <div className={styles.list}>
        <Spin spinning={loading}>
          { posts.map(post => <PostItem key={post.key} post={post} /> ) }
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
