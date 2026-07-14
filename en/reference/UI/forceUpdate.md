# forceUpdate

Force update an element.

## Key Property

### forceUpdate( typeOrAttrName?: `IForceUpdateType` )

Forces an asynchronous update of the element. The default is `'bounds'`, which updates both the element's layout and rendering. You can specify another update type or an element attribute name (`attrName`) to improve update performance.

When using a predefined update type (such as `'bounds'`, `'stroke'`, or `'surface'`) instead of an attribute name, no attribute change events will be triggered.

```ts
export type IForceUpdateType =
  | 'bounds' // Force rendering and update the box bounds
  | 'stroke' // Force rendering and update the stroke bounds
  | 'surface' // Force rendering only
  | (string & {}) // Element attribute name
```

### updateLayout ( )

Request a layout update. If the layout has not changed, the update will be ignored.

## Belongs to

### [UI Element](../display/UI.md)
