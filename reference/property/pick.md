# pick

通过坐标点拾取元素（模拟光标拾取元素）。

## 关键方法

### pick ( hitPoint: [`IPointData`](../interface/math/Math#ipointdata), options?: `IPickOptions` ): `IPickResult`

通过坐标点（相对世界坐标）拾取元素，支持获取穿透路径，返回拾取到的目标元素和路径。

```ts
interface IPickOptions {
  hitRadius?: number // 拾取半径， 默认为0
  through?: boolean // 是否获取穿透路径，默认为false
  findList?: ILeaf[] // 从指定的元素列表中拾取
  exclude?: ILeafList // 排除指定的元素
  ignoreHittable?: boolean // 忽略元素的hittable属性，默认为false
}

interface IPickResult {
  target: ILeaf // 拾取到的目标元素
  path: ILeafList // 拾取路径，一般用于事件冒泡
  throughPath?: ILeafList // 穿透路径，可以找到被目标元素遮挡的底部元素
}
```

## 归属

### [Group](/reference/display/Group.md)

## 示例

### 通过 point 拾取元素

<<< @/code/property/pick/point.ts
