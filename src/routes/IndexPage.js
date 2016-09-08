import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import styles from './IndexPage.less';
import Posts from '../components/Posts';
import Nav from '../components/Nav';

function IndexPage({ loading, posts }) {
  return (
    <div className={styles.normal}>
      <Nav />
      <Posts
        loading={loading}
        posts={posts}
      />
    </div>
  );
}

export default connect(({ posts }) => ({
  loading: posts.loading,
  posts: posts.posts.map(key => ({ ...posts.postsByKey[key], key }))
}))(IndexPage);
