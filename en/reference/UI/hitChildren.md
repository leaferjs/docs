<script setup>
import Case from '/component/Case.vue'
</script>

# hitChildren

进一步定义元素子级的可交互性。

## 关键属性

### hitChildren: `boolean`

子元素是否响应交互事件，默认为 true。

## 归属

### [UI 元素](../display/UI.md)

### 停用子元素交互事件

:::code-group
<<< @/code/property/hit/hitChildren.ts [Leafer]
<<< @/code/property/hit/app/hitChildren.ts [App]
:::
