<script setup>
import Case from '/component/Case.vue'
</script>

# motionPath

运动路径。

::: tip 注意事项
需安装 [运动路径插件](/plugin/in/motion-path/index.md) 才能使用，另外路径动画功能 需安装 [动画插件](/plugin/in/animate/) 。
:::

## 关键属性

### motionPath: `boolean`

是否将元素设为运动路径。

设为运动路径后，所在 Group 内的 其他元素可通过设置运动位置 [motion](./motion.md) 沿此路径运动， 一般会结合 [around](./around.md) 属性重新定位元素。

## 示例

<case name="AnimateCar" editor=false ></case>

<<< @/code/plugin/animate/car.ts
