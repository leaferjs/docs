<script setup>
import Case from '/component/Case.vue'
</script>

# 图形编辑器

用于编辑操作图形，提供了丰富的功能和 [样式配置](/plugin/in/editor/config.md)， 可移动、缩放、旋转、倾斜，支持多选、框选、打组、 双击进组，锁定、层级。支持自定义 [编辑工具](/plugin/in/editor/editOuter/register.md)、 [内部编辑器](/plugin/in/editor/editInner/register.md)。

<!-- <case name="EditorConfig"></case> -->

<case name="Editor" select=0></case>

## 适用平台

web 版、小程序版。暂时与有 [自动布局](/plugin/in/flow/) 的元素不能混用。

后面计划会增加精细化的属性编辑器，如编辑圆角、形状、路径等

## 安装插件

需要安装编辑器插件才能使用，[点此访问 Github 仓库](https://github.com/leaferjs/leafer-in/tree/main/packages/editor)。

::: code-group

```sh[npm]
npm install @leafer-in/editor
```

```sh[pnpm]
pnpm add @leafer-in/editor
```

```sh[bun]
bun add @leafer-in/editor
```

:::

## 通过 script 标签引入

通过全局变量 LeaferIN.editor 访问插件内部功能。
::: code-group

```html [editor.min]
<script src="https://unpkg.com/@leafer-in/editor@1.0.8/dist/editor.min.js"></script>
<script>
  const { Editor } = LeaferIN.editor
</script>
```

```html [editor]
<script src="https://unpkg.com/@leafer-in/editor@1.0.8/dist/editor.js"></script>
<script>
  const { Editor } = LeaferIN.editor
</script>
```

https://unpkg.com 无法访问时，可替换为 https://cdn.jsdelivr.net/npm
:::

## 依赖插件

### [resize 插件](/plugin/in/resize/index.md) (会自动安装)

## 开始体验

<case name="Editor" index=2 count=2 x=20></case>

1. 点击选中元素， 支持多选、框选。

2. 将光标移动至控制点或边上，拖动可缩放元素。

3. 将光标移动至控制点外沿，出现方向光标，拖动可旋转元素。

按住`Ctrl` / `Command` 键，将光标移动至四条边上，拖动可倾斜元素。

::: danger 注意事项

编辑器必须在 [App](/reference/display/App.md) 中使用, 通过传入 editor 配置，可实现自动创建 [app.editor](/reference/display/App.md#editor-ieditor) 实例及 [app.tree](/reference/display/App.md#tree-leafer), [app.sky](/reference/display/App.md#sky-leafer) 分层结构，并自动将 editor 添加到 sky 层中。

:::

::: code-group

<<< @/code/plugin/editor/full.ts [手动创建]

:::

::: code-group

<<< @/code/plugin/editor/start.ts [自动创建]

:::

## 下一步

### [Editor 元素](./Editor.md)
