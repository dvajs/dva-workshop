import pathToRegexp from 'path-to-regexp';
import { routerRedux } from 'dva/router';
import {
  fetchPosts,
  fetchPost,
  createPost,
  deletePost,
  watchPosts,
} from '../services/posts';

export default {
  namespace: 'posts',

  state: {
    loading: false,
    posts: [],
    postsByKey: {},
  },

  reducers: {
    showLoading(state) {
      return { ...state, loading: true };
    },

    hideLoading(state) {
      return { ...state, loading: false };
    },

    save(state, { payload: postsByKey }) {
      return { ...state, postsByKey, posts: Object.keys(postsByKey).reverse() };
    },

    ['delete'](state, { payload: key }) {
      const posts = state.posts.filter(postKey => {
        return postKey !== key;
      });
      return { ...state, posts };
    },

    update(state, { payload: post }) {
      const postsByKey = { ...state.postsByKey, [post.key]: post };
      return { ...state, postsByKey };
    },

    create(state, { payload: post }) {
      const posts = [ post.key, ...state.posts ];
      const postsByKey = { ...state.postsByKey, [post.key]: post };
      return { ...state, posts, postsByKey };
    },
  },

  effects: {
    *fetchPostsRemote(action, { put, call }) {
      yield put({ type: 'showLoading'});
      const result = yield call(fetchPosts);
      yield put({ type: 'save', payload: result });
      yield put({ type: 'hideLoading'});
    },

    *fetchPostRemote({ payload: key }, { put, call }) {
      yield put({ type: 'showLoading'});
      let result = yield call(fetchPost, key);
      yield put({ type: 'update', payload: { ...result, key } });
      yield put({ type: 'hideLoading'});
    },

    *deletePostRemote({ payload: key }, { put, call }) {
      yield put({ type: 'showLoading' });
      yield call(deletePost, key);
      yield put({ type: 'delete', payload: key });
      yield put({ type: 'hideLoading' });
      yield put(routerRedux.push('/'));
    },
  },

  subscriptions: {
    initialFetch({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname === '/') {
          dispatch({ type: 'fetchPostsRemote' });
        }
        const match = pathToRegexp(`/posts/:key?`).exec(pathname);
        if (match && match[1] !== 'new') {
          dispatch({ type: 'fetchPostRemote', payload: match[1] });
        }
      });
    },

    watchPosts({ dispatch }) {
      watchPosts(posts => {
        dispatch({ type: 'save', payload: posts });
      });
    },
  },
};
