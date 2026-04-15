<script setup>
import Case from '/component/Case.vue'
</script>

# Frame Element

Create a canvas/artboard. It extends [Box](./Box.md) and has a default white background. Content exceeding its width and height will be clipped, similar to a webpage in HTML5. It is commonly used to create artboards in design applications.

<case name="Frame" editor=false></case>

<br/>

::: tip Inheritance
Frame  >  [Box](./Box.md)  >  [Group](./Group.md), [Rect](./Rect.md)  >  [UI](./UI.md)
:::

## Key Properties

### width: `number`

Width.

### height: `number`

Height.

### fill: `string` | [`Paint`](../interface/ui/Paint) ｜ [`Paint`](../interface/ui/Paint.md)[]

Default background is white. To make it transparent, you can set an empty string or `'#FFF0'`.

### overflow: `IOverflow`

Controls how content exceeding width and height is displayed. Defaults to `hide`.

When set to `'scroll'`, you need to install the [Box Scroll Advanced Plugin](https://www.pxgrow.com/plugin/view/?id=10003).

```ts
type IOverflow =
  | 'show' // show
  | 'hide' // hide
  | 'scroll' // show scrollbars
  | 'x-scroll' // only horizontal scrollbar
  | 'y-scroll' // only vertical scrollbar
```

## Editor Properties

### resizeChildren: `boolean`

Whether child elements resize along with the Frame. Defaults to `false`.

## Computed Properties (read-only)

### isOverflow: `boolean`

Whether child elements overflow the [boxBounds](../UI/bounds.md#boxbounds-iboundsdata). This value is available only after Box layout is completed.

### scrollWorldTransform: [`IMatrixWithScaleData`](../../api/interfaces/IMatrixWithScaleData.md)

The transformation matrix of the scroll area relative to world coordinates, including scaleX and scaleY.

If scrolling does not exist, it returns the element’s [worldTransform](../UI/transform.md#worldtransform-imatrixwithscaledata) matrix.

## Inheritance

### Frame  >  [Box](./Box.md)  >  [Group](./Group.md), [Rect](./Rect.md)  >  [UI](./UI.md)

<!-- ## API

### [Frame](../../api/classes/Frame.md) -->

## Examples

<case name="Frame" index=0 editor=false></case>

### Create Artboard

::: code-group
<<< @/code/display/Frame/create.ts [Leafer]
<<< @/code/display/Frame/app/create.ts [App]
:::
