<script setup>
import Case from '/component/Case.vue'
</script>

# 编辑器配置

### [基础](/plugin/in/editor/config/base.md) &nbsp; &nbsp; [事件](/plugin/in/editor/config/event.md) &nbsp; &nbsp; [样式](/plugin/in/editor/config/style.md) &nbsp; &nbsp; [按钮组](/plugin/in/editor/config/buttons.md) &nbsp; &nbsp; 光标 &nbsp; &nbsp; [选择](/plugin/in/editor/config/select.md) &nbsp; &nbsp; [控制](/plugin/in/editor/config/control.md) &nbsp; &nbsp; [启用](/plugin/in/editor/config/enable.md) &nbsp; &nbsp; [内部编辑器](/plugin/in/editor/config/innerEditor.md)

##

光标样式配置，应用运行中可实时修改 [app.editor.config](/plugin/in/editor/index.md#config-ieditorconfig) 生效。

同时元素拥有 [独立的编辑配置](/reference/UI/editable.md#editconfig-ieditorconfig) 属性，可实时覆盖主配置。

## 关键属性

### moveCursor： [`ICursorType`](/reference/UI/cursor.md)

设置移动光标。

### resizeCursor: [`IImageCursor`](/api/interfaces/IImageCursor.md)

设置 resize 光标，支持传入变量旋转角度。

![resize](/svg/resize.svg)

```ts
{
  url: `
<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
  <g transform="rotate({{rotation}},12,12)">
    <path
      fill-rule="evenodd"
      d="M3 11.4L7.5 8.0V10.4H16.5V8.0L21 11.4L16.5 14.9V12.4H7.5V14.9L3 11.4Z"
      fill="black"
    />
  </g>
</svg>` // svg字符串, {{rotation}}为旋转变量
  x: 12 // x轴旋转中心点
  y: 12 // y轴旋转中心点
}
```

### rotateCursor: [`IImageCursor`](/api/interfaces/IImageCursor.md)

设置 rotate 光标，支持传入变量旋转角度。

![rotate](/svg/rotate.svg)

```ts
{
  url: `
<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
  <g transform="rotate(135,12,12),rotate({{rotation}},12,12)">
    <path
      fill-rule="evenodd"
      d="M17 3L20.4 7.5H17.9C17.7 13.1 13.1 17.7 7.5 17.9V20.4L3 17L7.5 13.5V15.9C12.0 15.7 15.7 12.0 15.9 7.5H13.5L17 3Z"
      fill="black"
    />
  </g>
</svg>` // svg字符串， {{rotation}}为旋转变量
  x: 12 // x轴旋转中心点
  y: 12 // y轴旋转中心点
}
```

### skewCursor: [`IImageCursor`](/api/interfaces/IImageCursor.md)

设置 skew 光标，支持传入变量旋转角度。

![skew](/svg/skew.svg)

```ts
{
  url: `
<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
  <g transform="rotate(90,12,12),rotate({{rotation}},12,12)">
    <path
      fill-rule="evenodd"
      d="M17 10.4L21 10.4L15.5 6V8.4H6V10.4H15.5H17ZM8.5 14.4H7L3 14.4L8.5 18.9V16.4H19V14.4H8.5Z"
      fill="black"
    />
  </g>
</svg>` // svg字符串，{{rotation}}为旋转变量
  x: 12 // x轴旋转中心点
  y: 12 // y轴旋转中心点
}
```
