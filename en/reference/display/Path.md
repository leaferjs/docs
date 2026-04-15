<script setup>
import Case from '/component/Case.vue'
</script>

# Path Element

Draw paths. You can create arbitrary shapes using path data. See [drawing commands](../interface/ui/PathData.md).

<case name="Path" editor=false></case>

<br/>

::: tip Inheritance
Path  >  [UI](./UI.md)
:::

## Key Properties

### path: [`IPathString`](../interface/ui/PathData.md#ipathstring) ｜ [`IPathCommandData`](../interface/ui/PathData.md#ipathcommanddata) ｜ [`IPathCommandObject`](../interface/ui/PathData.md#ipathcommandobject)[]

Path data. Supports [SVG path strings](../interface/ui/PathData.md#ipathstring), [numeric command arrays](../interface/ui/PathData.md#ipathcommanddata), and [object-based command arrays](../interface/ui/PathData.md#ipathcommandobject).

You can use the [pen tool](#pen-pathcreator) to quickly create paths.

### windingRule: `WindingRule`

Path winding rule. Defaults to `nonzero`.

Defines the fill behavior when multiple paths overlap, enabling effects such as union, intersection, and subtraction.

```ts
type WindingRule = 'nonzero' | 'evenodd'
```

## Readonly Properties

### pen: [PathCreator](../path/PathCreator.md)

A drawing pen that works like the Canvas 2D API, allowing fast [path creation](../path/PathCreator.md) with extended methods.

The pen directly modifies the element’s `path` property.

::: danger Note
To reduce the number of created pen instances, a single global pen is shared. When accessing `pen`, it automatically binds to the current element’s path.

Therefore, the pen must be used immediately after the element, completing the drawing in one chain, e.g.:
`rect.pen.moveTo(100,100).lineTo(200,200)`.
:::

## Corner Properties

### cornerRadius: `number`

Corner radius that smooths path corners.

::: tip Note
Smooth transitions between curves and lines require installing the [corner plugin](../../plugin/in/corner/index.md).
:::

## Box Element

### [PathBox](../../plugin/in/box/PathBox.md)

## Inheritance

### Path  >  [UI](./UI.md)

<!-- ## API

### [Path](../../api/classes/Path.md) -->

## Examples

<case name="Path" index=5 editor=false></case>

### Create Path

::: code-group
<<< @/code/display/Path/cafe.ts [Leafer]
<<< @/code/display/Path/app/cafe.ts [App]
:::

<case name="Pen" index=0 editor=false></case>

### Winding Path

The bottom rounded rectangle and circle intersect, creating a cut-out effect.

::: code-group
<<< @/code/display/Path/group.ts [Leafer]
<<< @/code/display/Path/app/group.ts [App]
:::

<case name="Rect" index=6 editor=false></case>

### Draw Using Pen

::: code-group
<<< @/code/property/path/Path/pen.ts [Leafer]
<<< @/code/property/path/Path/app/pen.ts [App]
:::

### Use Path Data

::: code-group
<<< @/code/property/path/Path/path.ts [Leafer]
<<< @/code/property/path/Path/app/path.ts [App]
:::
