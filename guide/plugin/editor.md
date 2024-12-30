<script setup>
import Case from '/component/Case.vue'
</script>

# 图形编辑器

图形编辑器是一个有意思的例子，它采用了 App 结构，可以点击操作下面的图形看看。

::: tip 注意事项
需安装 [图形编辑器插件](/plugin/in/editor/) 才能使用， 或直接安装 [leafer-editor](/guide/install/editor/start.md)（已集成了图形编辑器相关插件）。
:::

<case name="Editor" index=2 count=2 x=20></case>

::: code-group

<<< @/code/plugin/editor/frame/editor.ts [editor]

<<< @/code/plugin/editor/frame/origin.ts [实现原理]

:::

## 恭喜 🎉

你已完成常用场景插件的学习，接下来将学习几个重要的进阶知识。

## 下一步

### [创建 App](/guide/advanced/app.md)
