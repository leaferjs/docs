# getMotionPoint

A coordinate point at a specified position along a motion path.

It can be used together with [motionPath](./motionPath.md), [motion](./motion.md), and [getMotionTotal()](./getMotionTotal.md).

::: tip Note
The [Motion Path Plugin](../../plugin/in/motion-path/index.md) must be installed to use this feature.
:::

## Key Method

### getMotionPoint ( ): [`IRotationPointData`](../../api/interfaces/IRotationPointData.md)

Gets a coordinate point at a specified position along the motion path. It returns a coordinate point that includes rotation, as shown below:

Both elements and motion path elements support this method.

```ts
interface IRotationPointData {
  x: number
  y: number
  rotation: number
}
```

## Belongs to

### [UI Element](../display/UI.md)

## Example

<<< @/code/game/dragon.ts
