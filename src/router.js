import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute, Link } from 'dva/router';
import IndexPage from './routes/IndexPage';
import DetailPage from './routes/DetailPage';
import CreatePage from './routes/CreatePage';

export default function({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage} />
      <Route path="/posts/new" component={CreatePage} />
      <Route path="/posts/:key" component={DetailPage} />
    </Router>
  );
};
