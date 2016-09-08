import React, { PropTypes } from 'react';
import { Link } from 'dva/router';
import styles from './Nav.less';

function Nav() {
  return (
    <div className={styles.normal}>
      <div className={styles.left}>
        <Link to="/" className={styles.show} activeClassName={styles.hide}>Back To Index</Link>
      </div>
      <div className={styles.right}>
        <Link to="/posts/new" className={styles.show} activeClassName={styles.hide}>New Post</Link>
      </div>
    </div>
  );
}

export default Nav;
