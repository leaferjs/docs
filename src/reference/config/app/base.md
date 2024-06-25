# 基础配置

App 与 Leafer 的初始化基础配置。

## 关键属性

### start: `boolean`

是否自动启动应用，默认为 true。

应用启动后，可以通过 [leafer.stop()](/reference/display/Leafer.md#start)、 [leafer.start()](/reference/display/Leafer.md#start) 手动控制渲染。

## 渲染属性

应用运行中修改 [leafer.config](/reference/display/Leafer.md#config-ileaferconfig) 立即生效。

### usePartRender: `boolean`

是否使用 局部渲染， 默认为 true

## 交互属性

应用运行中修改 [app.config](/reference/display/Leafer.md#config-ileaferconfig) 立即生效。

注意 App 结构下只能设置在 [App](/reference/display/App.md) 的 config 上。

### cursor: `boolean`

是否启用光标功能，默认为 true。

#### keyEvent: `boolean`

是否接收键盘事件， 默认为 true。

## 示例

### 手动启动应用

当图形数量很多，异步创建完后，通过手动 start()，可以加快创建速度。

<<< @/code/app/config/start.ts

### 关闭局部渲染

<<< @/code/app/config/partRender.ts
