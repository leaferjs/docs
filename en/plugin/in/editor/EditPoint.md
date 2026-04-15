# EditPoint

Control point inside the edit box.

::: tip Inheritance
EditPoint  >  [Box](../../../reference/display/Box.md)  >  [UI](../../../reference/display/UI.md)
:::

## Key Properties

### direction: [`Direction9`](../../../api/enums/Direction9.md)

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

### pointType: [`IEditPointType`](../../../api/modules.md#ieditpointtype)

```ts
type IEditPointType =
  | 'move' // move button
  | 'rotate' // rotate button
  | 'resize' // resize button
  | 'resize-rotate' // resize + rotate button
  | 'button' // custom button
```

## Inherited

### EditPoint  >  [Box](../../../reference/display/Box.md)  >  [UI](../../../reference/display/UI.md)

<!-- ## API

### [EditPoint](../../../api/classes/EditPoint.md) -->
