# 应用与引擎配置

### 基础 &nbsp; &nbsp; [视口类型](/reference/config/app/type.md) &nbsp; &nbsp; [画布](/reference/config/app/canvas.md) &nbsp; &nbsp; [点按](/reference/config/app/pointer.md) &nbsp; &nbsp; [多点](/reference/config/app/multiTouch.md) &nbsp; &nbsp; [触屏](/reference/config/app/touch.md) &nbsp; &nbsp; [滚轮](/reference/config/app/wheel.md) &nbsp; &nbsp; [平移视图](/reference/config/app/move.md) &nbsp; &nbsp; [缩放视图](/reference/config/app/zoom.md)

##

[App](/reference/display/App.md) 与 [Leafer](/reference/display/Leafer.md) 的初始化基础配置。

## 关键属性

### start: `boolean`

是否自动启动引擎，默认为 true。

启动后，可以通过 [app.stop()](/reference/display/Leafer.md#start)、 [app.start()](/reference/display/Leafer.md#start) 手动控制渲染。

## 渲染属性

引擎运行中修改 [leafer.config](/reference/display/Leafer.md#config-ileaferconfig) 立即生效。

### maxFPS: `number`

设置最高渲染帧率， 默认与当前显示器的刷新频率一致（一般为每秒 60 帧，最高 120 帧）。

降低渲染帧率可以节省性能开销，建议设置成能被 60 整除的数字，如 30、20、15。

:::tip 注意事项
[App 结构](/guide/advanced/app.md) 下需设置在 [子层 Leafer](/reference/display/Leafer.md) 的 config 上，如 ground、tree、sky 层。
:::

### usePartRender: `boolean`

是否使用 局部渲染， 默认为 true。

:::tip 注意事项
[App 结构](/guide/advanced/app.md) 下需设置在 [子层 Leafer](/reference/display/Leafer.md) 的 config 上，如 ground、tree、sky 层。
:::

## 交互属性

引擎运行中修改 [app.config](/reference/display/Leafer.md#config-ileaferconfig) 立即生效。

:::tip 注意事项
[App 结构](/guide/advanced/app.md) 下只能设置在 [App](/reference/display/App.md) 的 config 上。
:::

### mobile: `boolean`

是否在手机端使用，自动优化体验（如停用 hover 事件），图形编辑器可配置 [手势控制元素](/plugin/in/editor/config/enable.md)。

### cursor: `boolean`

是否启用光标功能，默认为 true。

### keyEvent: `boolean`

是否接收键盘事件， 默认为 true。

## 对齐像素

### pointSnap: `boolean`

对齐逻辑像素：拖拽元素时对坐标进行 round 取整，避免产生小数。

引擎运行中修改 [app.config](/reference/display/Leafer.md#config-ileaferconfig) 立即生效。

### pixelSnap: `boolean`

对齐物理像素：避免居中线条/图片等元素存在小数坐标导致模糊。

不会修改元素数据，只在渲染的时候对乘以 pixelRatio 后计算的小数像素坐标取整，对居中对齐的 1 像素线条，坐标取整后偏移 0.5 像素。

想要图片不模糊，还可以继续配置 [config.smooth](/reference/config/app/canvas.md#smooth-boolean) 属性。

引擎运行中修改 [leafer.confg / app.tree.config](/reference/display/Leafer.md#config-ileaferconfig) 立即生效。

## 示例

### 手动启动

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
