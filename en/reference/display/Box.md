<script setup>
import Case from '/component/Case.vue'
</script>

# Box Element

Create a Box. It combines the functionality of [Group](./Group.md) and the visual styling of [Rect](./Rect.md). Similar to a DIV in HTML5, it can be nested continuously.

<case name="Box" editor=false></case>

<br/>

::: tip Inheritance
Box &nbsp;>&nbsp; [Group](./Group.md), [Rect](./Rect.md) &nbsp;>&nbsp; [UI](./UI.md)
:::

## Key Properties

### width: `number`

Width. If not set or set to `undefined`, it will automatically adapt to its content.

You can use the [isAutoWidth](../UI/size.md#isautowidth-boolean) property to determine whether it is auto width.

### height: `number`

Height. If not set or set to `undefined`, it will automatically adapt to its content.

You can use the [isAutoHeight](../UI/size.md#isautowidth-boolean) property to determine whether it is auto height.

### overflow: `IOverflow`

Controls how content exceeding the width and height is displayed. Defaults to `'show'`.

When set to `'scroll'`, you need to install the [Box Scroll Advanced Plugin](https://www.pxgrow.com/plugin/view/?id=10003).

```ts
type IOverflow =
  | 'show' // show
  | 'hide' // hide
  | 'scroll' // show scrollbars
  | 'x-scroll' // only horizontal scrollbar
  | 'y-scroll' // only vertical scrollbar
```

## Scroll Properties

Used for scrolling internal elements in Box / Frame, enabling scrollbar behavior.

### scrollX: `number`

Scroll amount of internal elements along the x-axis.

### scrollY: `number`

Scroll amount of internal elements along the y-axis.

### scrollConfig: [`IScrollConfig`](../../api/interfaces/IScrollConfig.md)

Configuration for scrollbar style and behavior. Requires installation of the [Box Scroll Advanced Plugin](https://www.pxgrow.com/plugin/view/?id=10003).

```ts
interface IScrollConfig {
  theme?: IScrollTheme // scrollbar theme, can be custom registered
  style?: IBoxInputData // scrollbar style, supports Box visual styles
  size?: number // scrollbar size
  cornerRadius?: number // scrollbar corner radius, defaults to half of size
  endsMargin?: number // margin at both ends of scrollbar
  sideMargin?: number // margin on both sides
  minSize?: number // minimum visible size
  scaleFixed?: IScaleFixed // whether scale keeps original proportion
  scrollType?: 'drag' | 'move' | 'both' // scroll mode
  stopDefault?: boolean // whether to prevent default viewport scrolling
  hideOnActionEnd?: boolean | 'hover' | 'scroll' // auto-hide behavior after interaction
}

type IScrollTheme = 'light' | 'dark' | (string & {})

// whether scale keeps original proportion during zoom
// zoom-in means only preserve proportion when zooming in
type IScaleFixed = boolean | 'zoom-in'
```

## Editor Properties

### textBox: `boolean`

Whether this is a text box. Defaults to `false`.

When enabled, you can double-click the Box element in the editor to directly edit its internal [editable](../UI/editable.md) child text. Suitable for input fields, sticky notes, mind maps, and flowchart text editing scenarios.

### resizeChildren: `boolean`

Whether child elements resize together with the Box. Defaults to `false`.

Child [Text](./Text.md) elements need to enable [resizeFontSize](./Text.md#resizefontsize-boolean) to scale their font size accordingly.

## Computed Properties (read-only)

### isOverflow: `boolean`

Whether child elements overflow the [boxBounds](../UI/bounds.md#boxbounds-iboundsdata). This value is available only after Box layout is completed.

### scrollWorldTransform: [`IMatrixWithScaleData`](../../api/interfaces/IMatrixWithScaleData.md)

The transformation matrix of the scroll area relative to world coordinates, including scaleX and scaleY.

If scrolling does not exist, it returns the element’s [worldTransform](../UI/transform.md#worldtransform-imatrixwithscaledata) matrix.

## Path Mode

### [Path priority mode](../UI/path.md)

## Inheritance

### Box  >  [Group](./Group.md), [Rect](./Rect.md)  >  [UI](./UI.md)

<!-- ## API

### [Box](../../api/classes/Box.md) -->

## Examples

<case name="Box" index=0 editor=false></case>

### Create a Box

::: code-group
<<< @/code/display/Box/create.ts [Leafer]
<<< @/code/display/Box/app/create.ts [App]
:::

<case name="Box" index=1 editor=false></case>

### Hide overflow content

::: code-group
<<< @/code/display/Box/overflow.ts [Leafer]
<<< @/code/display/Box/app/overflow.ts [App]
:::

<case name="Box" index=6 editor=false></case>

### Create a self-adaptive background text

::: code-group
<<< @/code/display/Box/text.ts [Leafer]
<<< @/code/display/Box/app/text.ts [App]
:::
