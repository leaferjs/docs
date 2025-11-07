# 常见问题

### 更新版本之后报错

leafer-ui 及官方插件包需要同时更新版本。

如出现旧版本缓存冲突导致的报错，需要删除 lock 文件重新安装一下。

了解如何 [快速更新版本](/guide/update.md)。

### Creator.editor is not a function

图形编辑器插件未安装，或与主包版本不一致（请修改版本号并删除 lock 文件后重新安装）。

### 添加新的插件后没有生效或报错

检查新增加的插件与主包版本是否一致，一般是不一致造成的，请统一版本号并删除 lock 文件后重新安装。

### 页面布局卡顿、某些方法调用不了

检查是否有将 leafer 或元素实例绑定了到前端框架的响应式数据，会造成大量的数据代理、覆盖方法，并拖慢布局速度。

### 小程序构建 npm 后，运行报错

只需重新切换一下其他基础库，再编译即可运行。

### 服务端渲染框架打包问题

使用像 Nuxt.js、Next.js 这样的服务端渲染框架时，需要异步加载 leafer-ui 的相关代码才能编译打包成功， 同步加载会因为找不到 Canvas 相关的环境变量而打包失败。

https://nextjs.org/docs/pages/building-your-application/optimizing/lazy-loading#with-external-libraries

### 画布不断自动扩大导致的卡顿问题

自动布局时，当父容器的宽度或高度为 100%，同时设置 padding 或 border， 会导致画布不断 resize 扩大。

### 微信 JS-SDK 上传 PNG 图片会变成 JPG 格式

请使用 HTML5 原生的 input 框上传。

### 小程序交互事件偶尔失效

小程序 onLoad 事件时可能画布的大小和 clientRect 还未定型，导致获取到错误的响应区域，可 setTimeout 延时创建 Leafer，即可解决。

### node 版渲染内容为空

skia-canvas 的最新版本有兼容性问题， 目前只支持 2.x 版本。
