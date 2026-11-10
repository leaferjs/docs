<script setup>
import Case from '/component/Case.vue'
</script>

# HTML 元素

HTML 节点元素，支持挂载 dom / Vue / React 节点，方便使用 HTML 的表单、复杂组件。

::: tip 继承
HTML &nbsp;>&nbsp; [UI](../../../reference/display/UI.md)
:::

## 关键属性

### id: `string`

HTML 节点的 id，挂载后可通过 document.getElementById() 方法查找到 [dom](#dom-htmldivelement)，也能通过 [findId()](../../../reference/UI/findOne.md) 方法查找到元素。

## 只读属性

### dom：`HTMLDivElement`

实际挂载的 dom 节点，覆盖在画布上，能跟随画布缩放。

## 继承元素

### HTML &nbsp;>&nbsp; [UI](../../../reference/display/UI.md)

## 示例

### 挂载 HTML 节点

<<< @/code/plugin/html/HTML/app/index.ts

### 更多示例正在补充...
