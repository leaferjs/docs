<script setup>
import Case from '/component/Case.vue'
</script>

# Editor 元素

图形编辑器，用于编辑操作图形，可移动、缩放、旋转、倾斜，支持多选、框选、编组、 双击进组，锁定、层级，向专业级设计工具看齐。支持自定义 [配置](/plugin/in/editor/config/base.md)、 [编辑工具](/plugin/in/editor/EditTool.md)、 [内部编辑器](/plugin/in/editor/InnerEditor.md)。

<case name="Editor" select=0></case>

::: tip 继承
Editor &nbsp;>&nbsp; [Group](/reference/display/Group.md) &nbsp;>&nbsp; [UI](/reference/display/UI.md)

<br/>

一般由应用自动生成，通过 [app.editor](/reference/display/App.md#editor-ieditor) 获取实例。

后面计划会增加精细化的属性编辑器，如编辑圆角、形状、路径等，暂时与 [自动布局](/plugin/in/flow/index.md) 元素不能混用。
:::

## 安装插件

需要安装 编辑器插件、[resize 插件](/plugin/in/resize/index.md) 才能使用，[点此访问 Github 仓库](https://github.com/leaferjs/leafer-in/tree/main/packages/editor)。

::: code-group

```sh [npm]
npm install @leafer-in/editor
npm install @leafer-in/resize
```

```sh [pnpm]
pnpm add @leafer-in/editor
pnpm add @leafer-in/resize
```

```sh [yarn]
yarn add @leafer-in/editor
yarn add @leafer-in/resize
```

```sh [bun]
bun add @leafer-in/editor
bun add @leafer-in/resize
```

:::

或通过 script 标签引入，使用全局变量 LeaferIN.editor 访问插件内部功能。

::: code-group

```html [editor.min]
<script src="https://unpkg.com/@leafer-in/editor@1.9.6/dist/editor.min.js"></script>
<script src="https://unpkg.com/@leafer-in/resize@1.9.6/dist/resize.min.js"></script>
<script>
  const { Editor } = LeaferIN.editor
</script>
```

```html [editor]
<script src="https://unpkg.com/@leafer-in/editor@1.9.6/dist/editor.js"></script>
<script src="https://unpkg.com/@leafer-in/resize@1.9.6/dist/resize.js"></script>
<script>
  const { Editor } = LeaferIN.editor
</script>
```

<!-- https://unpkg.com 无法访问时，可替换为 https://cdn.jsdelivr.net/npm -->

:::

## 关键属性

### target：[`UI`](/reference/display/UI.md) | [`UI`](/reference/display/UI.md)[]

设置需要编辑的元素， 默认通过 [编辑选择器](/plugin/in/editor/config/select.md#selector-boolean) 自动选取 [editable](/reference/UI/editable.md) 元素（不用设置 draggable ）。

### element: [`UI`](/reference/display/UI.md)

选中元素的唯一代表（只读）， 可使用 [element](#element-ui) 元素的布局属性方法直接移动、变换编辑框。

单选时为选中元素， 多选时为模拟元素（代替多个元素），用来同步布局编辑框。

### config: [`IEditorConfig`](/plugin/in/editor/config/base.md)

[编辑器配置](/plugin/in/editor/config/base.md)，应用初始化时通过 `editor: {}` 配置对象传入。

可通过 [app.editor.config](/plugin/in/editor/config/base.md) 实时修改 ( 特殊情况调用 [updateEditTool()](/plugin/in/editor/Editor/update.md) 方法立即更新 )。

## 次要属性

### hoverTarget: [`UI`](/reference/display/UI.md)

设置 hover 状态的元素， 默认通过 [编辑选择器](/plugin/in/editor/config/select.md#selector-boolean) 自动选取 [editable](/reference/UI/editable.md) 元素。

### targetLeafer: [Leafer](/reference/display/Leafer.md)

第一个目标元素所在的 leafer 实例层（只读）。

### mergeConfig: [`IEditorConfig`](/plugin/in/editor/config/base.md)

实际使用的编辑器配置（只读），实时合并编辑器的 [config](#config-ieditorconfig) 与元素的 [editConfig](/reference/UI/editable.md#editconfig-ieditorconfig)，频繁访问会有性能开销。

### mergedConfig: [`IEditorConfig`](/plugin/in/editor/config/base.md)

mergeConfig 的缓存，频繁访问不会有性能问题。

## 更多属性

| 名称                                                | 描述                                                                                                                                           |
| --------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| 状态                                                |                                                                                                                                                |
| [visible](/plugin/in/editor/Editor/state.md)        | 是否显示编辑器，隐藏后，交互功能也将禁用                                                                                                       |
| [hittable](/plugin/in/editor/Editor/state.md)       | 编辑器是否响应交互事件，设为 false 后，将禁用编辑器交互                                                                                        |
| [single](/plugin/in/editor/Editor/state.md)         | 是否只选中了单个元素                                                                                                                           |
| [multiple](/plugin/in/editor/Editor/state.md)       | 是否选中了多个元素                                                                                                                             |
| [editing](/plugin/in/editor/Editor/state.md)        | 是否处于编辑状态，选择元素后即进入编辑状态                                                                                                     |
| [innerEditing](/plugin/in/editor/Editor/state.md)   | 是否处于内部编辑状态，双击单个元素进入内部编辑状态（有内部编辑器的情况）                                                                       |
| [groupOpening](/plugin/in/editor/Editor/state.md)   | 是否处于打开组状态，双击组可进入打开状态，方便选择组内元素                                                                                     |
| [dragging](/plugin/in/editor/Editor/state.md)       | 是否正在拖拽编辑器，包含拖拽控制点、边                                                                                                         |
| [gesturing](/plugin/in/editor/Editor/state.md)      | 是否正在通过移动端手势拖拽、缩放、旋转编辑器                                                                                                   |
| [moving](/plugin/in/editor/Editor/state.md)         | 是否正在移动编辑器位置                                                                                                                         |
| [resizing](/plugin/in/editor/Editor/state.md)       | 是否正在 reisze 编辑器                                                                                                                         |
| [rotating](/plugin/in/editor/Editor/state.md)       | 是否正在旋转编辑器                                                                                                                             |
| [skewing](/plugin/in/editor/Editor/state.md)        | 是否正在倾斜编辑器                                                                                                                             |
| 列表                                                |                                                                                                                                                |
| [list](/plugin/in/editor/Editor/list.md)            | 当前选中的元素列表（只读），未选中时为空数组                                                                                                   |
| [leafList](/plugin/in/editor/Editor/list.md)        | 当前选中的元素列表对象（只读）， 未选中时为空列表对象                                                                                          |
| [openedGroupList](/plugin/in/editor/Editor/list.md) | 当前处于打开状态的组列表对象（只读）， 未选中时为空列表对象                                                                                    |
| 显示元素                                            |                                                                                                                                                |
| [buttons](/plugin/in/editor/Editor/display.md)      | 按钮组，用于放置自定义按钮，整体 [around](/reference/UI/around.md) 对齐， 位于编辑器底部，可以 [进行配置](/plugin/in/editor/config/buttons.md) |
| [editBox](/plugin/in/editor/Editor/display.md)      | 编辑框，负责编辑框的显示与交互，了解 [EditBox](/plugin/in/editor/EditBox.md)、[EditPoint](/plugin/in/editor/EditPoint.md) 类                   |
| [editTool](/plugin/in/editor/Editor/display.md)     | 当前使用的编辑工具，用来编辑元素的尺寸、外形，选中元素时会自动载入，可 [自定义编辑工具](/plugin/in/editor/editOuter/register.md)               |
| [innerEditor](/plugin/in/editor/Editor/display.md)  | 当前使用的内部编辑器，用来编辑文本、路径等内部细节，通过双击元素打开， 可 [自定义内部编辑器](/plugin/in/editor/editInner/register.md)          |
| [selector](/plugin/in/editor/Editor/display.md)     | 选择器，负责单选、多选、框选元素的交互，渲染元素选中、hover 线框                                                                               |

## 关键方法

| 名称                                                          | 描述                                                                                                                                        |
| ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| 选择                                                          |                                                                                                                                             |
| [select()](/plugin/in/editor/Editor/select.md)                | 选中元素                                                                                                                                    |
| [cancel()](/plugin/in/editor/Editor/select.md)                | 取消选中元素                                                                                                                                |
| [hasItem()](/plugin/in/editor/Editor/select.md)               | 是否已选中某个元素                                                                                                                          |
| [addItem()](/plugin/in/editor/Editor/select.md)               | 新增一个元素到选中列表                                                                                                                      |
| [removeItem()](/plugin/in/editor/Editor/select.md)            | 从选中列表中移出元素                                                                                                                        |
| 编组                                                          |                                                                                                                                             |
| [group()](/plugin/in/editor/Editor/group.md)                  | 将选中的元素进行编组                                                                                                                        |
| [ungroup()](/plugin/in/editor/Editor/group.md)                | 将选中的元素进行解组                                                                                                                        |
| [openGroup()](/plugin/in/editor/Editor/group.md)              | 打开组， 模拟双击打开组的功能                                                                                                               |
| [closeGroup()](/plugin/in/editor/Editor/group.md)             | 关闭组，关闭双击打开的组                                                                                                                    |
| 内部编辑                                                      |                                                                                                                                             |
| [openInnerEditor()](/plugin/in/editor/Editor/innerEditor.md)  | 打开元素的内部编辑器                                                                                                                        |
| [closeInnerEditor()](/plugin/in/editor/Editor/innerEditor.md) | 关闭内部编辑器                                                                                                                              |
| 锁定                                                          |                                                                                                                                             |
| [lock()](/plugin/in/editor/Editor/lock.md)                    | 锁定选中的元素                                                                                                                              |
| [unlock()](/plugin/in/editor/Editor/lock.md)                  | 解锁选中的元素                                                                                                                              |
| 层级                                                          |                                                                                                                                             |
| [toTop()](/plugin/in/editor/Editor/zIndex.md)                 | 移动选中元素到最顶层（所属 Group 中）                                                                                                       |
| [toBottom()](/plugin/in/editor/Editor/zIndex.md)              | 移动选中元素到最底层（所属 Group 中）                                                                                                       |
| 更新                                                          |                                                                                                                                             |
| [update()](/plugin/in/editor/Editor/update.md)                | 手动更新编辑器的布局、样式等                                                                                                                |
| [updateEditBox()](/plugin/in/editor/Editor/update.md)         | 手动更新编辑框，使其贴合元素，一般用于多选元素对齐后操作。                                                                                  |
| [updateEditTool()](/plugin/in/editor/Editor/update.md)        | 更新编辑工具，选择元素后自动调用此方法                                                                                                      |
| 变换                                                          |                                                                                                                                             |
| [move()](/plugin/in/editor/Editor/transform.md)               | 位移选中元素 <badge>增量操作</badge>                                                                                                        |
| [flip()](/plugin/in/editor/Editor/transform.md)               | 按轴方向（ [世界坐标系](/guide/advanced/coordinate.md#world-世界坐标系)） 镜像/翻转选中元素                                                 |
| [scaleOf()](/plugin/in/editor/Editor/transform.md)            | 围绕 [element](#element-ui) 元素的原点 origin（ [box 坐标](/guide/advanced/coordinate.md#box-坐标系) ）缩放选中元素 <badge>增量操作</badge> |
| [rotateOf()](/plugin/in/editor/Editor/transform.md)           | 围绕 [element](#element-ui) 元素的原点 origin（ [box 坐标](/guide/advanced/coordinate.md#box-坐标系) ）旋转选中元素 <badge>增量操作</badge> |
| [skewOf()](/plugin/in/editor/Editor/transform.md)             | 围绕 [element](#element-ui) 元素的原点 origin（ [box 坐标](/guide/advanced/coordinate.md#box-坐标系) ）倾斜选中元素 <badge>增量操作</badge> |

## 配置 editor

### [基础](/plugin/in/editor/config/base.md) &nbsp; &nbsp; [事件](/plugin/in/editor/config/event.md) &nbsp; &nbsp; [样式](/plugin/in/editor/config/style.md) &nbsp; &nbsp; [按钮组](/plugin/in/editor/config/buttons.md) &nbsp; &nbsp; [光标](/plugin/in/editor/config/cursor.md) &nbsp; &nbsp; [选择](/plugin/in/editor/config/select.md) &nbsp; &nbsp; [控制](/plugin/in/editor/config/control.md) &nbsp; &nbsp; [启用](/plugin/in/editor/config/enable.md) &nbsp; &nbsp; [内部编辑器](/plugin/in/editor/config/innerEditor.md)

### resize 元素

编辑器默认通过修改元素的宽高、路径坐标来调整大小，与专业级的设计工具效果一致。

同时也支持配置通过 fontSize、缩放属性来调整大小， 了解 [editSize](/plugin/in/editor/config/base.md)。

## 辅助

### [快捷键](/plugin/in/editor/Editor/shortcut.md)

### [历史记录](/plugin/in/editor/Editor/history.md)

## 事件

编辑器操作事件，通过 app.editor.on() 监听。

同时支持事件钩子 [beforeMove](/plugin/in/editor/config/event.md#beforemove-ieditorbeforemove)、[beforeScale](/plugin/in/editor/config/event.md#beforescale-ieditorbeforescale)、[beforeRotate](/plugin/in/editor/config/event.md#beforerotate-ieditorbeforerotate) 等，可改变操作数据。

| 名称                                                              | 描述               |
| ----------------------------------------------------------------- | ------------------ |
| [EditorEvent](/plugin/in/editor/event/EditorEvent.md)             | 选中、取消元素事件 |
| [EditorMoveEvent](/plugin/in/editor/event/EditorMoveEvent.md)     | 移动事件           |
| [EditorScaleEvent](/plugin/in/editor/event/EditorScaleEvent.md)   | 调整大小事件       |
| [EditorRotateEvent](/plugin/in/editor/event/EditorRotateEvent.md) | 旋转事件           |
| [EditorSkewEvent](/plugin/in/editor/event/EditorSkewEvent.md)     | 倾斜事件           |
| [EditorGroupEvent](/plugin/in/editor/event/EditorGroupEvent.md)   | 编组事件           |
| [InnerEditorEvent](/plugin/in/editor/event/InnerEditorEvent.md)   | 内部编辑器事件     |

<!--
## 编辑工具

用来编辑元素的尺寸、外形，选中元素时会自动载入。

内置了两种编辑工具，可为不同图形元素扩展编辑工具。

### [EditTool](./EditTool.md)

### [LineEditTool](/api/classes/LineEditTool.md)

### [自定义编辑工具](/plugin/in/editor/editOuter/register.md)

## 内部编辑器

用来编辑文本、路径等内部细节，通过双击元素打开。

可扩展路径编辑器、文本编辑器。

### [InnerEditor](./InnerEditor.md)

### [自定义内部编辑器](/plugin/in/editor/editInner/register.md) -->

<!--
## 继承元素

### [Group](/reference/display/Group.md) -->

<!-- ## API

### [Editor](/api/classes/Editor.md) -->

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

<<< @/code/plugin/editor/start.ts [editor]

<<< @/code/plugin/editor/full.ts [实现原理]

:::

## 示例

<case name="Editor" index=2 count=2 x=20></case>

### 点击选中元素

元素必需要有 [editable](/reference/UI/editable.md) 属性才能被选取， 可通过 [app.editor](/reference/display/App.md#editor-ieditor) 快速访问编辑器实例。

<<< @/code/plugin/editor/editable.ts

<case name="EditorConfig" index=11 x=20 height=160></case>

### 显示底部旋转控制点

默认会继承基础样式，可以进一步 [配置](./config/style.md#旋转按钮) 旋转控制点的样式。

<<< @/code/plugin/editor/config/rotate-point.ts

<case name="EditorConfig" index=14 x=20></case>

### 显示中间控制点，并修改样式

默认会继承基础样式、旋转角度， 可以精确 [设置](/plugin/in/editor/config/style.md#精确控制样式) 每个控制点的样式。

<<< @/code/plugin/editor/config/middle.ts

<case name="EditorConfig" index=10 x=20 height=180></case>

### 添加底部固定按钮

元素旋转、翻转后仍保持固定方位，可以 [配置](/plugin/in/editor/config/buttons.md) 按钮组的方位。

<<< @/code/plugin/editor/buttons.ts

### 监听选择事件

::: code-group
<<< @/code/plugin/editor/event/select.ts
<<< @/code/plugin/editor/event/select.js
:::

### 手动旋转元素

<<< @/code/plugin/editor/rotate.ts

### 创建图形模式

::: code-group
<<< @/code/plugin/editor/create-mode.ts
<<< @/code/plugin/editor/create-mode.js
:::

### 背景为透明方格的画板

<<< @/code/plugin/editor/frame/transparent.ts
