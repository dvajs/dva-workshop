import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import styles from './IndexPage.less';
import CreatePost from '../components/CreatePost';
import Nav from '../components/Nav';

function CreatePage({ loading, dispatch }) {

  function handleSubmit(fields) {
    dispatch({ type: 'createPost/submit', payload: fields });
  }

  return (
    <div className={styles.normal}>
      <Nav />
      <CreatePost
        loading={loading}
        onSubmit={handleSubmit}
      />
    </div>
  );
}

export default connect(({ createPost }) => ({
  loading: createPost.loading,
}))(CreatePage);
