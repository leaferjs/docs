<script setup>
import Case from '/component/Case.vue'
</script>

# Corner

默认支持折线圆角，曲线圆角需安装插件。

::: tip 注意事项
曲线与折线、折线与曲线之间的圆角需安装 [corner 插件](../../plugin/in/corner/index.md) 才能使用。
:::

## 关键属性

### cornerRadius: `number`

圆角大小。

<!-- ### cornerSmoothing: `number`

计划开发的功能。

平滑圆角所对应的数值，取值范围为 0 ～ 1，常用的 iOS 规范为 0.6。 -->

## 归属

### [UI 元素](../display/UI.md)

## 示例

<case name="Ellipse" index=5 editor=false></case>

### 绘制带圆角的扇形圆环

::: code-group
<<< @/code/display/Ellipse/sectorRingCorner.ts [Leafer]
<<< @/code/display/Ellipse/app/sectorRingCorner.ts [App]
:::
