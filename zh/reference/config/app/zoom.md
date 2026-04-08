# 应用与引擎配置

### [基础](./base.md) &nbsp; &nbsp; [视口类型](./type.md) &nbsp; &nbsp; [画布](./canvas.md) &nbsp; &nbsp; [点按](./pointer.md) &nbsp; &nbsp; [多点](./multiTouch.md) &nbsp; &nbsp; [触屏](./touch.md) &nbsp; &nbsp; [滚轮](./wheel.md) &nbsp; &nbsp; [平移视图](./move.md) &nbsp; &nbsp; 缩放视图

##

缩放视图相关配置，引擎运行中修改 [app.config.zoom](../../display/Leafer.md#config-ileaferconfig) 立即生效。

:::tip 注意事项
[App 结构](../../../guide/advanced/app.md) 下只能设置在 [App](../../display/App.md) 的 config 上。
:::

## 关键属性

### zoom.disabled: `boolean`

是否禁用缩放视图，默认为 false。

### zoom.min: `number`

视图最小缩放比例， 默认为 0.02。

### zoom.max: `number`

视图最大缩放比例， 默认为 256。

## 示例

### 控制视图缩放范围

::: code-group
<<< @/code/app/viewport/app/zoom-config.ts [App]

<<< @/code/app/viewport/zoom-config.ts [Leafer]
:::
