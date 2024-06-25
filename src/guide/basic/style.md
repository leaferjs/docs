<script setup>
import Case from '/component/Case.vue'
</script>

# 设置样式

<case name="Stroke"></case>

## 初始化样式

创建一个带边框样式的矩形。

<<< @/code/basic/style/border.ts#create

## 修改样式

元素只能检测到第一层级属性的变化，如：修改 rect.fill.url = url 是不会渲染更新的。

<<< @/code/basic/style/border.ts#change

## 简洁修改

<<< @/code/basic/style/border.ts#set

## 重置样式

<<< @/code/basic/style/border.ts#reset

## 使用 JSON

<<< @/code/property/json/set.ts

## 下一步

### [事件处理](/guide/basic/event)
