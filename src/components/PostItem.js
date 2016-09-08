import React, { PropTypes } from 'react';
import { Link } from 'dva/router';
import styles from './PostItem.less';

function PostItem({ post }) {
  const { title, category, key } = post;
  return (
    <div className={styles.normal}>
      <div className={styles.title}><Link to={`/posts/${key}`}>{title}</Link></div>
      <div className={styles.category}>Categories: {category}</div>
    </div>
  );
}

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
};

export default PostItem;
