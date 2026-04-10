# JSON

导入导出 JSON 对象 / 字符串。

:::tip 注意

App 元素 暂不支持直接导入导出。

可以导出 `app.tree` 为 json， 再通过 `app.tree.set( {children: json.children })` 导入。

:::

## 导出

### toJSON ( options?: `IJSONOptions` ): [`IUIInputData`](../../api/interfaces/IUIInputData.md)

导出 JSON 对象。

```ts
interface IJSONOptions {
  matrix?: boolean
}
```

<<< @/code/property/json/export.ts

### toString ( options?: `IJSONOptions` ): `string`

导出 JSON 字符串。

```ts
interface IJSONOptions {
  matrix?: boolean
}
```

## 辅助属性

### skipJSON: `boolean`

子元素是否跳过JSON导出。

```ts
rect.skipJSON = true
```

### childlessJSON: `boolean`

导出 JSON 时是否阻止子元素一起导出（一般用于自定义元素）, 默认为 false。

```ts
group.childlessJSON = true
```

## 导入

### 创建方式

:::code-group
<<< @/code/property/json/create.ts [Leafer]
<<< @/code/property/json/app/create.ts [App]
:::

:::code-group
<<< @/code/property/json/leafer.ts [Leafer]
<<< @/code/property/json/app/leafer.ts [App]
:::

### set 方式

:::code-group
<<< @/code/property/json/set.ts [Leafer]
<<< @/code/property/json/app/set.ts [App]
:::

## 归属

### [UI 元素](../display/UI.md)
