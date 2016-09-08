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
    // 任务 1 : 实现 showLoading 和 hideLoading
  },

  effects: {
    *submit({ payload: fields }, { call, put }) {
      // 任务 1 :
      // 1. showLoading
      // 2. 调用 createPost
      // 3. 触发 action posts/create 来保存数据到 state
      // 4. hideLoading
      // 5. 跳转到首页
    },
  }
}
