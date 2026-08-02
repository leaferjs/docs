<script setup>
import Case from '/component/Case.vue'
</script>

# motion

运动位置。

可结合 [motionPath](./motionPath.md)、 [getMotionTotal()](./getMotionTotal.md)、[getMotionPoint()](./getMotionPoint.md) 使用。

::: tip 注意事项
需安装 [运动路径插件](../../plugin/in/motion-path/index.md) 才能使用，另外路径动画功能 需安装 [动画插件](../../plugin/in/animate/index.md) 。

或直接安装 [leafer-game](../../guide/install/game/start.md)（已集成动画、运动路径插件）。
:::

## 关键属性

### motion: `number` ｜ `IUnitData`

定位元素在 [运动路径](./motionPath.md) 上的位置，可使用百分比类型, 默认空。

```ts
rect.motion = {
  type: 'percent',
  value: 0.5, // 50%
}
```

### motionAround: [`IAlign`](../../api/modules.md#ialign) | [`IUnitPointData`](../../api/interfaces/IUnitPointData.md)

对齐元素内部的 [around](./around.md) 点到运动位置上。

![方向图](/svg/deriction.svg)

```ts
// 方位
type IAlign =
  | 'top-left'
  | 'top'
  | 'top-right'
  | 'right'
  | 'bottom-right'
  | 'bottom'
  | 'bottom-left'
  | 'left'
  | 'center'

rect.motionAround = 'center'

// 坐标点
interface IUnitPointData {
  type?: 'percent' | 'px'
  x: number
  y: number
}

rect.motionAround = {
  type: 'percent',
  x: 0.5, // 50% width  百分比坐标点
  y: 0.5, // 50% height
}

rect.motionAround = {
  x: 50, // 50px 像素值坐标点
  y: 50, // 50px
}
```

### motionRotation: `number` | `boolean`

偏移运动旋转角度，在运动角度上增加角度， 默认为 0。

元素运动时会设置元素的 rotation 来适应路径方向的变化。

设为 false 时，表示不设置元素的 rotation。

## 归属

### [UI 元素](../display/UI.md)

## 示例

<case name="AnimatePath" editor=false height=240></case>

<<< @/code/plugin/animate/path.ts [Leafer]
