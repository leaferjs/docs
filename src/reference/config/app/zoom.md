# zoom 配置

缩放视图相关配置，应用运行中修改 [app.config.zoom](/reference/display/Leafer.md#config-ileaferconfig) 立即生效。

:::tip 注意事项
[App 结构](/guide/app/multilayer.md) 下只能设置在 [App](/reference/display/App.md) 的 config 上。
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

<<< @/code/app/window/zoom-config.ts
