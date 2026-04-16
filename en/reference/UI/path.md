<script setup>
import Case from '/component/Case.vue'
</script>

# path

Path-first mode. It can be used to modify the shape of a [Box](../display/Box.md), or convert a normal element into a path-based element.

Once `path` data is set or the [pen](#pen-pathcreator) is used, the element switches to path mode and prioritizes rendering the manually defined path.

## Key Property

### path: [`IPathString`](../interface/ui/PathData.md#ipathstring) | [`IPathCommandData`](../interface/ui/PathData.md)

Path data, supporting both SVG and Canvas [drawing commands](../interface/ui/PathData.md).

You can use the [pen](#pen-pathcreator) for quick path creation.

**Convert current element shape to path: [getPath()](./getPath.md)**

```ts
// Convert a polygon into a path for editing
polygon.path = polygon.getPath()
```

### windingRule: `WindingRule`

Path winding rule. Defaults to `nonzero`.

两条以上路径重合时的填充算法，可产生相加、相交、减去的效果。

```ts
type WindingRule = 'nonzero' | 'evenodd'
```

## Read-only Properties

### pathInputed: `boolean`

Whether the element is in path mode.

Setting `path` to `null` restores it back to non-path mode.

### pen: [PathCreator](../path/PathCreator.md)

A pen tool that works like the Canvas 2D API, allowing fast [path drawing](../path/PathCreator.md) with additional enhanced methods.

The pen directly modifies the element’s `path` data.

:::danger Note

To reduce instance creation, the pen is globally shared. Accessing `pen` automatically attaches the current element’s path.

Therefore, operations must be completed in sequence on the same element, e.g.:
`rect.pen.moveTo(100,100).lineTo(200,200)`.

:::

## 归属

### [UI Element](../display/UI.md)

## Example

<case name="Rect" index=6 editor=false></case>

### Draw using pen

:::code-group
<<< @/code/property/path/pen.ts [Leafer]
<<< @/code/property/path/app/pen.ts [App]
:::

### Using path data

:::code-group
<<< @/code/property/path/path.ts [Leafer]
<<< @/code/property/path/app/path.ts [App]
:::
