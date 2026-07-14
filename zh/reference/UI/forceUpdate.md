# forceUpdate

强制更新元素。

## 关键属性

### forceUpdate ( typeOrAttrName?: `IForceUpdateType` )

强制更新元素（异步），默认为 'bounds'， 会更新元素的布局与渲染，可指定其他类型或元素属性名 `attrName` 以提高更新性能。

采用非属性名的类型时（如：'bounds'、'stroke'、'surface'）, 不会触发属性变化事件。

```ts
export type IForceUpdateType =
  | 'bounds' // 强制渲染并更新 box 包围盒
  | 'stroke' // 强制渲染并更新 stroke 包围盒
  | 'surface' // 仅强制渲染
  | (string & {}) // 元素的属性名称
```

### updateLayout ( )

请求更新布局，若布局无变化，则会忽略更新。

## 归属

### [UI 元素](../display/UI.md)
