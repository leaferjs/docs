# Application and Engine Configuration

### [Basics](./base.md)     [Viewport Type](./type.md)     [Canvas](./canvas.md)     [Pointer](./pointer.md)     Multi-touch     [Touch](./touch.md)     [Wheel](./wheel.md)     [Panning View](./move.md)     [Zoom View](./zoom.md)

##

Multi-touch event related configuration. Changes made during engine runtime will take effect immediately via [app.config.multiTouch](../../display/Leafer.md#config-ileaferconfig).

:::tip Note
Under the [App structure](../../../guide/advanced/app.md), settings can only be configured on the [App](../../display/App.md) config.
:::

## Key Properties

### multiTouch.disabled: `boolean`

Whether to disable multi-touch zoom/pan/rotation events. Default is false.

### multiTouch.singleGesture: `boolean` | [`ISingleGestureConfig`](../../../api/interfaces/ISingleGestureConfig.md)

Whether to recognize and lock to a single gesture operation (zoom/pan/rotation will prioritize only one at a time). Default is false.

When set as an object, gesture recognition thresholds can be further customized.

```ts
interface ISingleGestureConfig {
  move?: number // threshold for detecting movement, default is 5
  scale?: number // threshold for detecting scaling, default is 0.03
  rotation?: number // threshold for detecting rotation, default is 2 degrees
  count?: number // number of consecutive detections required to lock gesture type, default is 2
  time?: number // maximum gesture recognition time window, default is 160ms
}
```

## Example

### Disable multi-touch functionality

::: code-group
<<< @/code/app/config/multiTouch.ts [Leafer]
<<< @/code/app/config/app/multiTouch.ts [App]
:::

### Lock single gesture mode

::: code-group
<<< @/code/app/config/singleGesture.ts [Leafer]
<<< @/code/app/config/app/singleGesture.ts [App]
:::
