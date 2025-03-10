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

## 销毁应用

<<< @/code/basic/remove/destroy-leafer.ts

## 恭喜 🎉

你已完成基础知识的学习，接下来带你了解几个 **好玩的插件**，放松一下～

## 下一步

### [动画功能](/guide/plugin/animate.md)

<br/>

### 在前端环境中使用

[Vue](/guide/framework/vue/index.md)

[React](/guide/framework/react/index.md)

### 在服务端渲染中使用

[Nuxt.js](/guide/framework/nuxt/index.md)

[VitePress](/guide/framework/vitepress/index.md)

[Next.js](/guide/framework/next/index.md)
