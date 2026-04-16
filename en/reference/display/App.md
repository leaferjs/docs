<script setup>
import Case from '/component/Case.vue'
</script>

# App

Create an App instance (optional structure). Learn about initialization from [App configuration](../config/app/base.md) and [viewport interaction](../../guide/advanced/viewport.md).

It is responsible for hosting multiple layered [Leafer](./Leafer.md) engines working together to improve performance, while also inheriting part of Leafer’s functionality and events.

<br/>

![app](/svg/app.svg)

<br/>

:::tip Inheritance
App &nbsp;>&nbsp; [Leafer](./Leafer.md) &nbsp;>&nbsp; [Group](./Group.md) &nbsp;>&nbsp; [UI](./UI.md)

<br/>

Interaction events can propagate across multiple child Leafer engines by layer hierarchy, making it behave like a single unified interactive system.

Note: App does not receive data change events from child elements. Please listen to these events on the corresponding child Leafer engine instead.

:::

## Key Properties

### isApp: `boolean`

Whether this is an App instance. Defaults to `true`.

### children: [`Leafer`](./Leafer.md)[]

List of child Leafer engines.

### mode: [`ILeaferMode`](../../api/modules.md#ileafermode)

Sets the interaction mode of the application. Defaults to `normal`. [See example](#drawing-mode).

Setting it to `'draw'` enters drawing mode, which disables the [graph editor](../../plugin/in/editor/index.md), and graphic elements will no longer respond to interaction events.

Setting it to `'preview'` enters preview mode, which also disables the [graph editor](../../plugin/in/editor/index.md), but graphic elements will still respond to interaction events.

Changing the mode will trigger the [LeaferEvent.UPDATE_MODE](../event/basic/Leafer.md#leaferevent-update-mode) event.

```ts
type ILeaferMode =
  | 'normal' // normal mode
  | 'draw' // drawing mode
  | 'preview' // preview mode
```

## Unified Structure

By default, App can add multiple custom engine layers via the [add()](./App.md#add-leafer-leafer) method. To make it easier to understand and communicate, we use real-world metaphors to name common Leafer engine layers and support quick creation through configuration.为了方便大家记忆和沟通，我们以现实世界的方式为常用的 Leafer 引擎层进行拟物化命名，并支持通过配置快速添加。

### ground?: [`Leafer`](./Leafer.md)

Ground layer (background layer), the bottom-most Leafer engine, typically used for rendering backgrounds and grid content (optional).

### tree: [`Leafer`](./Leafer.md)

Tree structure (main content layer), the middle Leafer engine, equivalent to the `<body>` in HTML.

### sky: [`Leafer`](./Leafer.md)

Sky layer (overlay/interaction layer), the top-most Leafer engine, typically used to render [graph editor](../../plugin/in/editor/index.md) instances.

## Reserved Properties

### editor: [`IEditor`](../../plugin/in/editor/index.md)

Graph editor instance. Requires installing the [graph editor](../../plugin/in/editor/index.md) plugin.

## Viewport Properties (viewport)

### zoomLayer：[`Group`](./Group.md)

Zoom/pan view layer. By default, it uses [app.tree.zoomLayer](./Leafer.md#zoomlayer-group) as the transformation layer.

You can manually modify its [x](../UI/layout.md), [y](../UI/layout.md), [scale](../UI/layout.md#scale-number-ipointdata), [scaleX](../UI/layout.md#scalex-number), and [scaleY](../UI/layout.md#scaley-number) properties to control zooming and panning. You can also listen to [viewport change events](../event/basic/Leafer.md#view-events).

In addition, the [view control plugin](../../plugin/in/view/index.md) and [scrollbar plugin](../../plugin/in/scroll/index.md) can be used for convenient viewport control, including centering content or focusing on specific elements.

```ts
app.zoomLayer.x = 100 // x = 100
app.zoomLayer.y = 100 // y = 100
console.log(app.zoomLayer.x) // 100
console.log(app.zoomLayer.y) // 100

app.zoomLayer.scale = 2 // scaleX = 2, scaleY = 2
console.log(app.zoomLayer.scale) // 2
```

## Key Methods

### add ( leafer: [`Leafer`](./Leafer.md))

Add a Leafer engine.

### addLeafer ( config?:[`ILeaferConfig`](../../api/interfaces/ILeaferConfig.md))

Quickly create and add a Leafer engine.

### addAt ( child: [`Leafer`](./Leafer.md), index: `number`)

Add a Leafer engine at a specified index.

### addBefore ( child: [`Leafer`](./Leafer.md), before: [`Leafer`](./Leafer.md))

Add a Leafer engine before the specified Leafer.

### addAfter ( child: [`Leafer`](./Leafer.md), after: [`Leafer`](./Leafer.md))

Add a Leafer engine after the specified Leafer.

## Configuration

### [App configuration](../config/app/base.md)

## View

### [Viewport control](../../guide/advanced/viewport.md)

## Inheritance

### App &nbsp;>&nbsp; [Leafer](./Leafer.md) &nbsp;>&nbsp; [Group](./Group.md) &nbsp;>&nbsp; [UI](./UI.md)

<!-- ## API

### [App](../../api/classes/App.md) -->

## Example

<case name="Editor" index=2 count=2 x=20></case>

We use the [graph editor](../../plugin/in/editor/index.md) example to demonstrate real usage of App:

::: code-group

<<< @/code/plugin/editor/frame/index.ts [editor]

<<< @/code/plugin/editor/frame/simple.ts [simplified]

<<< @/code/plugin/editor/frame/origin.ts [implementation]

:::

### Drawing Mode

:::code-group
<<< @/code/plugin/editor/create-mode.ts
<<< @/code/plugin/editor/create-mode.js
:::
