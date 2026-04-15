# pick

Pick elements by a coordinate point (simulate cursor picking elements).

## Key Method

### pick ( hitPoint: [`IPointData`](../interface/math/Math#ipointdata), options?: `IPickOptions` ): `IPickResult`

Pick an element based on a world coordinate point. Supports penetration path detection, and returns the target element and its path.

```ts
interface IPickOptions {
  hitRadius?: number // Pick radius, default is 0
  through?: boolean // Whether to return through-path results, default is false
  findList?: ILeaf[] // Pick from a specified list of elements
  exclude?: ILeafList // Exclude specified elements
  ignoreHittable?: boolean // Ignore element's hittable property, default is false
}

interface IPickResult {
  target: ILeaf // The picked target element
  path: ILeafList // Picking path, usually used for event bubbling
  throughPath?: ILeafList // Through path, used to find underlying elements covered by the target
}
```

## Belongs to

### [Group](../display/Group.md)

## Example

### Pick element by point

::: code-group
<<< @/code/property/pick/point.ts [Leafer]
<<< @/code/property/pick/app/point.ts [App]
:::
