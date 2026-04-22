<script setup>
import Case from '/component/Case.vue'
</script>

# Flow Element

Automatic layout (flow) element. Similar to Flexbox, it enables fast and intuitive layout of content.

<case name="Flow" count=6 height=160 editor=false></case>

::: tip Inheritance
Flow  >  [Box](../../../reference/display/Box.md)  >  [UI](../../../reference/display/UI.md)

<br/>

[Box](../../../reference/display/Box.md) / [Frame](../../../reference/display/Frame.md) elements also support auto layout properties (requires installing this plugin).

Currently not fully adapted for the [graphic editor](../editor/index.md). Frequent changes in auto layout elements may affect performance; optimizations will be added later.
:::

## Install Plugin

You need to install the flow plugin and [resize plugin](../resize/index.md) to use it. [Visit Github repository](https://github.com/leaferjs/leafer-in/tree/main/packages/flow).

::: code-group

```sh [npm]
npm install @leafer-in/flow
npm install @leafer-in/resize
```

```sh [pnpm]
pnpm add @leafer-in/flow
pnpm add @leafer-in/resize
```

```sh [yarn]
yarn add @leafer-in/flow
yarn add @leafer-in/resize
```

```sh [bun]
bun add @leafer-in/flow
bun add @leafer-in/resize
```

:::

Or include via script tag and access plugin features through the global variable `LeaferIN.flow`.

::: code-group

```html [flow.min]
<script src="https://unpkg.com/@leafer-in/flow@2.1.0/dist/flow.min.js"></script>
<script src="https://unpkg.com/@leafer-in/resize@2.1.0/dist/resize.min.js"></script>
<script>
  const { Flow } = LeaferIN.flow
</script>
```

```html [flow]
<script src="https://unpkg.com/@leafer-in/flow@2.1.0/dist/flow.js"></script>
<script src="https://unpkg.com/@leafer-in/resize@2.1.0/dist/resize.js"></script>
<script>
  const { Flow } = LeaferIN.flow
</script>
```

<!-- If unpkg is not accessible, you can replace it with https://cdn.jsdelivr.net/npm -->

:::

## Key Properties

| Name                             | Description                                                                                    |
| -------------------------------- | ---------------------------------------------------------------------------------------------- |
| [flow](./Flow/flow.md)           | Layout direction: enables auto layout and optionally sets axis direction x or y (default x)    |
| [flowWrap](./Flow/flowWrap.md)   | Auto wrap: whether to enable wrapping (default: no wrap)                                       |
| [flowAlign](./Flow/flowAlign.md) | Alignment: alignment of child elements (default: top-left)                                     |
| [gap](./Flow/gap.md)             | Gap: spacing between child elements (default: 0)                                               |
| [padding](./Flow/padding.md)     | Padding: container inner spacing (default: 0)                                                  |
| [itemBox](./Flow/itemBox.md)     | Box type: which [box type](../../../guide/advanced/bounds.md) of children to use (default box) |

## Child Layout Properties in Flow

| Name                                 | Description                                                                      |
| ------------------------------------ | -------------------------------------------------------------------------------- |
| [inFlow](./Flow/inFlow.md)           | Join layout: whether element participates in auto layout (default: yes)          |
| [autoWidth](./Flow/autoWidth.md)     | Auto width: distribute remaining width (ignores width, like Flex grow/shrink)    |
| [autoHeight](./Flow/autoHeight.md)   | Auto height: distribute remaining height (ignores height, like Flex grow/shrink) |
| [widthRange](./Flow/widthRange.md)   | Width constraint: limits autoWidth range                                         |
| [heightRange](./Flow/heightRange.md) | Height constraint: limits autoHeight range                                       |
| [lockRatio](./Flow/lockRatio.md)     | Lock ratio: whether to preserve aspect ratio when using auto sizing              |

## Inheritance

### Flow  >  [Box](../../../reference/display/Box.md)  >  [UI](../../../reference/display/UI.md)

## Examples

<case name="Flow" count=1 height=130 editor=false></case>

### Auto layout

<<< @/code/plugin/flow/x.ts

<case name="FlowWrap" index=0 height=130 editor=false></case>

### Auto wrap along X axis

<<< @/code/plugin/flow/flowWrap/x.ts

<case name="FlowAlign" index=4 height=130 editor=false></case>

### Center alignment

<<< @/code/plugin/flow/flowAlign/center.ts

<case name="FlowGap"  index=0 height=130 editor=false></case>

### Fixed numeric gap

<<< @/code/plugin/flow/gap/gap.ts

<case name="FlowPadding" index=0 height=160 editor=false></case>

### Set padding

<<< @/code/plugin/flow/padding/padding.ts

<case name="FlowIn" index=1 height=160 editor=false></case>

### Element excluded from auto layout

<<< @/code/plugin/flow/inFlow/out.ts

<case name="FlowAutoSize" index=0 height=130 editor=false></case>

### Auto width

<<< @/code/plugin/flow/autoWidth/width.ts

<case name="FlowAutoSize" index=2 height=130 editor=false></case>

### Auto height

<<< @/code/plugin/flow/autoHeight/height.ts

### Combined properties

<<< @/code/plugin/flow/flow.ts
