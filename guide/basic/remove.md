<script setup>
import Case from '/component/Case.vue'
</script>

# 移除元素

## 标准移除

<<< @/code/basic/display/remove.ts

## 条件移除

同 [find()](/reference/property/find.md) 方法的参数一致，内部会先 find() 再批量移除。

::: tip 注意事项
需安装 [查找元素插件](/plugin/in/find/index.md) 才能使用，或直接安装 [leafer-game](/guide/install/game/start.md)、 [leafer-editor](/guide/install/editor/start.md) （已集成查找元素插件）
:::

<<< @/code/basic/display/remove-tag.ts

## 销毁移除

<<< @/code/basic/display/destroy.ts

## 清空元素

<<< @/code/basic/display/clear.ts

## 销毁应用

<<< @/code/basic/app/destroy.ts

## 恭喜 🎉

你已完成基础知识的学习，接下来带你了解几个 **好玩的插件**，放松一下～

## 下一步

### [交互状态](/guide/plugin/state)

<br/>

### 在前端环境中使用

[Vue](/guide/framework/vue/)

[React](/guide/framework/react/)

### 在服务端渲染中使用

[Nuxt.js](/guide/framework/nuxt/)

[VitePress](/guide/framework/vitepress/)

[Next.js](/guide/framework/next/)
