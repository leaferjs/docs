<script setup>
import Case from '/component/Case.vue'
</script>

# Create App Instance

This is an optional application structure, mainly used in scenarios such as the [graphic editor](../plugin/editor.md) that require layered rendering.

The [App](../../reference/display/App.md) is responsible for hosting multiple [Leafer](../../reference/display/Leafer.md) engine layers that work together, separating content with different update frequencies into different render layers to improve performance.

<br/>

![app](/svg/app.svg)

## Unified Structure

By default, App can add multiple custom engine layers via the [add()](../../reference/display/App.md#add-leafer-leafer) method. For easier understanding and communication, we use real-world metaphors to name commonly used Leafer engine layers, and also support quick configuration-based creation.为了方便大家记忆和沟通，我们以现实世界的方式为常用的 Leafer 引擎层进行拟物化命名，并支持通过配置快速添加。

### ground?: [`Leafer`](../../reference/display/Leafer.md)

Ground layer (background layer), the bottom-most Leafer engine, typically used for rendering backgrounds and grid content (optional).

### tree: [`Leafer`](../../reference/display/Leafer.md)

Tree structure (main content layer), the middle Leafer engine, equivalent to the `<body>` in HTML.

### sky: [`Leafer`](../../reference/display/Leafer.md)

Sky layer (dynamic layer), the topmost Leafer engine, typically used to render [graphic editor](../../plugin/in/editor/index.md) instances.

##

<case name="Editor" index=2 count=2 x=20></case>

We use the [graphic editor](../../plugin/in/editor/index.md) as an example to demonstrate the actual usage of App:

::: code-group

<<< @/code/plugin/editor/frame/index.ts [editor]

<<< @/code/plugin/editor/frame/simple.ts [simplified]

<<< @/code/plugin/editor/frame/origin.ts [implementation principle]

:::

## Learn More

### [App](../../reference/display/App.md)     [Leafer](../../reference/display/Leafer.md)

## App Configuration

### [Base](../../reference/config/app/base.md)     [Viewport Type](../../reference/config/app/type.md)     [Canvas](../../reference/config/app/canvas.md)     [Pointer](../../reference/config/app/pointer.md)     [Multi-touch](../../reference/config/app/multiTouch.md)     [Touch](../../reference/config/app/touch.md)     [Wheel](../../reference/config/app/wheel.md)     [Pan View](../../reference/config/app/move.md)     [Zoom View](../../reference/config/app/zoom.md)

## Next Step

### [Zoom & Pan Viewport](./viewport.md)
