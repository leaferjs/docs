<script setup>
import Case from '/component/Case.vue'
</script>

# motion

运动位置。

::: tip 注意事项
需安装 [运动路径插件](/plugin/in/motion-path/index.md) 才能使用，另外路径动画功能 需安装 [动画插件](/plugin/in/animate/) 。
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

### motionRotation: `number` | `boolean`

偏移运动旋转角度，在运动角度上增加角度， 默认为 0。

元素运动时会设置元素的 rotation 来适应路径方向的变化。

设为 false 时，表示不设置元素的 rotation。

## 示例

<case name="AnimatePath" editor=false height=240></case>

<<< @/code/plugin/animate/path.ts
