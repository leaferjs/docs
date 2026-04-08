<script setup>
import Case from '/component/Case.vue'
</script>

# 图形编辑器

图形编辑器是一个有意思的例子，它采用了 App 结构。可移动、缩放、旋转、倾斜，支持多选、框选、编组、锁定、层级，[可配置样式](/plugin/in/editor/config/base.md)，支持自定义 [编辑工具](/plugin/in/editor/EditTool.md)、 [内部编辑器](/plugin/in/editor/InnerEditor.md)。

::: tip 注意事项
需安装 [图形编辑器插件](/plugin/in/editor/index.md) 才能使用， 或直接安装 [leafer-editor](/guide/install/editor/start.md)（已集成了图形编辑器相关插件）。
:::

<case name="Editor" index=2 count=2 x=20></case>

::: code-group

<<< @/code/plugin/editor/frame/editor.ts [editor]

<<< @/code/plugin/editor/frame/origin.ts [实现原理]

:::

## 恭喜 🎉

你已完成 常用场景插件 的了解，接下来将学习几个重要的进阶知识。

## 下一步

### [创建 App](/guide/advanced/app.md)

<br/>

### 在前端环境中使用

[Vue](/guide/framework/vue/index.md)

[React](/guide/framework/react/index.md)

### 在服务端渲染中使用

[Nuxt.js](/guide/framework/nuxt/index.md)

[VitePress](/guide/framework/vitepress/index.md)

[Next.js](/guide/framework/next/index.md)
