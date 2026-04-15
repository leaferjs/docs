<script setup>
import Case from '/component/Case.vue'
</script>

# Ellipse Element

Draw circles, rings, sector rings, sectors, arcs, and ellipses. To draw from the center point, see [around](../UI/around.md).

<case name="Ellipse" editor=false></case>

<br/>

::: tip Inheritance
Ellipse  >  [UI](./UI.md)
:::

## Key Properties

### width: `number`

Diameter on the X axis.

### height: `number`

Diameter on the Y axis.

```ts
// circle
width: 100
height: 100

// ellipse
width: 50
height: 100
```

### startAngle: `number`

Start angle of the arc. See [angle](../interface/math/Math#rotation). Range: -180 to 180.

### endAngle: `number`

End angle of the arc. See [angle](../interface/math/Math#rotation). Range: -180 to 180.

### innerRadius: `number`

Inner radius ratio. Range: 0.0 to 1.0.

```ts
// sector
startAngle: -60
endAngle: 180

// ring
innerRadius: 0.5
```

## Corner Properties

### cornerRadius: `number`

Corner radius that makes shape corners smoother.

::: tip Note
Requires installing the [corner plugin](../../plugin/in/corner/index.md), or using the full [leafer](../../guide/install/editor/start.md) bundle (already includes this plugin).
:::

## Box Element

### [EllipseBox](../../plugin/in/box/EllipseBox.md)

## Inheritance

### Ellipse  >  [UI](./UI.md)

<!-- ## API

### [Ellipse](../../api/classes/Ellipse.md) -->

## Examples

<case name="Ellipse" index=0 editor=false></case>

### Draw Circle

The center point is located at `width / 2`, `height / 2`.

::: code-group
<<< @/code/display/Ellipse/circle.ts [Leafer]
<<< @/code/display/Ellipse/app/circle.ts [App]
:::

<case name="Ellipse" index=1 editor=false></case>

### Draw Ring

::: code-group
<<< @/code/display/Ellipse/ring.ts [Leafer]
<<< @/code/display/Ellipse/app/ring.ts [App]
:::

<case name="Ellipse" index=2 editor=false></case>

### Draw Sector Ring

::: code-group
<<< @/code/display/Ellipse/sectorRing.ts [Leafer]
<<< @/code/display/Ellipse/app/sectorRing.ts [App]
:::

<case name="Ellipse" index=3 editor=false></case>

### Draw Sector

::: code-group
<<< @/code/display/Ellipse/sector.ts [Leafer]
<<< @/code/display/Ellipse/app/sector.ts [App]
:::

<case name="Ellipse" index=4 editor=false></case>

### Draw Rounded Arc

::: code-group
<<< @/code/display/Ellipse/arc.ts [Leafer]
<<< @/code/display/Ellipse/app/arc.ts [App]
:::

<case name="Ellipse" index=5 editor=false></case>

### Draw Rounded Sector Ring

::: code-group
<<< @/code/display/Ellipse/sectorRingCorner.ts [Leafer]
<<< @/code/display/Ellipse/app/sectorRingCorner.ts [App]
:::

<case name="Ellipse" index=6 editor=false></case>

### Draw Ellipse

::: code-group
<<< @/code/display/Ellipse/ellipse.ts [Leafer]
<<< @/code/display/Ellipse/app/ellipse.ts [App]
:::
