<script setup>
import Case from '/component/Case.vue'
</script>

# selected

选中状态，暂时不支持 Group。

需安装 [交互状态 插件](/plugin/in/state/index.md) 才能使用。

## 关键属性

### selected： `boolean`

是否选中。

### selectedStyle: [`IUIInputData`](/api/interfaces/IUIInputData.md)

元素 `selected` 设为 true 时的选中样式， `selected` 设为 false 后自动还原。

## 归属

### [UI](/reference/display/UI.md#交互状态)

## 示例

<<< @/code/property/state/selectedStyle.ts
