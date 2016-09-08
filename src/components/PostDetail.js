import React, { PropTypes } from 'react';
import styles from './PostDetail.less';
import { Spin, Button } from 'antd';

function PostDetail({ post, loading, onDelete }) {
  const { title, category, content } = post;
  return (
    <div className={styles.normal}>
      <Spin spinning={loading}>
        <div className={styles.title}>{title}</div>
        <div className={styles.category}>
          { category ? `Categories: ${category}` : '' }
        </div>
        <div className={styles.content}>
          {content}
        </div>
        <div className={styles.button}>
          <Button onClick={onDelete} type="dashed">Delete Post</Button>
        </div>
      </Spin>
    </div>
  );
}

PostDetail.propTypes = {
  post: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default PostDetail;
