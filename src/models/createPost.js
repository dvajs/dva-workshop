import { routerRedux } from 'dva/router';
import {
  createPost
} from '../services/posts';

export default {
  namespace: 'createPost',

  state: {
    loading: false,
  },

  reducers: {
    showLoading(state) {
      return { ...state, loading: true };
    },

    hideLoading(state) {
      return { ...state, loading: false };
    },
  },

  effects: {
    *submit({ payload: fields }, { call, put }) {
      yield put({ type: 'showLoading' });
      const key = yield call(createPost, fields);
      yield put({ type: 'posts/update', payload: { ...fields, key } });
      yield put({ type: 'hideLoading' });
      yield put(routerRedux.push('/'));
    },
  }
}
