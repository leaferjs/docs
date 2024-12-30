# 基础配置

App 与 Leafer 的初始化基础配置。

## 关键属性

### start: `boolean`

是否自动启动应用，默认为 true。

应用启动后，可以通过 [app.stop()](/reference/display/Leafer.md#start)、 [app.start()](/reference/display/Leafer.md#start) 手动控制渲染。

## 渲染属性

应用运行中修改 [leafer.config](/reference/display/Leafer.md#config-ileaferconfig) 立即生效。

### usePartRender: `boolean`

是否使用 局部渲染， 默认为 true。

:::tip 注意事项
[App 结构](/guide/advanced/app.md) 下需设置在 [子层 Leafer](/reference/display/Leafer.md) 的 config 上，如 ground、tree、sky 层。
:::

## 交互属性

应用运行中修改 [app.config](/reference/display/Leafer.md#config-ileaferconfig) 立即生效。

:::tip 注意事项
[App 结构](/guide/advanced/app.md) 下只能设置在 [App](/reference/display/App.md) 的 config 上。
:::

### mobile: `boolean`

是否在手机端使用，自动优化体验（如停用 hover 事件、图形编辑器 [可通过手势控制元素](/plugin/in/editor/config.md#moveable-boolean-move)）

### cursor: `boolean`

是否启用光标功能，默认为 true。

### keyEvent: `boolean`

是否接收键盘事件， 默认为 true。

## 示例

### 手动启动应用

当图形数量很多，异步创建完后，通过手动 start()，可以加快创建速度。

::: code-group
<<< @/code/app/config/start.ts [Leafer]

<<< @/code/app/config/app/start.ts [App]
:::

### 关闭局部渲染

::: code-group
<<< @/code/app/config/partRender.ts [Leafer]

<<< @/code/app/config/app/partRender.ts [App]
:::
