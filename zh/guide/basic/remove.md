<script setup>
import Case from '/component/Case.vue'
</script>

# 移除元素

## 标准移除

<<< @/code/basic/remove/remove.ts

## 条件移除

同 [find()](/reference/UI/find.md) 方法的参数一致，内部会先 find() 再批量移除。

::: tip 注意事项
需安装 [查找元素插件](/plugin/in/find/index.md) 才能使用，或直接安装 [leafer-game](/guide/install/game/start.md)、 [leafer-editor](/guide/install/editor/start.md) （已集成查找元素插件）
:::

<<< @/code/basic/remove/remove-tag.ts

## 销毁移除

<<< @/code/basic/remove/destroy.ts

## 清空元素

<<< @/code/basic/remove/clear.ts

## 销毁引擎

<<< @/code/basic/remove/destroy-leafer.ts

## 下一步

### [导出元素](/guide/basic/export.md)
