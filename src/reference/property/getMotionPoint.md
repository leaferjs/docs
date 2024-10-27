# getMotionPoint

运动路径上指定位置的 坐标点。

::: tip 注意事项
需安装 [运动路径插件](/plugin/in/motion-path/index.md) 才能使用。
:::

## 关键方法

### getMotionPoint ( ): [`IRotationPointData`](/api/interfaces/IRotationPointData.md)

获取运动路径上指定位置的 坐标点, 返回一个包含 rotation 的 坐标点, 如下：

元素和运动路径元素都支持调用此方法。

```ts
interface IRotationPointData {
  x: number
  y: number
  rotation: number
}
```

## 示例

<<< @/code/contest/dragon/step3.ts
