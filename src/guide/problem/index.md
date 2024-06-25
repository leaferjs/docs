# 常见问题

### 更新版本之后报错

leafer-ui 及官方插件包需要同时更新版本。

如出现旧版本缓存冲突导致的报错，需要删除 lock 文件重新安装一下。

### 页面布局卡顿、某些方法调用不了

检查是否有将 leafer 或元素实例绑定了到前端框架的响应式数据，会造成大量的数据代理、覆盖方法，并拖慢布局速度。

### 小程序构建 npm 后，运行报错

只需重新切换一下其他基础库，再编译即可运行。

### 服务端渲染框架打包问题

使用像 Nuxt.js、Next.js 这样的服务端渲染框架时，需要异步加载 Leafer UI 的相关代码才能编译打包成功， 同步加载会因为找不到 Canvas 相关的环境变量而打包失败。

https://nextjs.org/docs/pages/building-your-application/optimizing/lazy-loading#with-external-libraries

### 画布不断自动扩大导致的卡顿问题

自动布局时，当父容器的宽度或高度为 100%，同时设置 padding 或 border， 会导致画布不断 resize 扩大。
