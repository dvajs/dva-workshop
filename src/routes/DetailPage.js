import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import styles from './IndexPage.less';
import PostDetail from '../components/PostDetail';
import Nav from '../components/Nav';

function DetailPage({ dispatch, loading, post }) {

  function handleDelete() {
    dispatch({
      type: 'posts/deletePostRemote',
      payload: post.key,
    });
  }

  return (
    <div className={styles.normal}>
      <Nav />
      <PostDetail
        loading={loading}
        post={post}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default connect(({ posts }, ownProps) => {
  const key = ownProps.params.key;
  return {
    loading: posts.loading,
    post: { ...posts.postsByKey[key], key },
  };
})(DetailPage);
