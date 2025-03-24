# EditPoint

编辑框内的控制点。

::: tip 继承
EditPoint &nbsp;>&nbsp; [Box](/reference/display/Box.md) &nbsp;>&nbsp; [UI](/reference/display/UI.md)
:::

## 关键属性

### direction：[`Direction9`](/api/enums/Direction9.md)

```ts
enum Direction9 {
  topLeft,
  top,
  topRight,
  right,
  bottomRight,
  bottom,
  bottomLeft,
  left,
  center,
}
```

### pointType：[`IEditPointType`](/api/modules.md#ieditpointtype)

```ts
type IEditPointType =
  | 'rotate' // 旋转按钮
  | 'resize' // resize 按钮
  | 'resize-rotate' // reisze + 旋转按钮
  | 'button' // 自定义按钮
```

<!-- ## 继承元素

### [Box](/reference/display/Box.md) -->

<!-- ## API

### [EditPoint](/api/classes/EditPoint.md) -->
