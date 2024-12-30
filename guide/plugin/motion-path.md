<script setup>
import Case from '/component/Case.vue'
</script>

# 运动路径

让元素沿着另一条路径运动，或进行自身描边、生长动画。

提供了 [motionPath](/reference/property/motionPath) 、 [motion](/reference/property/motion) 、 [getMotionTotal()](/reference/property/getMotionTotal) 、[getMotionPoint()](/reference/property/getMotionPoint) 等属性方法。

::: tip 注意事项
需安装 [运动路径插件](/plugin/in/motion-path/) 才能使用，另外路径动画功能 需安装 [动画插件](/plugin/in/animate/) 。

或直接安装 [leafer-game](/guide/install/game/start.md)（已集成运动路径插件）。
:::

<case name="AnimateCar" editor=false ></case>

<<< @/code/plugin/animate/car.ts

<case name="AnimatePath" editor=false height=240></case>

<<< @/code/plugin/animate/path.ts

## 下一步

### [Robot 游戏元素](/guide/plugin/robot)
