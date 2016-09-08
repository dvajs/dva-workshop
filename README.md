# dva-workshop

## Getting started

```bash
$ git clone https://github.com/dvajs/dva-workshop.git
$ cd dva-workshop
$ npm install
$ npm start
$ open http://127.0.0.1:8989
```

## Tasks

**任务1：编辑 `./src/models/createPost.js`，完成 [Create Page](http://localhost:8989/#/posts/new) 功能**

提示：

1. 在 reducers 里实现 showLoading 和 hideLoading
2. 实现 effect `submit`，[Effect 示例](https://github.com/dvajs/dva-knowledgemap#effect)

**任务2：编辑 `./src/models/posts.js`，实现 Detail Page 的数据是从服务器加载最新的**

提示：

1. 在 subscriptions 部分满足条件后触发 action
2. 实现 effect `fetchPostRemote`

**任务3：编辑 `./src/models/posts.js`，通过 `watchPosts` 实现列表实时刷新**

提示：

1. 在 subscription 里处理
2. `加分` 通过 `react-addons-css-transition-group`，实现新增 Post 的动画效果

**额外任务：通过 [dva-loading](https://github.com/dvajs/dva-loading) 简化数据结构，并删除 showLoading 和 hideLoading 操作**

提示：

1. 删除 state、reducers 和 effects 里和 loading 相关的所有逻辑
2. 修改 `connect` 方法绑定的 loading 数据来源

## License

MIT
