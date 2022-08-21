# 使用 Profiler 调试 React 页面应用

## 关于

该项目为这篇[博客](https://lorem314blog.gtsb.io/blog/%E4%BD%BF%E7%94%A8Profiler%E8%B0%83%E8%AF%95React%E5%BA%94%E7%94%A8/)的对应项目，讲解如何使用 Profiler 调试 React 页面程序，并使用 `React.memo` 和 `React.useCallback` 优化渲染性能。

## 如何使用

`unoptimized` 分支为完成了基本项目，没有优化的版本。

`optimized` 分支为优化后的版本。

- 执行 npm start 打开页面。
- 点击获取用户按钮，下方会显示 100 个用户。
- 开启 Profiler。
- 点击若干个用户的关注按钮，文字会从由关注变为取消关注，说明关注成功。
- 停止 Profiler 查看渲染结果。

## 结果

分别在两个分支上打开项目，执行上述过程查看渲染性能结果。

**未优化**的版本的 App 组件平均渲染用时在 `20ms` 左右。

**优化后**的版本的 App 组件平均渲染用时在 `5ms` 左右。

## 目录结构

```text
[project-folder]
├─ node_modules
├─ public
├─ src
│  ├─ components
│  │  ├─ api.js
│  │  ├─ FollowButton.jsx
│  │  ├─ User.jsx
│  │  └─ UserList.jsx
│  ├─ App.css
│  ├─ App.jsx
│  ├─ App.test.js
│  ├─ index.css
│  ├─ index.js
│  ├─ logo.svg
│  ├─ reportWebVital.js
│  └─ setupTests.js
├─ .gitignore
├─ package-lock.json
├─ package.json
└─ README.md
```
