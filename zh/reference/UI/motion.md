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

### motionVertical: `IMotionVertical`

元素垂直于运动路径的对齐方式，默认为 'below'。

```ts
type IMotionVertical = IMotionVerticalType | IMotionVerticalData

type IMotionVerticalType =
  | 'above' // 元素在运动路径上方
  | 'center' // 元素在中间
  | 'below' // 元素在运动路径下方
  | number // 设置 offset 偏移值

interface IMotionVerticalData {
  type: IMotionVerticalType // 对齐方式
  offset: number // offset 偏移值，仅 'above' 类型向上偏移，其他类型向下偏移
}

// 元素在运动路径上方
rect.motionVertical = 'above'

// 元素向下偏移 20px
rect.motionVertical = 20

// 元素在运动路径上方，且向上偏移20px
rect.motionVertical = {
  type: 'above',
  offset: 20,
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
