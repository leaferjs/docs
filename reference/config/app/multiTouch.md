# multiTouch 配置

多点触摸事件相关配置, 应用运行中修改 [app.config.multiTouch](/reference/display/Leafer.md#config-ileaferconfig) 立即生效。

:::tip 注意事项
[App 结构](/guide/app/multilayer.md) 下只能设置在 [App](/reference/display/App.md) 的 config 上。
:::

## 关键属性

### multiTouch.disabled: `boolean`

是否禁用多点触屏产生的缩放/平移/旋转事件， 默认为 false。
